/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 5.5.62-log : Database - book
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`book` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `book`;

/*Table structure for table `auth` */

DROP TABLE IF EXISTS `auth`;

CREATE TABLE `auth` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

/*Data for the table `auth` */

LOCK TABLES `auth` WRITE;

insert  into `auth`(`id`,`username`,`password`,`token`) values 
(13,'teguh','password','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODEzMTAxMjUsImV4cCI6MTU4MTM5NjUyNX0.jVwibEBHV5PKR49HqTLvjLn7aFrThyesMjRxcdt_aUg'),
(14,'teguh','password','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTU4MTMwMjE3NiwiZXhwIjoxNTgxMzAyNzc2fQ.ALV-Hwoo2y7JXHjHJH3-4L8bGQE1_G2rQ6xnheT2VyM'),
(16,'teguh','password','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTU4MTMwNTUzMywiZXhwIjoxNTgxMzA2MTMzfQ.aRgjWMD6UUfgKA4QVrP_XI5u06EBTfLUM_gyilx5auw'),
(17,'teguh','password1','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODEzMDc3ODMsImV4cCI6MTU4MTM5NDE4M30.-_KraBRbGioRzs59aLfOVPjOax6_aQnCRTvDk1h3r_Y'),
(18,'hallo','123456789','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODEzMTU2NzEsImV4cCI6MTU4MTQwMjA3MX0.M67aYGP3bFWbGfXRoQhc8yOcjrn5hnT3rXqa5Ros04o'),
(19,'hallo2','123456789','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODEzMTU2OTksImV4cCI6MTU4MTQwMjA5OX0.dO2dc2dLO8W4kF-7Z3YTpTbo9ih8r5DpnGjOR7pO5BI'),
(20,'hallo2','123456789','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImNhdGVnb3J5IjoiNSIsImlhdCI6MTU4MTMwOTU1NSwiZXhwIjoxNTgxMzk1OTU1fQ.Vq70hRE1t6XV9xcKFf69rQdirQQpS4tKkVbDvAOT8Ps'),
(21,'hallo3','123456789','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImNhdGVnb3J5IjoiMSIsImlhdCI6MTU4MTMxNTczMSwiZXhwIjoxNTgxNDAyMTMxfQ.5OlIfFSwKdTRuvRxYBTs3TlzwXcbfXOD1aQkR5bl7SE');

UNLOCK TABLES;

/*Table structure for table `data` */

DROP TABLE IF EXISTS `data`;

CREATE TABLE `data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `id_user` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `data` */

LOCK TABLES `data` WRITE;

insert  into `data`(`id`,`name`,`position`,`department`,`id_user`) values 
(1,'teguh setiawan','manejer','IT',17),
(4,'teguh','staff','IT',18),
(5,'teguh','staff','IT',21),
(6,'teguh setiawan','manejer','IT',21);

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
