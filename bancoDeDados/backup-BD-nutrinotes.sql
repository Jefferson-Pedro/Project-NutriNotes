-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/04/2024 às 03:46
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `nutrinotes`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `business`
--

CREATE TABLE `business` (
  `id_business` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `cnpj` varchar(20) NOT NULL,
  `cep` varchar(10) NOT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `logradouro` varchar(45) NOT NULL,
  `compl` varchar(45) DEFAULT NULL,
  `cidade` varchar(45) NOT NULL,
  `bairro` varchar(45) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `representante` varchar(50) NOT NULL,
  `plano` varchar(20) DEFAULT NULL,
  `responsavel_tec` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `business`
--

INSERT INTO `business` (`id_business`, `nome`, `cnpj`, `cep`, `telefone`, `logradouro`, `compl`, `cidade`, `bairro`, `uf`, `representante`, `plano`, `responsavel_tec`) VALUES
(1, 'Guanabara Hipermercado', '35.393.438/0001-61', '13188-111', '2635-0809', 'Alameda Roda D\'Água', NULL, 'Hortolândia', 'Condomínio Chácara Grota Azul', 'SP', 'Fulano de Tal', 'Diario', 1),
(2, 'Restaurante Renascer', '20.168.859/0001-11', '71515-310', '3638-0809', 'Rua Empresa 1', 'Proximo ao mercado', 'Cidade Empresa 1', 'Bairro Empresa 1', 'RJ', 'Fulano de Tal', 'Mensal', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `checklist`
--

CREATE TABLE `checklist` (
  `id_checkList` int(11) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `nome_gestor` varchar(45) DEFAULT NULL,
  `data_auditoria` date NOT NULL,
  `id_setores` int(11) NOT NULL,
  `id_business` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `checklist_template`
--

CREATE TABLE `checklist_template` (
  `id_template` int(11) NOT NULL,
  `nome_template` varchar(45) DEFAULT NULL,
  `tipo_checklist` varchar(25) DEFAULT NULL,
  `frequencia` int(2) DEFAULT NULL,
  `id_setores` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `department`
--

CREATE TABLE `department` (
  `id_setores` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `id_business` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `department`
--

INSERT INTO `department` (`id_setores`, `nome`, `id_business`) VALUES
(1, 'Frigorífico', 1),
(2, 'Processamento', 1),
(3, 'DML', 1),
(4, 'Cozinha', 2),
(5, 'Açougue', 2),
(6, 'Copa', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `item_checklist`
--

CREATE TABLE `item_checklist` (
  `id_checkList` int(11) NOT NULL,
  `id_questions` int(11) NOT NULL,
  `valor` char(1) DEFAULT NULL,
  `observacoes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `photo_profile`
--

CREATE TABLE `photo_profile` (
  `id_midia` int(11) NOT NULL,
  `link_midia` varchar(25) DEFAULT NULL,
  `descricao` varchar(255) NOT NULL,
  `id_profile` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `questions_checklist`
--

CREATE TABLE `questions_checklist` (
  `id_questions` int(11) NOT NULL,
  `questao` varchar(100) DEFAULT NULL,
  `id_template` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `reminder`
--

CREATE TABLE `reminder` (
  `id_reminder` int(11) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `categoria` varchar(10) NOT NULL,
  `data_evento` date NOT NULL,
  `id_profile` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `data_nasc` date DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `crn` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id_user`, `nome`, `data_nasc`, `sexo`, `email`, `senha`, `telefone`, `crn`) VALUES
(1, 'Anna Thays Ventura', '1990-01-01', 'F', 'anna.nutri@example.com', '$2a$10$15Jo9avqssD2U4.q15FKqOZHZ9E7WMLtKtkaEONYDXSIK.HDkrjOC', '(11)967570809', '54581'),
(2, 'Nathalia Martins', '1995-05-05', 'F', 'nathalia.nutri@example.com', '$2a$10$8S0giklKdTIgyvfQuXferevF7aWWgqNxZgczNfOqCd3oyl0EFxdry', '987654321', 'CRN002');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`id_business`),
  ADD UNIQUE KEY `nome_UNIQUE` (`nome`),
  ADD UNIQUE KEY `cnpj_UNIQUE` (`cnpj`),
  ADD KEY `fk_business_profile1_idx` (`responsavel_tec`);

--
-- Índices de tabela `checklist`
--
ALTER TABLE `checklist`
  ADD PRIMARY KEY (`id_checkList`),
  ADD KEY `fk_checkList_department1_idx` (`id_setores`),
  ADD KEY `fk_checkList_business1_idx` (`id_business`);

--
-- Índices de tabela `checklist_template`
--
ALTER TABLE `checklist_template`
  ADD PRIMARY KEY (`id_template`),
  ADD KEY `fk_checklist_template_department1_idx` (`id_setores`);

--
-- Índices de tabela `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id_setores`),
  ADD KEY `fk_setores_business1_idx` (`id_business`);

--
-- Índices de tabela `item_checklist`
--
ALTER TABLE `item_checklist`
  ADD PRIMARY KEY (`id_checkList`,`id_questions`),
  ADD KEY `fk_checkList_has_questions_checklist_questions_checklist1_idx` (`id_questions`),
  ADD KEY `fk_checkList_has_questions_checklist_checkList1_idx` (`id_checkList`);

--
-- Índices de tabela `photo_profile`
--
ALTER TABLE `photo_profile`
  ADD PRIMARY KEY (`id_midia`),
  ADD KEY `fk_midia_profile1_idx` (`id_profile`);

--
-- Índices de tabela `questions_checklist`
--
ALTER TABLE `questions_checklist`
  ADD PRIMARY KEY (`id_questions`),
  ADD KEY `fk_questions_checklist_checklist_template1_idx` (`id_template`);

--
-- Índices de tabela `reminder`
--
ALTER TABLE `reminder`
  ADD PRIMARY KEY (`id_reminder`),
  ADD KEY `fk_lembretes_profile1_idx` (`id_profile`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `crn_UNIQUE` (`crn`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `business`
--
ALTER TABLE `business`
  MODIFY `id_business` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `checklist`
--
ALTER TABLE `checklist`
  MODIFY `id_checkList` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `checklist_template`
--
ALTER TABLE `checklist_template`
  MODIFY `id_template` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `department`
--
ALTER TABLE `department`
  MODIFY `id_setores` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `photo_profile`
--
ALTER TABLE `photo_profile`
  MODIFY `id_midia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `questions_checklist`
--
ALTER TABLE `questions_checklist`
  MODIFY `id_questions` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `reminder`
--
ALTER TABLE `reminder`
  MODIFY `id_reminder` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `business`
--
ALTER TABLE `business`
  ADD CONSTRAINT `fk_business_profile` FOREIGN KEY (`responsavel_tec`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `checklist`
--
ALTER TABLE `checklist`
  ADD CONSTRAINT `fk_checkList_business` FOREIGN KEY (`id_business`) REFERENCES `business` (`id_business`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_checkList_department` FOREIGN KEY (`id_setores`) REFERENCES `department` (`id_setores`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `checklist_template`
--
ALTER TABLE `checklist_template`
  ADD CONSTRAINT `fk_checklist_template_department` FOREIGN KEY (`id_setores`) REFERENCES `department` (`id_setores`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `fk_setores_business` FOREIGN KEY (`id_business`) REFERENCES `business` (`id_business`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `item_checklist`
--
ALTER TABLE `item_checklist`
  ADD CONSTRAINT `fk_checkList_has_questions` FOREIGN KEY (`id_checkList`) REFERENCES `checklist` (`id_checkList`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_checkList_has_questions_checklist` FOREIGN KEY (`id_questions`) REFERENCES `questions_checklist` (`id_questions`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `photo_profile`
--
ALTER TABLE `photo_profile`
  ADD CONSTRAINT `fk_midia_profile` FOREIGN KEY (`id_profile`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `questions_checklist`
--
ALTER TABLE `questions_checklist`
  ADD CONSTRAINT `fk_questions_checklist_template` FOREIGN KEY (`id_template`) REFERENCES `checklist_template` (`id_template`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `reminder`
--
ALTER TABLE `reminder`
  ADD CONSTRAINT `fk_reminder_users` FOREIGN KEY (`id_profile`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
