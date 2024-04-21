-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema nutrinotes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema nutrinotes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `nutrinotes` DEFAULT CHARACTER SET utf8 ;
USE `nutrinotes` ;

-- -----------------------------------------------------
-- Table `nutrinotes`.`profile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nutrinotes`.`profile` (
  `id_profile` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `data_nasc` DATE NULL,
  `sexo` VARCHAR(10) NULL,
  `email` VARCHAR(50) NULL,
  `telefone` VARCHAR(45) NULL,
  `crn` VARCHAR(45) NULL,
  PRIMARY KEY (`id_profile`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nutrinotes`.`business`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nutrinotes`.`business` (
  `id_business` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `cnpj` VARCHAR(45) NULL,
  `cep` VARCHAR(45) NULL,
  `telefone` VARCHAR(45) NULL,
  `logradouro` VARCHAR(45) NULL,
  `compl` VARCHAR(45) NULL,
  `cidade` VARCHAR(45) NULL,
  `bairro` VARCHAR(45) NULL,
  `uf` VARCHAR(45) NULL,
  `representante` VARCHAR(45) NULL,
  `plano` VARCHAR(45) NULL,
  `responsavel_tec` INT NOT NULL,
  PRIMARY KEY (`id_business`),
  INDEX `fk_business_profile1_idx` (`responsavel_tec` ASC) ,
  CONSTRAINT `fk_business_profile1`
    FOREIGN KEY (`responsavel_tec`)
    REFERENCES `nutrinotes`.`profile` (`id_profile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nutrinotes`.`reminder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nutrinotes`.`reminder` (
  `id_reminder` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `descricao` VARCHAR(255) NULL,
  `data_evento` DATE NULL,
  `id_profile` INT NOT NULL,
  PRIMARY KEY (`id_reminder`),
  INDEX `fk_lembretes_profile1_idx` (`id_profile` ASC) ,
  CONSTRAINT `fk_lembretes_profile1`
    FOREIGN KEY (`id_profile`)
    REFERENCES `nutrinotes`.`profile` (`id_profile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nutrinotes`.`department`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nutrinotes`.`department` (
  `id_setores` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `id_business` INT NOT NULL,
  PRIMARY KEY (`id_setores`),
  INDEX `fk_setores_business1_idx` (`id_business` ASC) ,
  CONSTRAINT `fk_setores_business1`
    FOREIGN KEY (`id_business`)
    REFERENCES `nutrinotes`.`business` (`id_business`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nutrinotes`.`checkList`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nutrinotes`.`checkList` (
  `id_checkList` INT NOT NULL AUTO_INCREMENT,
  `nome_gestor` VARCHAR(45) NULL,
  `data_auditoria` DATE NULL,
  `id_setores` INT NOT NULL,
  `id_business` INT NOT NULL,
  PRIMARY KEY (`id_checkList`),
  INDEX `fk_checkList_department1_idx` (`id_setores` ASC) ,
  INDEX `fk_checkList_business1_idx` (`id_business` ASC) ,
  CONSTRAINT `fk_checkList_department1`
    FOREIGN KEY (`id_setores`)
    REFERENCES `nutrinotes`.`department` (`id_setores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_checkList_business1`
    FOREIGN KEY (`id_business`)
    REFERENCES `nutrinotes`.`business` (`id_business`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nutrinotes`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nutrinotes`.`user` (
  `login` VARCHAR(50) NULL,
  `senha` VARCHAR(50) NULL,
  `id_profile` INT NOT NULL,
  INDEX `fk_user_profile1_idx` (`id_profile` ASC) ,
  CONSTRAINT `fk_user_profile1`
    FOREIGN KEY (`id_profile`)
    REFERENCES `nutrinotes`.`profile` (`id_profile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nutrinotes`.`checklist_template`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nutrinotes`.`checklist_template` (
  `id_template` INT NOT NULL AUTO_INCREMENT,
  `nome_template` VARCHAR(45) NULL,
  `tipo_checklist` VARCHAR(25) NULL,
  `frequencia` INT(2) NULL,
  `id_setores` INT NOT NULL,
  PRIMARY KEY (`id_template`),
  INDEX `fk_checklist_template_department1_idx` (`id_setores` ASC) ,
  CONSTRAINT `fk_checklist_template_department1`
    FOREIGN KEY (`id_setores`)
    REFERENCES `nutrinotes`.`department` (`id_setores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nutrinotes`.`questions_checklist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nutrinotes`.`questions_checklist` (
  `id_questions` INT NOT NULL AUTO_INCREMENT,
  `questao` VARCHAR(100) NULL,
  `id_template` INT NOT NULL,
  PRIMARY KEY (`id_questions`),
  INDEX `fk_questions_checklist_checklist_template1_idx` (`id_template` ASC) ,
  CONSTRAINT `fk_questions_checklist_checklist_template1`
    FOREIGN KEY (`id_template`)
    REFERENCES `nutrinotes`.`checklist_template` (`id_template`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nutrinotes`.`item_checklist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nutrinotes`.`item_checklist` (
  `id_checkList` INT NOT NULL,
  `id_questions` INT NOT NULL,
  `valor` CHAR(1) NULL,
  `observacoes` TEXT NULL,
  PRIMARY KEY (`id_checkList`, `id_questions`),
  INDEX `fk_checkList_has_questions_checklist_questions_checklist1_idx` (`id_questions` ASC) ,
  INDEX `fk_checkList_has_questions_checklist_checkList1_idx` (`id_checkList` ASC) ,
  CONSTRAINT `fk_checkList_has_questions_checklist_checkList1`
    FOREIGN KEY (`id_checkList`)
    REFERENCES `nutrinotes`.`checkList` (`id_checkList`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_checkList_has_questions_checklist_questions_checklist1`
    FOREIGN KEY (`id_questions`)
    REFERENCES `nutrinotes`.`questions_checklist` (`id_questions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nutrinotes`.`midia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nutrinotes`.`midia` (
  `id_midia` INT NOT NULL AUTO_INCREMENT,
  `midia` VARCHAR(45) NULL,
  `id_profile` INT NOT NULL,
  PRIMARY KEY (`id_midia`),
  INDEX `fk_midia_profile1_idx` (`id_profile` ASC) ,
  CONSTRAINT `fk_midia_profile1`
    FOREIGN KEY (`id_profile`)
    REFERENCES `nutrinotes`.`profile` (`id_profile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
