
-- -----------------------------------------------------
-- Schema projet_amina
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projet_amina
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projet_amina` DEFAULT CHARACTER SET utf8 ;
USE `projet_amina` ;

-- -----------------------------------------------------
-- Table `projet_amina`.`enseignants`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projet_amina`.`enseignants` ;

CREATE TABLE IF NOT EXISTS `projet_amina`.`enseignants` (
  `idenseignants` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(50) NOT NULL,
  `prenom` VARCHAR(50) NOT NULL,
  `spécialité` VARCHAR(150) NOT NULL,
  `url_image` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idenseignants`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projet_amina`.`ateliers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projet_amina`.`ateliers` ;

CREATE TABLE IF NOT EXISTS `projet_amina`.`ateliers` (
  `idateliers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `image` VARCHAR(250) NOT NULL,
  `description` VARCHAR(250) NOT NULL,
  `durée` VARCHAR(45) NOT NULL,
  `Enseignants_idEnseignants` INT NOT NULL,
  `tarif` INT NOT NULL,
  PRIMARY KEY (`idateliers`),
  INDEX `fk_Ateliers_Enseignants_idx` (`Enseignants_idEnseignants` ASC) VISIBLE,
  CONSTRAINT `fk_Ateliers_Enseignants`
    FOREIGN KEY (`Enseignants_idEnseignants`)
    REFERENCES `projet_amina`.`enseignants` (`idenseignants`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projet_amina`.`reservation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projet_amina`.`reservation` ;

CREATE TABLE IF NOT EXISTS `projet_amina`.`reservation` (
  `idreservation` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(50) NOT NULL,
  `ateliers_idateliers1` INT NOT NULL,
  PRIMARY KEY (`idreservation`, `ateliers_idateliers1`),
  INDEX `fk_reservation_ateliers1_idx` (`ateliers_idateliers1` ASC) VISIBLE,
  CONSTRAINT `fk_reservation_ateliers1`
    FOREIGN KEY (`ateliers_idateliers1`)
    REFERENCES `projet_amina`.`ateliers` (`idateliers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO enseignants (nom, prenom, spécialité, url_image)
VALUES("Smith", "Susan", "dessin", "assets/images/susan_smith.jpg"),
("Milone", "René", "peinture", "assets/images/rene-milone.jpg"),
("Lesley", "Collier", "danse classique", "assets/images/lesley-collier.jpg"),
("Manoukian", "André", "piano", "assets/images/andre-manoukian.jpg");

INSERT INTO ateliers (name, image, description, durée, Enseignants_idEnseignants, tarif)
VALUES("Dessin", "assets/images/dessin.jpg", "Le dessin n’est pas un don mais peut s’apprendre. Nous vous proposons un vaste choix de cours pour que vous puissiez trouver la technique qui vous convient avec le professeur qui vous correspond .", "2heures", 1, 30),
("Peinture", "assets/images/peinture.jpg", "Ces cours sont ouverts aux débutants comme aux personnes voulant parfaire leurs acquis, la peinture contemporaine laissera une plus grande place à l’expression personnelle .", "3heures", 2, 50),
("Danse classique", "assets/images/dance.jpg", "La danse classique est une technique rigoureuse qui commence à partir de 8 ans, la source creaative propose une approche douce et adaptée en fonction des capacités de chacun, les bienfaits sont nombreux quelque soit l'âge !", "1heure", 3, 35),
("Musique", "assets/images/piano.jpg", "Offrir des cours de piano pour débutant à votre enfant est une excellente idée. apprendre le piano apporte de nombreux bénéfices à tout âge, mais ces derniers sont décuplés lorsque l’apprentissage du piano est commencé dès l’enfance", "1heure", 4, 30);

