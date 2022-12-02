CREATE TABLE accountant(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE report(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    accountant_id INTEGER,
    FOREIGN KEY (accountant_id) REFERENCES accountant(id)
);
