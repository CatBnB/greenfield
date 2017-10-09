-- MySQL dump 10.13  Distrib 5.7.19, for osx10.12 (x86_64)
--
-- Host: localhost    Database: catbnb
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Reviews`
--
DROP DATABASE IF EXISTS catbnb;
CREATE DATABASE catbnb;
USE catbnb;

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `review` text NOT NULL,
  `owner_id` int(11) NOT NULL,
  `sitter_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `rating` int(2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `owner_id` (`owner_id`),
  KEY `task_id` (`task_id`),
  KEY `sitter_id` (`sitter_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `ownerProfile` (`id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `tasksList` (`id`),
  CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`sitter_id`) REFERENCES `sitterProfile` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviews`
--

LOCK TABLES `Reviews` WRITE;
/*!40000 ALTER TABLE `Reviews` DISABLE KEYS */;
INSERT INTO `Reviews` VALUES (1,'I was in need of a new pet sitter for my 2 kitties and fortunately Vanessa was available! She took great care of my cats, provided updates after each visit, and even left a cat toy. Vanessa is reliable, responsive, and loves animals!',1,2,3,8),(2,'I was in need of a new pet sitter for my 2 kitties and fortunately Vanessa was available! She took great care of my cats, provided updates after each visit, and even left a cat toy. Vanessa is reliable, responsive, and loves animals!',2,1,4,9),(3,'I was in need of a new pet sitter for my 2 kitties and fortunately Vanessa was available! She took great care of my cats, provided updates after each visit, and even left a cat toy. Vanessa is reliable, responsive, and loves animals!',2,2,5,8);
/*!40000 ALTER TABLE `Reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ownerProfile`
--

DROP TABLE IF EXISTS `ownerProfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ownerProfile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fb_userId` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `numOfCats` decimal(10,0) NOT NULL,
  `food` text ,
  `medical` text ,
  `personality` text NOT NULL,
  `other` text ,
  `address` text NOT NULL,
  `createdAt` date NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` text,
  `zipcode` int(20) NOT NULL,
  `submit` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `fb_userId` (`fb_userId`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ownerProfile`
--

LOCK TABLES `ownerProfile` WRITE;
/*!40000 ALTER TABLE `ownerProfile` DISABLE KEYS */;
INSERT INTO `ownerProfile` VALUES (1,'12223434','bo',2,'wet food','','','shy','44 atalaya ter','2017-10-05','4153195997','umihui',94117,0),(2,'123455','kevin',2,'wet food','pills','','shy','44 atalaya ter','2017-10-05','4153195992','umihui@gmail.com',94117,0),(5,'12225634','john',2,'wet food','pills','','shy','44 atalaya ter','2017-10-05','4153195777','umihui@gmail.com',94117,0);
INSERT INTO `ownerProfile` VALUES (3,'1310153075760130', 'Kevin Yeh','1','Same','','','shy','1990 S. Delaware San Mateo','2017-10-05','626-215-8079','revinyeh@gmail.com',94403,0);
/*!40000 ALTER TABLE `ownerProfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sitterProfile`
--

DROP TABLE IF EXISTS `sitterProfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sitterProfile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fb_userId` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `photo` tinytext NOT NULL,
  `description` text NOT NULL,
  `comeIn` tinyint(1) NOT NULL,
  `boarding` tinyint(1) NOT NULL,
  `price` int(11) NOT NULL,
  `unit` text NOT NULL,
  `createdAt` date NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` text,
  `address` text NOT NULL,
  `zipcode` varchar(5) NOT NULL,
  `latitude` decimal(10,3) DEFAULT NULL,
  `longitude` decimal(10,3) DEFAULT NULL,
  `rating` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `fb_userId` (`fb_userId`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sitterProfile`
--

LOCK TABLES `sitterProfile` WRITE;
/*!40000 ALTER TABLE `sitterProfile` DISABLE KEYS */;
INSERT INTO `sitterProfile` VALUES (1,'"12345"','victor','jkdshf','awesome',0,1,40,'day','2017-10-04','4153195297','victor@gmail.com','201 spear ter','94102',37.784923,-122.412517,9),(2,'123434','umi','jkdshf','awesome',1,1,30,'visit','2017-10-04','4153195997','umihui','44 atalaya ter','94117',37.783252,-122.405951,8);
/*!40000 ALTER TABLE `sitterProfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasksList`
--

DROP TABLE IF EXISTS `tasksList`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasksList` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `ownerMessage` text NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `createdAt` date NOT NULL,
  `status` text NOT NULL,
  `sitter_id` int(11) NOT NULL,
  `sitterMessage` text,
  `acceptedAt` date DEFAULT NULL,
  `cancelledAt` date DEFAULT NULL,
  `finalPrice` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `sitter_id` (`sitter_id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `taskslist_ibfk_1` FOREIGN KEY (`sitter_id`) REFERENCES `sitterProfile` (`id`),
  CONSTRAINT `taskslist_ibfk_2` FOREIGN KEY (`owner_id`) REFERENCES `ownerProfile` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasksList`
--

LOCK TABLES `tasksList` WRITE;
/*!40000 ALTER TABLE `tasksList` DISABLE KEYS */;
INSERT INTO `tasksList` VALUES (3,3,'hi','2017-10-05','2017-10-10','2017-10-04','confirmed',2,'ok','2017-10-04','2017-10-04',200),
  (4,1,'hi','2017-10-05','2017-10-10','2017-10-04','sent',2,NULL,NULL,NULL,NULL),
  (5,1,'hi','2017-10-05','2017-10-10','2017-10-04','sent',2,NULL,NULL,NULL,NULL),
  (6,3,'hi','2017-10-05','2017-10-10','2017-10-05','sent',2,NULL,NULL,NULL,NULL),
  (7,3,'hi test','2017-10-07','2017-10-10','2017-10-05','paid',2,'great','2017-10-05','2017-10-05',200),
  (8,3,'hi test','2017-10-07','2017-10-10','2017-10-05','cancled',2,'great','2017-10-05','2017-10-05',150),
  (9,3,'hi test','2017-10-07','2017-10-10','2017-10-05','ready',2,'great','2017-10-05','2017-10-05',180);
/*!40000 ALTER TABLE `tasksList` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-06 16:01:05
