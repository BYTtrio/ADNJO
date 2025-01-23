from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG)

CORS(app, supports_credentials=True)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    return response

template = """
Jesteś chatbotem do nauki języków obcych. Twoim celem jest pomóc użytkownikow w nauce nowych słówek, zwrotów i poprawie jego umiejętności językowych.
Jeśli nie rozumiesz, lub nie znasz odpowiedzi na pytanie użytkownika, napisz: "Przepraszam, ale nie znam odpowiedzi na to pytanie"

Historia konwersacji: {context}

Pytanie: {question}

Odpowiedź:
"""

model = OllamaLLM(model="llama3.1")
prompt = ChatPromptTemplate.from_template(template)

@app.route("/chat", methods=["POST", "OPTIONS"])
def chat():
    if request.method == "OPTIONS":
        return "", 204
        
    try:
        app.logger.info("Received chat request")
        app.logger.info(f"Request headers: {dict(request.headers)}")
        data = request.get_json()
        app.logger.info(f"Request data: {data}")
        
        if not data:
            return jsonify({"error": "No data provided"}), 400
            
        context = data.get("context", "")
        question = data.get("question", "")
        
        if not question:
            return jsonify({"error": "No question provided"}), 400

        chain = prompt | model
        result = chain.invoke({"context": context, "question": question})

        response = {
            "response": result,
            "context": context + f"\nUser: {question}\nBot: {result}\n",
        }
        return jsonify(response)
        
    except Exception as e:
        app.logger.error(f"Error in chat endpoint: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)
    