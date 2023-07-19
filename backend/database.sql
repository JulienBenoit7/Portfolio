CREATE TABLE PROJET (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  description TEXT NULL,
  url VARCHAR(250)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE LANGUAGE (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE PROJET_LANGUAGE (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_projet int(11) UNSIGNED NOT NULL,
  id_LANGUAGE int(11) UNSIGNED NOT NULL,
  KEY `fk_PROJET` (`id_PROJET`),
  KEY `fk_LANGUAGE` (`id_LANGUAGE`),
  CONSTRAINT `fk_PROJET` FOREIGN KEY (id_projet) REFERENCES `PROJET`(id),
  CONSTRAINT `fk_LANGUAGE` FOREIGN KEY (id_LANGUAGE) REFERENCES `LANGUAGE`(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO PROJET (name, description, url) VALUES ('Wild Clicker','Premier projet réalisé à la Wild Code School','https://github.com/JulienBenoit7/Projet-1-Wild-Clickers'), ('Wild Beer' , 'Second projet réalisé à la Wild Code School' , 'https://github.com/JulienBenoit7/2023-02-JS-Reims-project-2-wild-beer'), ('Origins digital' , 'Troisième projet réalisé à la Wild Code School' , 'https://github.com/WildCodeSchool/2023-02-JS-Reims-project-3-origins-digital');

INSERT INTO LANGUAGE (name) VALUES ('HTML'), ('CSS'), ('JS'), ('REACT'),('Express');

INSERT INTO PROJET_LANGUAGE (id_PROJET, id_LANGUAGE) VALUES (1 , 2) , (1 , 1) , (1 , 3) , (2 , 4) , (2 , 5) , (2 , 2) , (3 , 2) , (3 , 4) , (3 , 5);
