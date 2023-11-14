from flask import Flask, request, jsonify
from chain import create_chain


app = Flask(__name__)

@app.route('/process_string', methods=['POST'])

def process_string():
    # Extract the string from the request
    data = request.json
    input_string = data['input_string']
    # Process the string 
    conversation = create_chain("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")
    output_string = conversation.run("Translate this sentence from English to French: "+input_string)

    # Return the processed string
    return jsonify({"output_string": output_string})

if __name__ == '__main__':
    app.run(debug=True)