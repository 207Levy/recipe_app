from distutils.command.clean import clean
from fastapi import APIRouter, HTTPException
from db_manager import DBManeger
from dto.recipe import Recipe
import requests

router = APIRouter()
db_manager = DBManeger()

router = APIRouter(
    prefix="/recipes",
    tags=["recipes"]
)


@router.get("/{ingredient}")
async def get_items(ingredient: str, dairy: bool = False, gluten: bool = False):

    recipes_result = []

    response = requests.get(
        f"https://recipes-goodness.herokuapp.com/recipes/{ingredient}")
    api_recipes = response.json()
    recipes = [Recipe(**r) for r in api_recipes["results"]]
    if dairy:
        recipes = clean_from_family(recipes, "dairy")
    if gluten:
        recipes = clean_from_family(recipes, "gluten")

    return recipes


def clean_from_family(recipes: list[Recipe], family):
    cleaned = []
    for r in recipes:
        is_dairy = False
        for i in r.ingredients:
            if family in db_manager.get_food_family(i):
                is_dairy = True
                break
        if is_dairy:
            continue
        cleaned.append(r)

    return cleaned
