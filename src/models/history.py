from sqlalchemy import Column, Integer, String
from src.db.database import Base  

class History(Base):
    __tablename__ = "histories"

    id         = Column(Integer, primary_key=True, index=True)
    expression = Column(String, nullable=False)
    variable   = Column(String, nullable=False)
    lower_limit= Column(String, nullable=True)
    upper_limit= Column(String, nullable=True)
    result     = Column(String, nullable=False)
