from langchain.schema import AIMessage, HumanMessage, SystemMessage
from langchain.chat_models import ChatOpenAI
from base import ConversationChain
from langchain.text_splitter import RecursiveCharacterTextSplitter


def get_projection_input(path):
    with open(path, 'r') as file:
        csv_content = file.read()
    return csv_content

def create_chain(open_api_key):
    chat = ChatOpenAI(openai_api_key = open_api_key)
    conversation_bot = ConversationChain(llm=chat)

    csv_paths = [
    'dcf/senior_care/projections/all_fte_projections.csv',
    'dcf/senior_care/projections/all_occupancy_projections.csv',
    'dcf/senior_care/projections/all_rate_projections.csv'
    ]

    all_fte_projections_str = get_projection_input(csv_paths[0])
    all_occupancy_projections_str = get_projection_input(csv_paths[1])
    all_rate_projections_str = get_projection_input(csv_paths[2])
    projection_string = all_fte_projections_str+all_occupancy_projections_str+all_rate_projections_str
    conversation_bot.run(projection_string)
    
    return conversation_bot
