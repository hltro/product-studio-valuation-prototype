from flask import Flask, request, jsonify
from chain import create_chain
import os

app = Flask(__name__)
chatbots = {}

def get_projection_input(path):
    with open(path, 'r') as file:
        csv_content = file.read()
    return csv_content

#example for running the conversation chain
'''
def run():
    openai_api_key = "" #your own openai api key
    conversation = create_chain(openai_api_key)
    
    input = numeric_month,calendar_month,Director of Sales & Marketing,Sales Manager,Commissions,Director of Engagement,Driver,Engagement Associate,Executive Director,Business Office Director,Concierge,Director of Memory Care,MC Care Manager,MC Medication Care Manager,Director of Plant Operations,Plant Operations Assistant,Director of Housekeeping,Housekeeping Associate,Director of Culinary Services,Chef,Dining Room Associate,Dish Washer,MC Attendant,Director of Health & Wellness,LPN,Medication Care Manager,Care Manager
1,2023-07-01,1.0,1.0,0.0,1.0,1.4,0.0,1.0,1.0,2.1,1.0,21.428571428571427,14.285714285714286,1.0,0.5,0.0,0.0,1.0,0.0,32.6530612244898,2.0,1.4,1.0,42.857142857142854,17.857142857142858,11.904761904761905
2,2023-08-01,1.0,1.0,0.0,1.0,1.4,0.0,1.0,1.0,2.1,1.0,21.904761904761905,14.642857142857144,1.0,0.5,0.0,0.0,1.0,0.0,33.265306122448976,2.0,1.4,1.0,43.80952380952381,18.214285714285715,12.142857142857142
3,2023-09-01,1.0,1.0,0.0,1.0,1.4,0.0,1.0,1.0,2.1,1.0,22.38095238095238,15.000000000000002,1.0,0.5,0.0,0.0,1.0,0.0,33.87755102040816,2.0,1.4,1.0,44.76190476190476,18.571428571428573,12.38095238095238
4,2023-10-01,1.0,1.0,0.0,1.0,1.4,0.0,1.0,1.0,2.1,1.0,22.857142857142858,15.357142857142858,1.0,0.5,0.0,0.0,1.0,0.0,34.48979591836734,2.0,1.4,1.0,45.714285714285715,18.92857142857143,12.619047619047619
5,2023-11-01,1.0,1.0,0.0,1.0,1.4,0.0,1.0,1.0,2.1,1.0,23.333333333333332,15.714285714285715,1.0,0.5,0.0,0.0,1.0,0.0,35.10204081632653,2.0,1.4,1.0,46.666666666666664,19.28571428571429,12.857142857142856



    conversation.run(input)
    return conversation.run("what about the projection for the medication care manager in August 2023? ")
'''

@app.route('/get_llm_answer', methods=['POST'])
def get_llm_answer():
    # Extract user_id and input_string from the request JSON
    user_id = request.json.get('user_id')
    input_string = request.json.get('input_string')
    csv_paths = [
    'dcf/senior_care/projections/all_fte_projections.csv',
    'dcf/senior_care/projections/all_occupancy_projections.csv',
    'dcf/senior_care/projections/all_rate_projections.csv'
]   

    # Retrieve the OpenAI API key securely
    openai_api_key = os.getenv('OPENAI_API_KEY')

    # Check if the chatbot exists for this user_id, else create it
    if user_id not in chatbots:
        chatbots[user_id] = create_chain(openai_api_key)
        all_fte_projections_str = get_projection_input(csv_paths[0])
        all_occupancy_projections_str = get_projection_input(csv_paths[1])
        all_rate_projections_str = get_projection_input(csv_paths[2])
        projection_string = all_fte_projections_str+all_occupancy_projections_str+all_rate_projections_str
        chatbots[user_id].run(projection_string)

    # Process the string
    output_string = chatbots[user_id].run(input_string)

    # Return the processed string
    return jsonify({"output_string": output_string})

if __name__ == '__main__':
    # Use an environment variable to set the Flask environment
    #test function
    '''
    output = run()
    print(output)
    '''
    env = os.getenv('FLASK_ENV', 'development')
    app.run(debug=env == 'development')
