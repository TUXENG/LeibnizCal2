# app/api/history/service.py

from sqlalchemy.orm import Session
from src.models.history import History
from src.api.modules.common.schemas import HistoryCreate


def create_history(db: Session, data: HistoryCreate):
    history = History(**data.model_dump())
    db.add(history)
    db.commit()
    db.refresh(history)
    return history

def get_all_history(db: Session):
    return db.query(History).order_by(History.id.desc()).all()



def save_history_service(entry, db):
    new_entry = History(
        expression=entry.expression,
        variable=entry.variable,
        lower_limit=entry.lower,
        upper_limit=entry.upper,
        result=entry.result
    )
    db.add(new_entry)
    db.commit()
    db.refresh(new_entry)
    return {"message": "Guardado con éxito"}


def delete_history_by_id(history_id: int, db: Session):
    entry = db.query(History).filter(History.id == history_id).first()
    if entry:
        db.delete(entry)
        db.commit()
        return True
    return False
