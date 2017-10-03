DROP DATABASE IF EXISTS catbnb;

CREATE DATABASE catbnb;

USE catbnb;

CREATE TABLE `facebookLogIn` (
	`id` INT NOT NULL UNIQUE AUTO_INCREMENT,
	`FacebookId` INT(20) NOT NULL,
	`hash` INT(50) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `sitterProfile` (
	`id` INT NOT NULL UNIQUE AUTO_INCREMENT,
	`FB_id` INT NOT NULL,
	`name` varchar(50) NOT NULL UNIQUE,
	`photo` TEXT(50) NOT NULL,
	`description` TEXT(4000) NOT NULL,
	`comeIn` bool NOT NULL,
	`boarding` bool NOT NULL,
	`price` INT NOT NULL,
	`unit` TEXT NOT NULL,
	`createdAt` DATE NOT NULL,
	`phone` INT UNIQUE,
	`email` TEXT(100),
	`address` TEXT(500) NOT NULL,
	`zipcode` INT NOT NULL,
	PRIMARY KEY (`ID`),
	FOREIGN KEY (`FB_id`) REFERENCES `facebookLogIn`(`id`)
);

CREATE TABLE `ownerProfile` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`FB_id` INT NOT NULL,
	`name` varchar(50) NOT NULL UNIQUE,
	`numOfCats` numeric NOT NULL,
	`food` TEXT(2000) NOT NULL,
	`medical` TEXT(2000) NOT NULL,
	`personality` TEXT(2000) NOT NULL,
	`other` TEXT(2000) NOT NULL,
	`address` TEXT(2000) NOT NULL,
	`createdAt` DATE NOT NULL,
	`phone` INT UNIQUE,
	`email` TEXT(100),
	`zipcode` INT(20) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`FB_id`) REFERENCES `facebookLogIn`(`id`)
);

CREATE TABLE `tasksList` (
	`id` INT NOT NULL UNIQUE AUTO_INCREMENT,
	`owner_id` INT NOT NULL,
	`ownerMessage` TEXT(2000) NOT NULL,
	`startDate` DATE NOT NULL,
	`endDate` DATE NOT NULL,
	`createdAt` DATE NOT NULL,
	`status` TEXT(200) NOT NULL,
	`sitter_id` INT NOT NULL,
	`sitterMessage` TEXT(2000) NOT NULL,
	`acceptedAt` DATE NOT NULL,
	`cancelledAt` DATE NOT NULL,
	`finalPrice` bigint NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`sitter_id`) REFERENCES `sitterProfile`(`id`),
	FOREIGN KEY (`owner_id`) REFERENCES `ownerProfile`(`id`)
);

CREATE TABLE `Reviews` (
	`id` INT NOT NULL UNIQUE AUTO_INCREMENT,
	`review` TEXT(5000) NOT NULL,
	`owner_id` INT NOT NULL,
	`sitter_id` INT NOT NULL,
	`task_id` INT NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`owner_id`) REFERENCES `ownerProfile`(`id`),
	FOREIGN KEY (`task_id`) REFERENCES `tasksList`(`id`),
	FOREIGN KEY (`sitter_id`) REFERENCES `sitterProfile`(`id`)
);
