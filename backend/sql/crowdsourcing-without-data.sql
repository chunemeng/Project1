CREATE
    DATABASE IF NOT EXISTS `crowd_sourcing`;
USE
    crowd_sourcing;
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`
(
    `id`          int UNSIGNED       NOT NULL AUTO_INCREMENT,
    `nickname`    varchar(50)        NOT NULL COMMENT '昵称',
    `username`    varchar(50) UNIQUE NOT NULL COMMENT '用户名',
    `password`    varchar(32)        NOT NULL COMMENT '不要明文存储',
    `email`       varchar(255)       NOT NULL COMMENT '可替换成电话号码',
    `worker_id`   int UNSIGNED COMMENT '公会id',
    `create_date` DATETIME           NOT NULL COMMENT '注册时间',
    `update_date` DATETIME           NOT NULL COMMENT '最后一次修改时间',
    `status`      BIT(1) DEFAULT 0 COMMENT '用户权限 true为管理员 false为正常用户 null被禁止登录',
    PRIMARY KEY (id)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8 COMMENT '用户表';

DROP TABLE IF EXISTS `worker`;
CREATE TABLE `worker`
(
    `id`          int UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id`     int UNSIGNED NOT NULL COMMENT '用户id/公会管理员id',
    `nickname`    varchar(50)  NOT NULL COMMENT '昵称',
    `description` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '描述',
    `cover`       varchar(255) NOT NULL COMMENT '图片链接',
    `create_date` DATETIME     NOT NULL COMMENT '注册时间',
    `update_date` DATETIME     NOT NULL COMMENT '最后一次修改时间',
    `status`      boolean      NOT NULL COMMENT 'true for 公会,false for 众包者',
    PRIMARY KEY (id)
) ENGINE = InnoDB
  CHARSET = utf8 COMMENT ='众包者/公会表';

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task`
(
    `id`          int UNSIGNED NOT NULL AUTO_INCREMENT,
    `title`       varchar(50)  NOT NULL COMMENT '标题',
    `description` varchar(255) COMMENT '描述文档',
    `user_id`     int UNSIGNED NOT NULL,
    `worker_id`   int UNSIGNED,
    `create_date` DATETIME     NOT NULL,
    `update_date` DATETIME     NOT NULL,
    `duration`    TIMESTAMP    NOT NULL,
    `category`    TINYINT      NOT NULL COMMENT '任务种类',
    `status`      bit(1)       NOT NULL DEFAULT 0 COMMENT '设置是否在任务界面展示',
    `money`       int unsigned NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8 COMMENT '任务表';



DROP TABLE IF EXISTS `order_table`;
CREATE TABLE `order_table`
(
    `id`          int UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id`     int UNSIGNED NOT NULL,
    `worker_id`   int UNSIGNED NOT NULL,
    `task_id`     int UNSIGNED NOT NULL,
    `create_time` DATETIME     NOT NULL COMMENT '接单单时间',
    `end_time`    DATETIME     NOT NULL COMMENT '结束时间',
    `end_date`    DATETIME     NOT NULL,
    `status`      bit(2)       NOT NULL DEFAULT 1 COMMENT '任务状态, 进行中, 已结束, 已放弃',
    PRIMARY KEY (id)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8 COMMENT '订单表';

USE crowd_sourcing;
UPDATE task
set task.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
where task.description not like 'kdsljfakaj'