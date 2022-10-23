
from pydantic import BaseModel


class Recipe(BaseModel):
    title: str
    ingredients: list[str]
    thumbnail: str
    href: str = ""
