import os
dependencies = ["fastapi[standard]", "sqlmodel"]
dev_dependencies = ["black", "pytest", "faker"]
ejemplo_env = f"# MYSQL Configuration\nDB_CONNECTION=mysql\nDB_HOST=\nDB_PORT=3306\nDB_DATABASE=\nDB_USERNAME=\nDB_PASSWORD=\n"
dir_raiz = "app"
folders = [
    f"{dir_raiz}/controllers",
    f"{dir_raiz}/models",
    f"{dir_raiz}/database",
    f"{dir_raiz}/routes",
    "tests"
]
gitignore = [".venv", ".env", "create.py", "\n"]

def create_and_install_requirements():
    os.system("python -m pip install --upgrade pip")
    with open("requirements.txt", "w" ) as file:
        for dep in dependencies:
            file.write(dep + "\n")
    with open("dev-requirements.txt", "w") as file:
        for dep in dev_dependencies:
            file.write(dep + "\n")
    os.system("pip install -r requirements.txt")
    os.system("pip install -r dev-requirements.txt")
    
def create_envs():
    with open(".env","w") as file:
        print("Creating .env fake")
    with open(".env.example", "w") as f:
        f.write(ejemplo_env)


def create_gitignore():
    with open(".gitignore", "w") as file:
        for ignore in gitignore:
            file.write(ignore + "\n")

def create_folders_and_inits():
    for folder in folders:
        os.makedirs(folder)
        if dir_raiz in folder:
            with open(f"{folder}/__init__.py", "w") as f: pass

    with open(f"{dir_raiz}/main.py", "w") as file: pass
    with open(f"{dir_raiz}/__init__.py", "w") as file: pass

if __name__ == "__main__":
    create_and_install_requirements()
    create_envs()
    create_gitignore()
    create_folders_and_inits()