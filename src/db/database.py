from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from src.api.modules.common.config import DATABASE_URL

# Crear el motor de base de datos
engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}
)

# Crear sesión de base de datos
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

# Declarative Base
Base = declarative_base()
