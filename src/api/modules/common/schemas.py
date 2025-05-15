from pydantic import BaseModel

class ExpressionIn(BaseModel):
    expression: str
