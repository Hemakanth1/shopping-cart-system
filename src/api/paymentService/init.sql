CREATE DATABASE IF NOT EXISTS paymentdb;
USE paymentdb;

DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `date_and_time` datetime DEFAULT NULL,
  `provider` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
LOCK TABLES `payments` WRITE;
INSERT INTO `payments` VALUES (1,2,30,'2023-07-10 09:15:25','Master','processed','2023-07-10 09:15:25','2023-07-10 09:18:32');
UNLOCK TABLES;