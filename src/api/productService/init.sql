CREATE DATABASE IF NOT EXISTS productdb;
USE productdb;
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `color` varchar(1000) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `make` varchar(1000) DEFAULT NULL,
  `model` varchar(1000) DEFAULT NULL,
  `imgUrl` varchar(1000) DEFAULT NULL,
  `no_items_available` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
LOCK TABLES `products` WRITE;
INSERT INTO `products` VALUES (1,'iphone','smartphone','brand new iphone','black',1200,'apple','13 pro max','/iphone.jpg',5,101,'2023-07-09 14:12:09','2023-07-14 06:59:32'),
                              (2,'samsung galaxy s20','smartphone','brand new phone','black',1000,'samsung','s20','/samsung.jpg',7,104,'2023-07-10 04:06:06','2023-07-14 07:00:32'),
                              (3,'samsung galaxy s20','smartphone','brand new phone','black',1000,'samsung','s20','/samsung.jpg',6,101,'2023-07-14 06:01:38','2023-07-26 06:37:44'),
                              (14,'galaxy a30','smartphone','used phone','black',400,'samsung','a30','/samsung.jpg',5,101,'2023-07-21 09:31:49','2023-07-26 06:37:43'),
                              (15,'samsung galaxy s21','smartphone','brand new','white',750,'smasung','galaxy s21','/samsung.jpg',2,101,'2023-07-22 18:52:23','2023-07-25 14:49:34');
UNLOCK TABLES;