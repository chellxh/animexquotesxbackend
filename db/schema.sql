DROP DATABASE IF EXISTS ianime;

CREATE DATABASE ianime;

\c ianime;

CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    category VARCHAR(25),
    release_date DATE NOT NULL,
    rating NUMERIC NOT NULL,
    CHECK (rating > 0 AND rating <= 5)
);

DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    show_id INT REFERENCES shows (id) ON DELETE CASCADE, 
    status TEXT,
    power_lvl INT DEFAULT 5,
    CHECK (power_lvl > 0 AND power_lvl <= 10),
    image TEXT,
    quote TEXT NOT NULL
    
);

DROP TABLE IF EXISTS quotes;

CREATE TABLE quotes (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES characters (id) ON DELETE CASCADE,
    show_id INT REFERENCES shows (id) ON DELETE CASCADE,
    quote TEXT NOT NULL
);