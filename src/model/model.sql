CREATE TABLE countries(
    country_id serial PRIMARY KEY,
    country_name text not null
);

CREATE TABLE regions(
    region_id serial PRIMARY KEY,
    region_name text not null,
    country_id serial REFERENCES countries(country_id)
);

INSERT INTO countries(country_name) VALUES('USE');
INSERT INTO countries(country_name) VALUES('UK');
INSERT INTO countries(country_name) VALUES('ANDALUS');

INSERT INTO regions(region_name, country_id) VALUES('Vashington', '1');
INSERT INTO regions(region_name, country_id) VALUES('New York', '1');

INSERT INTO regions(region_name, country_id) VALUES('London', '2');
INSERT INTO regions(region_name, country_id) VALUES('London 1', '2');

INSERT INTO regions(region_name, country_id) VALUES('Andalus region', '3');
INSERT INTO regions(region_name, country_id) VALUES('Andalus region 1', '3');