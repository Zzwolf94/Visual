from sqlmodel  import SQLModel, create_engine, Field
from typing import Optional

class Proyecto(SQLModel, table=True):
    id: Optional[int] = Field(None, primary_key=True)
    name: str
    description: Optional[str]
    tareas: str
    lead: str


class Tarea(SQLModel, table=True):
    id: Optional[int] = Field(None, primary_key=True)
    name: str
    prioridad: int
    asignado_a: str
    completed: bool = False