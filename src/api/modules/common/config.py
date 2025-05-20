# src/api/modules/common/config.py
import os
from dotenv import load_dotenv

# Cargar variables de entorno desde .env
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '../../../../.env'))

# Obtener la URL de la base de datos
DATABASE_URL = os.getenv("DATABASE_URL")
