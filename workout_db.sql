DROP TABLE IF EXISTS `workit`;

CREATE TABLE `workit` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`reps` int(11) NOT NULL,
	`weight` int(11) NOT NULL,
	`date` date NOT NULL,
	`lbs` tinyint(1) NOT NULL,
	PRIMARY KEY (`id`)
);

LOCK TABLES `workit` WRITE;
INSERT INTO `workit` VALUES (1, "Squat", 3, 150, "2015-12-12", 1);
UNLOCK TABLES;