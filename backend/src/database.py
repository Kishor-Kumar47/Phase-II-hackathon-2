from sqlmodel import create_engine
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Database URL - using environment variable or default to a local SQLite for development
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./todo_app.db")

# Create the engine
engine = create_engine(DATABASE_URL, echo=True)