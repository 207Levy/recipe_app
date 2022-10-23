USE recipes_app;



CREATE TABLE ingredients(
    name VARCHAR(255) NOT NULL,
    i_family VARCHAR(255), 
    PRIMARY KEY(name),
    FOREIGN KEY(i_family) REFERENCES food_family(family)
);