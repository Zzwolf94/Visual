import json
def main():
    username = input("Please enter yout username: ")
    tareas = input("Please enter your task: ")
    set_tasks(username, tareas)
    try:
        with open(f"documents/{username}.json", "r", encoding="utf-8") as file:
            print(f"Tasks for {username}: {json.load(file)}")
    except FileNotFoundError:
        print(f"No tasks found for {username}. Please set your tasks first.")

def set_tasks(username, listado_tareas):
    with open(f"documents/{username}.json", "w", encoding="utf-8") as file:
        json.dump(listado_tareas, file)



if __name__ == "__main__":
    main()