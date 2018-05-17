DROP DATABASE IF EXISTS Simpsonsdb;
CREATE database Simpsonsdb;

USE Simpsonsdb;

CREATE TABLE Characters (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  voice_actor VARCHAR(150) NULL,
  episode VARCHAR(100) NULL,
  air_date DATE NULL,
  PRIMARY KEY (id)
);


