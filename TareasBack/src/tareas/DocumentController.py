import json
def get_tasks(username: str):
    try:
        with open(f"documents/{username}.json", "r", encoding="utf-8") as file:
            return json.load(file)
        
    except FileNotFoundError:
        with open(f"documents/{username}.json", "w", encoding="utf-8") as file:
            json.dump([], file)
            return ["Archivo creado con []"]


def set_tasks(username: str, listado_tareas):
    
    with open(f"documents/{username}.json", "w", encoding="utf-8") as file:
        json.dump(listado_tareas, file)
    return "Archivo escrito correctamente"