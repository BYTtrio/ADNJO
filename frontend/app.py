from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

app = Flask(__name__)
CORS(app)

template = """
Odpowiedz na poniższe pytanie:

Tu jest historia conwersacji: {context}

Question: {question}

Answer:
"""

model = OllamaLLM(model="llama3.1")
prompt = ChatPromptTemplate.from_template(template)


@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    context = data.get("context", "")
    question = data.get("question", "")

    chain = prompt | model
    result = chain.invoke({"context": context, "question": question})

    return jsonify(
        {
            "response": result,
            "context": context + f"\nUser: {question}\nBot: {result}\n",
        }
    )


if __name__ == "__main__":
    app.run(debug=True)
