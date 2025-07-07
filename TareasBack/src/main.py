from tareas.DocumentController import get_tasks, set_tasks
from pydantic import BaseModel

# class Tarea(BaseModel):
#     title: str
#     description: str
#     priority: str
#     completed: bool


# def main():
#     nueva_tarea = Tarea(
#     title="Nueva tarea",
#     description="Descripción de la nueva tarea",
#     priority="Alta",
#     completed=False
# )
#     username = "nestor"
#     print(get_tasks(username))
   
#     new_func(username, nueva_tarea)

# def new_func(username,nueva_tarea: Tarea):
#     tareas_actuales = get_tasks(username)
#     tareas_actuales.append(nueva_tarea.model_dump())  
#     set_tasks(username, tareas_actuales)


# if __name__ == "__main__":
#     main()

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Welcome to the TareasBack API"}
@app.get("/tareas")
async def read_tasks():
    get_tasks("nestor")  # Example username
    return {"message": "Here you can retrieve tasks"}
