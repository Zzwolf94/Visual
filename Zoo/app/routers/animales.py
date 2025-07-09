from fastapi import APIRouter, HTTPException
from pydantic import ValidationError
from ..models.animales import Animal

router = APIRouter(prefix="/animales", tags=["Los animales"])


animales_db = [
    {
    "nombre":"cabra",
    "edad":20,
    "familia":"cabrita",
    "vivo":True
    },
               {
    "nombre":"pulpo",
    "edad":20,
    "familia":"cabrita",
    "vivo":True
    },
               {
    "nombre":"caballo",
    "edad":20,
    "familia":"cabrita",
    "vivo":True
    },
               {
    "nombre":"oveja",
    "edad":20,
    "familia":"cabrita",
    "vivo":True
    }
               ]

@router.get("/")
async def leer_animales():

    datos_validados=[]
    for item in animales_db:
        try:
            datos_validados.append(Animal(**item))
        except ValidationError:
            pass
    return{
        "success": True,
        "data": animales_db,
        "message":"here you have your endpoints"
    }
@router.get("/{animal_id}")
async def leer_animal(animal_id:int):
    if 0 <= animal_id < len(animales_db):
        return{
            "success": True,
            "data": animales_db[animal_id],
            "message":"aqui tienes tu animal"
        }
    else:
        raise HTTPException(status_code=404, detail="Animal no encontrado")

@router.post("/")
async def crear_animal(animal:Animal):
    animales_db.append(animal.model_dump())

    return{
        "success": True,
        "data": animal,
        "message":"here you have your endpoints"
    }

@router.put("/{animal_id}")
async def modificar_animal(animal_id): ...