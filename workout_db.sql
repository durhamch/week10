DROP TABLE IF EXISTS `workit`;

CREATE TABLE `workit` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`reps` int(11) NOT NULL,
	`weight` int(11) NOT NULL,
	`date` date NOT NULL,
	`lbs` tinyint(1) NOT NULL,
	PRIMARY KEY (`id`)
);

--LOCK TABLES `types` WRITE;
--INSERT INTO `types` VALUES (1, 'Top Rope'), (2, 'Lead'), (3, 'Boulder');
--UNLOCK TABLES;