from pydantic import BaseModel, Field
from datetime import datetime
from pydantic import ConfigDict 

class ExpressionIn(BaseModel):
    expression: str = Field(..., description="Expresión simbólica a integrar")


class IntegralBase(BaseModel):
    expression: str = Field(..., description="Expresión simbólica a integrar")
    variable: str = Field(..., description="Variable de integración")


class UndefinedIntegralRequest(IntegralBase):
    """Para integrales indefinidas"""
    pass


class DefinedIntegralRequest(IntegralBase):
    """Para integrales definidas"""
    lower: str = Field(..., description="Límite inferior de integración")
    upper: str = Field(..., description="Límite superior de integración")


class IntegralResult(BaseModel):
    result: str = Field(..., description="Resultado de la integración en formato LaTeX o string")



class HistoryCreate(BaseModel):
    expression: str
    variable: str
    lower: str
    upper: str
    result: str

class HistoryRead(BaseModel):
    id: int
    expression: str
    result: str
    timestamp: datetime

    class Config:
        model_config = ConfigDict(from_attributes=True)

