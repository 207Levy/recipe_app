import pymysql
from fastapi import HTTPException


class DBManeger:

    def __init__(self):
        self.connection = pymysql.connect(
            host="localhost",
            user="root",
            password="",
            db="recipes_app",
            charset="utf8",
            cursorclass=pymysql.cursors.DictCursor
        )

    def get_food_family(self, ingredient):
        ingredient = ingredient.lower()
        try:
            with self.connection.cursor() as cursor:
                query = f'''
                SELECT i_family 
                FROM ingredients
                WHERE name = "{ingredient}";
                '''
                cursor.execute(query)
                result = cursor.fetchall()
                if len(result) == 0:
                    return result
                result = [r["i_family"] for r in result]
                return result
        except:
            print('DB error')
            raise HTTPException(
                status_code=500, detail="DB Error while searching for ingredient")