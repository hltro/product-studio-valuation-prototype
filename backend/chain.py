from langchain.schema import AIMessage, HumanMessage, SystemMessage
from langchain.chat_models import ChatOpenAI
from base import ConversationChain
from langchain.text_splitter import RecursiveCharacterTextSplitter

def create_chain(open_api_key):
    chat = ChatOpenAI(openai_api_key = open_api_key)
    conversation = ConversationChain(llm=chat)
    return conversation
