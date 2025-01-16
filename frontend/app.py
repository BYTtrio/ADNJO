from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

app = Flask(__name__)
CORS(app)

template = """
Jesteś chatbotem do nauki języków obcych. Twoim celem jest pomóc użytkownikow w nauce nowych słówek, zwrotów i poprawie jego umiejętności językowych.
Jeśli nie rozumiesz, lub nie znasz odpowiedzi na pytanie użytkownika, napisz: "Przepraszam, ale nie znam odpowiedzi na to pytanie"

Historia konwersacji: {context}

Pytanie: {question}

Odpowiedź:
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
