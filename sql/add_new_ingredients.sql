Use recipes_app;
-- INSERT INTO food_family (family)
-- VALUES("dairy");
-- INSERT INTO food_family (family)
-- VALUES("gluten");
SELECT *
FROM food_family;
-- INSERT INTO ingredients (name,i_family) VALUES("Cream","dairy");
-- INSERT INTO ingredients (name,i_family) VALUES("Cheese","dairy");
-- INSERT INTO ingredients (name,i_family) VALUES("Milk","dairy");
-- INSERT INTO ingredients (name,i_family) VALUES("Butter","dairy");
-- INSERT INTO ingredients (name,i_family) VALUES("Creme","dairy");
-- INSERT INTO ingredients (name,i_family) VALUES("Ricotta","dairy");
-- INSERT INTO ingredients (name,i_family) VALUES("Mozzarella","dairy");
-- INSERT INTO ingredients (name,i_family) VALUES("Custard","dairy");
-- INSERT INTO ingredients (name,i_family) VALUES("Cream Cheese","dairy");
-- INSERT INTO ingredients (name,i_family) VALUES("Flour","gluten");
-- INSERT INTO ingredients (name,i_family) VALUES("Bread","gluten");
-- INSERT INTO ingredients (name,i_family) VALUES("spaghetti","gluten");
-- INSERT INTO ingredients (name,i_family) VALUES("Biscuits","gluten");
-- INSERT INTO ingredients (name,i_family) VALUES("Beer","gluten");
SELECT *
FROM ingredients;


SELECT i_family 
FROM ingredients
WHERE name = "{ingredient};