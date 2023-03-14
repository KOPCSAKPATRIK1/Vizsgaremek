-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Már 14. 14:06
-- Kiszolgáló verziója: 10.4.24-MariaDB
-- PHP verzió: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `webshop`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `streetAddress` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `postalCode` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'air force'),
(2, 'dunk'),
(3, 'jordan'),
(4, 'yeezy');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `orderDate` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  `shippingMethodId` int(11) DEFAULT NULL,
  `paymentMethodId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `order_item`
--

CREATE TABLE `order_item` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `sizeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `payment_method`
--

CREATE TABLE `payment_method` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `imageUrl1` varchar(255) NOT NULL,
  `imageUrl2` varchar(255) NOT NULL,
  `imageUrl3` varchar(255) NOT NULL,
  `imageUrl4` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `product`
--

INSERT INTO `product` (`id`, `name`, `desc`, `imageUrl1`, `imageUrl2`, `imageUrl3`, `imageUrl4`, `price`, `categoryId`) VALUES
(1, 'Air Jordan 4 Military Black', '', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4RetroMilitaryBlack-DH6927-111-01_600x.png?v=1652364461', '', '', '', 199990, 3),
(2, 'Nike Dunk Low Panda', '', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Dunk-Low-Retro-Black-White-01_42371a5e-7e8a-48c3-8854-a3bbdeef87b6_600x.png?v=1653054125', '', '', '', 89990, 2),
(3, 'AIR JORDAN 4 RETRO RED THUNDER', '', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-4-Retro-Red-Thunder-CT8527-016-01_300ef934-4e8c-47ea-82a1-02bde7699b72_600x.png?v=1642432504\r\n', '', '', '', 194990, 3),
(4, 'AIR JORDAN 1 RETRO HIGH OG CHICAGO LOST AND FOUND', '', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1RetroHighOGChicagoLostandFound_DZ5485-612_-01_9fbb4d8b-7b26-4d7d-8e41-c0953a688975_600x.png?v=1668084483\r\n', '', '', '', 219990, 3),
(5, 'AIR JORDAN 4 INFRARED (2022)', '', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4Infrared_2022_-DH6927-061-01_0e12832b-0245-47b1-b27d-29a2dbf4aeb7_600x.png?v=1656323465', '', '', '', 134990, 3),
(6, 'AIR JORDAN 1 RETRO HIGH OG TAXI', '', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGTaxi_555088-711_-01_600x.png?v=1660000880', '', '', '', 114990, 3),
(7, 'AIR JORDAN 1 RETRO HIGH OG STAGE HAZE', '', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGStageHaze-555088-108-01_600x.png?v=1652896127', '', '', '', 119990, 3),
(8, 'ADIDAS YEEZY BOOST 350 V2 BONE', '', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AdidasYeezyBoost350V2Bone-HQ6316-01_1d8db7ac-5343-4d94-8d3c-8ec2b25493ac_600x.png?v=1655994735', '', '', '', 144990, 4),
(9, 'NIKE DUNK LOW IRONSTONE', '', 'https://cdn.shopify.com/s/files/1/2999/5106/products/5661741842_800x.png?v=1677548085', '', '', '', 89990, 2),
(10, 'NIKE AIR FORCE 1 LOW \'07 TRIPLE WHITE', 'Ha van Klasszikus Sneaker nagybetűvel, akkor az alacsony szárú fehér Air Force 1 Low biztosan az. Egy hófehér AF1 sneakerrel biztosan nem lehet mellélőni, de az utóbbi időben még a megszokottnál is sokkal népszerűbb: egy fehér Air Force akkor akkor is gyö', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Force-1-Low-07-White-on-White-_315122-111_-01_800x.png?v=1623668489', '', '', '', 59900, 1),
(11, 'AIR JORDAN 1 MID GYM RED BLACK WHITE', 'Az Air Jordan 1 Mid Gym Red Black White sneakernek nemcsak a formája, de a színei is klasszikusak. Középmagas (Mid) felsőrészét a fekete és a piros szín dominálja. Bőr és textil kombinálásával készült. Bármely casual outfithez jól passzol!', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Mid-Gym-Red-Black-White-554724-122-001_400x.png?v=1628988350', '', '', '', 109990, 3),
(12, 'AIR JORDAN 1 RETRO HIGH UNC\r\n', 'Az Air Jordan 1 Retro High University Blue egy igazi klasszikus / OG színállás. A sneaker alapvetően kék színű, de a fekete és a fehér is megjelenik rajta. Letisztultsága miatt bármely casual outfithez jól passzol!', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-01_3df76d08-2391-4241-9fad-59581aff8423_800x.png?v=1615250938', '', '', '', 199990, 3),
(13, 'ADIDAS YEEZY BOOST 350 V2 BLACK RED (BRED)', 'A sneaker rajongók a Jordan I fekete/piros (Black/Red) színállása óta nevezik \"Bred\"-nek ikonikus sneaker sziluettek ilyen színkombóját. Ezért ragasztották rá erre a Yeezy 350 v2 Black/Red-re is ezt a becenevet. Megjelenésekor ez volt a legsötétebb 350 v2', 'https://cdn.shopify.com/s/files/1/2999/5106/products/cp9652_1_800x.png?v=1607072360', '', '', '', 184990, 4),
(14, 'AIR JORDAN 4 INFRARED (2022)', 'A Jordan IV 1989-ben jelent meg és ezt is Tinker Hatfield tervezte. A látható Air légbetét és a közepes szármagasság maradt a III-asból de annak robosztus kinézetéhez képest könnyedebbé vált az összhatás. Megjelentek az ikonikus hálós panelek és a jellegz', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4Infrared_2022_-DH6927-061-01_0e12832b-0245-47b1-b27d-29a2dbf4aeb7_800x.png?v=1656323465', '', '', '', 134990, 3),
(15, 'NIKE AIR FORCE 1 SHADOW PASTEL\r\n', 'Ez a csajos Nike Air Force 1 finom pasztel színeinek köszönhetően kellemes összhatást ad. A felsőrész alapszíne a hófehér, de az összes többi árnyalat is legalább ilyen fontos: a csontszínbe hajló sárga, a visszafogott rózsaszín és viola és égkék nagyon j', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Nike-Air-Force-1-Shadow-Pastel_CI0919-106-02_800x.png?v=1595510042', '', '', '', 129990, 1),
(16, 'NIKE DUNK LOW OCEAN', 'Az 1985-ben bemutatott Nike Dunk modell egy jól összerakott, elérhető árú kosárlabda cipő volt, alacsony és magas szárú kivitelben. Nagyon sok változatban jelent meg az évek során, a kétezres években pedig a deszkások is megkedvelték a Dunkot, mert még ez', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkTemplate-DV3029-100-01_f347e639-96eb-4e0b-acf3-62a67af18b67_800x.png?v=1652788075', '', '', '', 94990, 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `product_sizes_size`
--

CREATE TABLE `product_sizes_size` (
  `productId` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `release`
--

CREATE TABLE `release` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `releaseDate` datetime NOT NULL,
  `desc` varchar(255) NOT NULL,
  `imageUrl1` varchar(255) NOT NULL,
  `imageUrl2` varchar(255) NOT NULL,
  `imageUrl3` varchar(255) NOT NULL,
  `imageUrl4` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `shipping_method`
--

CREATE TABLE `shipping_method` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `shopping_cart_item`
--

CREATE TABLE `shopping_cart_item` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `sizeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `inStock` int(11) NOT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_d25f1ea79e282cc8a42bd616aa3` (`userId`);

--
-- A tábla indexei `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_caabe91507b3379c7ba73637b84` (`userId`),
  ADD KEY `FK_73f9a47e41912876446d047d015` (`addressId`),
  ADD KEY `FK_4af424d3e7b2c3cb26e075e20fc` (`shippingMethodId`),
  ADD KEY `FK_89726ee65618314009b279e66e8` (`paymentMethodId`);

--
-- A tábla indexei `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_904370c093ceea4369659a3c810` (`productId`),
  ADD KEY `FK_845716d96530a440c6cdc6c7346` (`userId`),
  ADD KEY `FK_646bf9ece6f45dbe41c203e06e0` (`orderId`),
  ADD KEY `FK_b92d3a6017b15d811d4b0c7b789` (`sizeId`);

--
-- A tábla indexei `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ff0c0301a95e517153df97f6812` (`categoryId`);

--
-- A tábla indexei `product_sizes_size`
--
ALTER TABLE `product_sizes_size`
  ADD PRIMARY KEY (`productId`,`sizeId`),
  ADD KEY `IDX_c363d4050056518c07348e8a27` (`productId`),
  ADD KEY `IDX_a7bd6fac9cf96620ec68761ef3` (`sizeId`);

--
-- A tábla indexei `release`
--
ALTER TABLE `release`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `shipping_method`
--
ALTER TABLE `shipping_method`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `shopping_cart_item`
--
ALTER TABLE `shopping_cart_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_54ae5bb4222e2d64ace88dc1416` (`productId`),
  ADD KEY `FK_8c4ae7c19a3927c2fb1feefda2b` (`userId`),
  ADD KEY `FK_7ed53be42af947cfdd52153f6f1` (`sizeId`);

--
-- A tábla indexei `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ee5aa2560e6e28433d21405a673` (`sizeId`),
  ADD KEY `FK_e855a71c31948188c2bf78824a5` (`productId`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT a táblához `release`
--
ALTER TABLE `release`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `shipping_method`
--
ALTER TABLE `shipping_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `shopping_cart_item`
--
ALTER TABLE `shopping_cart_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `FK_d25f1ea79e282cc8a42bd616aa3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `FK_4af424d3e7b2c3cb26e075e20fc` FOREIGN KEY (`shippingMethodId`) REFERENCES `shipping_method` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_73f9a47e41912876446d047d015` FOREIGN KEY (`addressId`) REFERENCES `address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_89726ee65618314009b279e66e8` FOREIGN KEY (`paymentMethodId`) REFERENCES `payment_method` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_caabe91507b3379c7ba73637b84` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `FK_646bf9ece6f45dbe41c203e06e0` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_845716d96530a440c6cdc6c7346` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_904370c093ceea4369659a3c810` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_b92d3a6017b15d811d4b0c7b789` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `product_sizes_size`
--
ALTER TABLE `product_sizes_size`
  ADD CONSTRAINT `FK_a7bd6fac9cf96620ec68761ef3b` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_c363d4050056518c07348e8a27e` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `shopping_cart_item`
--
ALTER TABLE `shopping_cart_item`
  ADD CONSTRAINT `FK_54ae5bb4222e2d64ace88dc1416` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_7ed53be42af947cfdd52153f6f1` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_8c4ae7c19a3927c2fb1feefda2b` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `FK_e855a71c31948188c2bf78824a5` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ee5aa2560e6e28433d21405a673` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
