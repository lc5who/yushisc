CREATE TABLE `fa_order` (
                         `id` BIGINT,
                         `orderSn` VARCHAR(255),
                         `sellUserId` BIGINT,
                         `buyUserId` BIGINT,
                         `goodsId` BIGINT,
                         `payid` VARCHAR(255) NULL,
                         `price` VARCHAR(255),
                         `isdk` BIGINT,
                         `status` BIGINT,
                         `draw` VARCHAR(255),
                         `groundingprice` VARCHAR(255),
                         `num` BIGINT,
                         `sumPrice` VARCHAR(255),
                         `payMoney` VARCHAR(255),
                         `payPic` VARCHAR(255),
                         `type` BIGINT,
                         `dkinfo` VARCHAR(255) NULL,
                         `payTime` BIGINT,
                         `endTime` BIGINT,
                         `createtime` BIGINT,
                         `updatetime` BIGINT,
                         `deletetime` VARCHAR(255) NULL,
                         `goods_id` BIGINT,
                         `goodsUserId` BIGINT,
                         `goodsName` VARCHAR(255),
                         `goodsLogo` VARCHAR(255),
                         `goodsPrice` VARCHAR(255),
                         `goodsSn` VARCHAR(255),
                         `onlineDate` BIGINT,
                         `sellusername` VARCHAR(255),
                         `sellmobile` VARCHAR(255),
                         `grounding` VARCHAR(255),
                         `goodsUsellname` VARCHAR(255),
                         `status_text` VARCHAR(255),
                         `payTime_text` VARCHAR(255),
                         `endTime_text` VARCHAR(255),
                         `create_time_text` VARCHAR(255)
);
CREATE TABLE `fa_bankinfo` (
                         `id` BIGINT,
                         `userId` VARCHAR(255),
                         `type` BIGINT,
                         `name` VARCHAR(255),
                         `bankName` VARCHAR(255),
                         `bankOtherName` VARCHAR(255),
                         `cardNum` VARCHAR(255),
                         `phone` VARCHAR(255),
                         `payAccount` VARCHAR(255),
                         `img` VARCHAR(255),
                         `remark` VARCHAR(255) NULL,
                         `status` VARCHAR(255),
                         `createtime` BIGINT,
                         `updatetime` BIGINT
);

INSERT INTO `fa_bankinfo` (`id`,`userId`,`type`,`name`,`bankName`,`bankOtherName`,`cardNum`,`phone`,`payAccount`,`img`,`remark`,`status`,`createtime`,`updatetime`)
VALUES
    (468,'1',3,'','','','','','','http://dtqzuwsa.xinzhihuikeji.cn/uploads/20240619/15db8a1d9209c9ca1416ac4d2308004f.png',NULL,'normal',1718808124,1718808124);



