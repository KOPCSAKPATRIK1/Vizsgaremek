-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Már 31. 00:02
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.0.25

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
  `postalCode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `address`
--

INSERT INTO `address` (`id`, `streetAddress`, `city`, `state`, `postalCode`) VALUES
(2, 'Deak u. 3', 'Budapest', 'Pest', 1234),
(3, 'Utca 2.', 'Budapest', 'Pest', 1234),
(4, 'Nagyon jo u. 4', 'Budapest', 'Pest', 1234);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(2, 'AIR FORCE 1'),
(3, 'AIR JORDAN 1 HIGH'),
(4, 'AIR JORDAN 1 LOW');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `like`
--

CREATE TABLE `like` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `orderDate` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `shippingMethodId` int(11) DEFAULT NULL,
  `paymentMethodId` int(11) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `order`
--

INSERT INTO `order` (`id`, `orderDate`, `userId`, `shippingMethodId`, `paymentMethodId`, `addressId`) VALUES
(3, '2023-03-30 23:56:59', 1, 1, 2, 2),
(4, '2023-03-30 23:59:32', 2, 3, 1, 4),
(5, '2023-03-31 00:00:57', 3, 2, 2, 3);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `order_item`
--

INSERT INTO `order_item` (`id`, `quantity`, `productId`, `userId`, `orderId`, `sizeId`) VALUES
(1, 3, 10, 1, 3, 1),
(2, 1, 12, 1, 3, 7),
(3, 3, 4, 2, 4, 4),
(4, 1, 14, 2, 4, 6),
(5, 3, 9, 3, 5, 5),
(6, 1, 6, 3, 5, 4),
(7, 7, 12, 3, 5, 6);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `payment_method`
--

CREATE TABLE `payment_method` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `payment_method`
--

INSERT INTO `payment_method` (`id`, `name`) VALUES
(1, 'Revolut'),
(2, 'MasterCard');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `imageUrl1` varchar(255) NOT NULL,
  `imageUrl2` varchar(255) DEFAULT NULL,
  `imageUrl3` varchar(255) DEFAULT NULL,
  `imageUrl4` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `inactive` tinyint(4) NOT NULL,
  `popular` tinyint(4) NOT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `product`
--

INSERT INTO `product` (`id`, `name`, `desc`, `imageUrl1`, `imageUrl2`, `imageUrl3`, `imageUrl4`, `price`, `inactive`, `popular`, `categoryId`) VALUES
(3, 'SUPREME X NIKE AIR FORCE 1 LOW \'WHITE\'', 'The Supreme x Nike Air Force 1 Low is not at all the collab model that would have significantly transformed the base model. Emphatically small interventions have been made to the classic Air Force 1 Low sneaker: a small Supreme box logo on the heel and in', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Supreme-Air-Force-1-White-01_800x.png?v=1624110719', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CU9225-100_2_7e24d43c-1374-48dd-93f1-163bf1039ace_700x.png?v=1584225042', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CU9225-100_3_f75d848b-a1fc-40f3-8a8b-75c559d218c4_700x.png?v=1584225046', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CU9225-100_5_efc5e626-8938-4fd0-a8ae-3e490f80d827_700x.png?v=1584225048', 104990, 1, 0, 2),
(4, 'NIKE AIR FORCE 1 PURPLE SKELETON', 'If you are asked to recall classic Nike sneakers, Nike Air Force Ones will more than likely appear in your mind’s eye. Its balanced and time-tested design has been here with us since 1982. AF1 debuted as an on-court basketball shoe but also gained popular', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Skeleton-CU8067-500-01_800x.png?v=1634297480', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Skeleton-CU8067-500-02_800x.png?v=1634297480', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Skeleton-CU8067-500-03_800x.png?v=1634297480', '', 104990, 0, 0, 2),
(5, 'NIKE AIR FORCE 1 LOW EXPERIMENTAL HALLOWEEN', 'If you are asked to recall classic Nike sneakers, Nike Air Force Ones will more than likely appear in your mind’s eye. Its balanced and time-tested design has been here with us since 1982. AF1 debuted as an on-court basketball shoe but also gained popular', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Experimental-Halloween-DC8904-001-04_800x.png?v=1634918101', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Experimental-Halloween-DC8904-001-03_800x.png?v=1634918101', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Experimental-Halloween-DC8904-001-02_800x.png?v=1634918101', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Experimental-Halloween-DC8904-001-01_800x.png?v=1634918101', 89990, 0, 0, 2),
(6, 'NIKE AIR FORCE 1 LOW SP UNDEFEATED MULTI-PATENT TOTAL ORANGE', 'With the release of the Nike Air Force 1, the sneaker culture has been changed forever. The AF1 was released in 1982, it was the first basketball sneaker to feature Air cushioning and this was not the only feature it was equipped with. No wonder the silho', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentTotalOrange-1_800x.png?v=1671465969', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentTotalOrange-2_800x.png?v=1671465969', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentTotalOrange-3_800x.png?v=1671465970', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentTotalOrange-4_800x.png?v=1671465970', 94990, 0, 0, 2),
(7, 'NIKE AIR FORCE 1 LOW X UNDEFEATED', 'If you are asked to recall classic Nike sneakers, Nike Air Force Ones will more than likely appear in your mind’s eye. Its balanced and time-tested design has been here with us since 1982. AF1 debuted as an on-court basketball shoe but also gained popular', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-X-UNDEFEATED-DM8461-001_800x.png?v=1631889951', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-X-UNDEFEATED-DM8461-001-02_800x.png?v=1632216608', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-X-UNDEFEATED-DM8461-001-03_800x.png?v=1632216610', '', 79990, 0, 0, 2),
(8, 'AIR JORDAN 1 RETRO HIGH OG LUCKY GREEN', 'The collaboration between Michael Jordan and Nike has a successful history amounting to almost four decades. More than thirty-four generations of Jordan sneakers have already been released, but the “One” has a special place in the heart of sneaker fans. E', 'https://cdn.shopify.com/s/files/1/2999/5106/products/air_jordan_1_high_lucky_green_w_02_800x.png?v=1603898636', 'https://cdn.shopify.com/s/files/1/2999/5106/products/air_jordan_1_high_lucky_green_w_03_800x.png?v=1603898636', 'https://cdn.shopify.com/s/files/1/2999/5106/products/air_jordan_1_high_lucky_green_w_04_800x.png?v=1603898636', 'https://cdn.shopify.com/s/files/1/2999/5106/products/air_jordan_1_high_lucky_green_w_05_800x.png?v=1603898635', 174990, 1, 0, 3),
(9, 'AIR JORDAN 1 RETRO HIGH OG TAXI', 'The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has been seen in countless colorways over the years. Sneakerheads in their teens and twenties also love to wear Air Jordan 1s, in their eyes the original AJ1s ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGTaxi_555088-711_-01_800x.png?v=1660000880', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGTaxi_555088-711_-02_800x.png?v=1660000880', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGTaxi_555088-711_-03_800x.png?v=1660000881', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGTaxi_555088-711_-04_800x.png?v=1660000881', 114990, 0, 0, 3),
(10, 'AIR JORDAN 1 HIGH OG PROTOTYPE', 'The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has been seen in countless colorways over the years. Sneakerheads in their teens and twenties also love to wear Air Jordan 1s, in their eyes the original AJ1s ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-High-OG-Prototype-DC6515-100-01_800x.png?v=1631032259', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-High-OG-Prototype-DC6515-100-02_800x.png?v=1631032260', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-High-OG-Prototype-DC6515-100-03_800x.png?v=1631032259', '', 119990, 0, 0, 3),
(11, 'AIR JORDAN 1 RETRO HIGH METALLIC COURT PURPLE', 'The high top upper of this Air Jordan 1 Retro High Metallic Court Purple sneaker is dominated by white and purple. The upper of the sneaker is made of a combination of leather, coated leather and patent leather. The inner side of the tongue is made of pur', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AIR-JORDAN-1-RETRO-HIGH-WMNS-Court-Purple-_CD0461-151_-01_800x.png?v=1623673296', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AIR-JORDAN-1-RETRO-HIGH-WMNS-Court-Purple-_CD0461-151_-04_800x.png?v=1623672000', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AIR-JORDAN-1-RETRO-HIGH-WMNS-Court-Purple-_CD0461-151_-03_800x.png?v=1623672001', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AIR-JORDAN-1-RETRO-HIGH-WMNS-Court-Purple-_CD0461-151_-05_800x.png?v=1623671999', 94990, 0, 0, 3),
(12, 'AIR JORDAN 1 RETRO HIGH OG DARK MARINA BLUE', 'The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular s', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1HighOGDarkMarinaBlue-555088-404-02_800x.png?v=1643024865', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1HighOGDarkMarinaBlue-555088-404-03_800x.png?v=1643024864', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1HighOGDarkMarinaBlue-555088-404-01_800x.png?v=1643024864', NULL, 104990, 0, 0, 3),
(13, 'AIR JORDAN 1 LOW ALUMINUM', 'The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has been seen in countless colorways over the years. Sneakerheads in their teens and twenties also love to wear Air Jordan 1s, in their eyes the original AJ1s ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1LowAluminum_DC0774-141_-01_800x.png?v=1665588036', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1LowAluminum_DC0774-141_-02_800x.png?v=1665588035', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1LowAluminum_DC0774-141_-03_800x.png?v=1665588036', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1LowAluminum_DC0774-141_-04_800x.png?v=1665588036', 109990, 1, 0, 4),
(14, 'AIR JORDAN 1 LOW OG STARFISH', 'The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular s', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Low-OG-Starfish-CZ0790-801-01_800x.png?v=1630322235', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Low-OG-Starfish-CZ0790-801-02_800x.png?v=1630322236', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Low-OG-Starfish-CZ0790-801-03_800x.png?v=1630322236', '', 114990, 0, 0, 4),
(15, 'AIR JORDAN 1 LOW MEDIUM GREY', 'The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has been seen in countless colorways over the years. Sneakerheads in their teens and twenties also love to wear Air Jordan 1s, in their eyes the original AJ1s ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Low-Medium-Grey-553558-040-01_800x.png?v=1627320460', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Low-Medium-Grey-553558-040-02_800x.png?v=1627320459', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Low-Medium-Grey-553558-040-03_160x.png?v=1627320459', '', 144990, 0, 0, 4),
(16, 'AIR JORDAN 1 LOW SE LIGHT OLIVE', 'A Jordan 1 változatlan népszerűségnek örvend 1984-es megjelenése óta. Klasszikus formája végtelen színben és változatos anyaghasználattal jelent meg az elmúlt közel négy évtizedben. Ikonikus státuszát mi sem bizonyítja jobban, hogy olyan tizen- és huszoné', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1LowSELightOlive_DV0426-301_-01_800x.png?v=1663083407', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1LowSELightOlive_DV0426-301_-03_160x.png?v=1663083405', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1LowSELightOlive_DV0426-301_-04_160x.png?v=1663083406', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1LowSELightOlive_DV0426-301_-05_160x.png?v=1663083406', 129990, 0, 0, 4),
(17, 'AIR JORDAN 1 LOW UNC (2021)', 'The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular s', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Low-UNC-553558-144-01_800x.png?v=1630329100', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Low-UNC-553558-144-02_800x.png?v=1630329100', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Low-UNC-553558-144-03_800x.png?v=1630329100', NULL, 114990, 0, 0, 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `product_sizes_size`
--

CREATE TABLE `product_sizes_size` (
  `productId` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `release`
--

CREATE TABLE `release` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `releaseDate` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `imageUrl1` varchar(255) NOT NULL,
  `imageUrl2` varchar(255) DEFAULT NULL,
  `imageUrl3` varchar(255) DEFAULT NULL,
  `imageUrl4` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `release`
--

INSERT INTO `release` (`id`, `name`, `releaseDate`, `desc`, `imageUrl1`, `imageUrl2`, `imageUrl3`, `imageUrl4`) VALUES
(1, 'AIR JORDAN 4 RETRO SB PINE GREEN', '2023-03-31', 'Jordan IV was designed by Tinker Hatfield and released in 1989. It inherited the visible Air unit and mid upper from the Jordan III - but it\'s less robust. Iconic mesh panels and a unique lacing support system with the shoe’s iconic “wings” were introduce', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan4RetroSBPineGreen-1_160x.png?v=1679417100', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan4RetroSBPineGreen-3_800x.png?v=1679417099', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan4RetroSBPineGreen-4_800x.png?v=1679417099', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan4RetroSBPineGreen-5_160x.png?v=1679417100'),
(2, 'NEW BALANCE 1906R CORDURA POCKET BLACK', '2023-04-29', 'New Balance, the Boston-based brand was founded in 1906, making them one of the oldest sneaker brands with over a century of history. In the last decade, New Balance has enjoyed it\'s renaissance, fuelled by the collaborations it has launched, with models ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NewBalance1906RCorduraPocketBlack-1_160x.png?v=1679418117', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NewBalance1906RCorduraPocketBlack-2_800x.png?v=1679418117', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NewBalance1906RCorduraPocketBlack-3_160x.png?v=1679418117', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NewBalance1906RCorduraPocketBlack-4_160x.png?v=1679418117'),
(3, 'AIR JORDAN 6 RETRO COOL GREY', '2023-05-30', 'The Air Jordan VI, designed by Tinker Hatfield, was a big leap forward from the previous model, and introduced the neoprene tongue. In addition to the sturdy upper and accented sole, the small stash pocket also draws the eye. It\'s not just the OG colours ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan6RetroCoolGrey-1_800x.png?v=1679332368', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan6RetroCoolGrey-3_160x.png?v=1679332368', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan6RetroCoolGrey-4_160x.png?v=1679332368', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan6RetroCoolGrey-5_160x.png?v=1679332368'),
(4, 'AIR JORDAN 1 MID SE ICE BLUE', '2023-06-30', 'The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular s', 'https://cdn.shopify.com/s/files/1/2999/5106/products/AirJordan1MidSEIceBlue-1_800x.png?v=1679313856', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan6RetroCoolGrey-3_160x.png?v=1679332368', 'https://cdn.shopify.com/s/files/1/2999/5106/products/AirJordan1MidSEIceBlue-4_160x.png?v=1679313856', 'https://cdn.shopify.com/s/files/1/2999/5106/products/AirJordan1MidSEIceBlue-5_160x.png?v=1679313856'),
(5, 'NIKE DUNK HIGH RETRO PRM CRACKED LEATHER SWOOSH', '2023-07-30', 'Az 1985-ben bemutatott Nike Dunk modell egy jól összerakott, elérhető árú kosárlabda cipő volt, alacsony és magas szárú kivitelben. Nagyon sok változatban jelent meg az évek során, a kétezres években pedig a deszkások is megkedvelték a Dunkot, mert még ez', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkHighRetroPRMCrackedLeatherSwoosh-1_800x.png?v=1679305608', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkHighRetroPRMCrackedLeatherSwoosh-3_160x.png?v=1679305607', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkHighRetroPRMCrackedLeatherSwoosh-4_160x.png?v=1679305608', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkHighRetroPRMCrackedLeatherSwoosh-5_160x.png?v=1679305608');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `shipping_method`
--

CREATE TABLE `shipping_method` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `shipping_method`
--

INSERT INTO `shipping_method` (`id`, `name`, `price`) VALUES
(1, 'Alap (5-6 munkanap) ', 2990),
(2, 'Expressz (2-3 munkanap)', 5990),
(3, '24 órás', 9990);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `shopping_cart_item`
--

CREATE TABLE `shopping_cart_item` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `size`
--

INSERT INTO `size` (`id`, `size`) VALUES
(1, 36),
(2, 37),
(3, 38),
(4, 39),
(5, 40),
(6, 41),
(7, 42),
(8, 43),
(9, 44),
(10, 45),
(11, 46);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `inStock` int(11) NOT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `stock`
--

INSERT INTO `stock` (`id`, `inStock`, `sizeId`, `productId`) VALUES
(23, 5, 1, 3),
(24, 5, 2, 3),
(25, 5, 3, 3),
(26, 0, 4, 3),
(27, 0, 5, 3),
(28, 0, 6, 3),
(29, 0, 7, 3),
(30, 0, 8, 3),
(31, 0, 9, 3),
(32, 0, 10, 3),
(33, 0, 11, 3),
(34, 0, 1, 4),
(35, 0, 2, 4),
(36, 0, 3, 4),
(37, 5, 4, 4),
(38, 5, 5, 4),
(39, 5, 6, 4),
(40, 0, 7, 4),
(41, 0, 8, 4),
(42, 0, 9, 4),
(43, 0, 10, 4),
(44, 0, 11, 4),
(45, 0, 1, 5),
(46, 0, 2, 5),
(47, 0, 3, 5),
(48, 0, 4, 5),
(49, 0, 5, 5),
(50, 0, 6, 5),
(51, 5, 7, 5),
(52, 0, 8, 5),
(53, 0, 9, 5),
(54, 0, 10, 5),
(55, 0, 11, 5),
(56, 0, 1, 6),
(57, 0, 2, 6),
(58, 0, 3, 6),
(59, 0, 4, 6),
(60, 0, 5, 6),
(61, 0, 6, 6),
(62, 0, 7, 6),
(63, 5, 8, 6),
(64, 5, 9, 6),
(65, 0, 10, 6),
(66, 0, 11, 6),
(67, 0, 1, 7),
(68, 0, 2, 7),
(69, 0, 3, 7),
(70, 0, 4, 7),
(71, 0, 5, 7),
(72, 0, 6, 7),
(73, 0, 7, 7),
(74, 0, 8, 7),
(75, 0, 9, 7),
(76, 5, 10, 7),
(77, 5, 11, 7),
(78, 5, 1, 8),
(79, 5, 2, 8),
(80, 0, 3, 8),
(81, 0, 4, 8),
(82, 0, 5, 8),
(83, 0, 6, 8),
(84, 0, 7, 8),
(85, 0, 8, 8),
(86, 0, 9, 8),
(87, 0, 10, 8),
(88, 0, 11, 8),
(89, 0, 1, 9),
(90, 0, 2, 9),
(91, 5, 3, 9),
(92, 5, 4, 9),
(93, 0, 5, 9),
(94, 0, 6, 9),
(95, 0, 7, 9),
(96, 0, 8, 9),
(97, 0, 9, 9),
(98, 0, 10, 9),
(99, 0, 11, 9),
(100, 0, 1, 10),
(101, 0, 2, 10),
(102, 0, 3, 10),
(103, 0, 4, 10),
(104, 5, 5, 10),
(105, 5, 6, 10),
(106, 0, 7, 10),
(107, 0, 8, 10),
(108, 0, 9, 10),
(109, 0, 10, 10),
(110, 0, 11, 10),
(111, 0, 1, 11),
(112, 0, 2, 11),
(113, 0, 3, 11),
(114, 0, 4, 11),
(115, 0, 5, 11),
(116, 0, 6, 11),
(117, 5, 7, 11),
(118, 5, 8, 11),
(119, 0, 9, 11),
(120, 0, 10, 11),
(121, 0, 11, 11),
(122, 0, 1, 12),
(123, 0, 2, 12),
(124, 0, 3, 12),
(125, 0, 4, 12),
(126, 0, 5, 12),
(127, 0, 6, 12),
(128, 0, 7, 12),
(129, 0, 8, 12),
(130, 0, 9, 12),
(131, 5, 10, 12),
(132, 5, 11, 12),
(133, 5, 1, 13),
(134, 5, 2, 13),
(135, 0, 3, 13),
(136, 0, 4, 13),
(137, 0, 5, 13),
(138, 0, 6, 13),
(139, 0, 7, 13),
(140, 0, 8, 13),
(141, 0, 9, 13),
(142, 0, 10, 13),
(143, 0, 11, 13),
(144, 0, 1, 14),
(145, 0, 2, 14),
(146, 5, 3, 14),
(147, 5, 4, 14),
(148, 0, 5, 14),
(149, 0, 6, 14),
(150, 0, 7, 14),
(151, 0, 8, 14),
(152, 0, 9, 14),
(153, 0, 10, 14),
(154, 0, 11, 14),
(155, 0, 1, 15),
(156, 0, 2, 15),
(157, 0, 3, 15),
(158, 0, 4, 15),
(159, 5, 5, 15),
(160, 5, 6, 15),
(161, 0, 7, 15),
(162, 0, 8, 15),
(163, 0, 9, 15),
(164, 0, 10, 15),
(165, 0, 11, 15),
(166, 0, 1, 16),
(167, 0, 2, 16),
(168, 0, 3, 16),
(169, 0, 4, 16),
(170, 0, 5, 16),
(171, 0, 6, 16),
(172, 5, 7, 16),
(173, 5, 8, 16),
(174, 0, 9, 16),
(175, 0, 10, 16),
(176, 0, 11, 16),
(177, 0, 1, 17),
(178, 0, 2, 17),
(179, 0, 3, 17),
(180, 0, 4, 17),
(181, 0, 5, 17),
(182, 0, 6, 17),
(183, 0, 7, 17),
(184, 0, 8, 17),
(185, 0, 9, 17),
(186, 5, 10, 17),
(187, 5, 11, 17);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`) VALUES
(1, 'Kovács János', 'kovacsjanos@gmail.com', 'jelszo'),
(2, 'Jani Jani', 'janijani@gmail.com', 'jelszo'),
(3, 'Akos Akos', 'akosakos@gmail.com', 'jelszo\r\n'),
(4, 'Pisti Pisti', 'pistipisti@gmail.com', 'jelszo'),
(5, 'Miklos Miklos', 'miklosmiklos@gmail.com', 'jelszo');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `like`
--
ALTER TABLE `like`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_e8fb739f08d47955a39850fac23` (`userId`),
  ADD KEY `FK_3aeba0763d97c702fff1c66ebb6` (`productId`);

--
-- A tábla indexei `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_caabe91507b3379c7ba73637b84` (`userId`),
  ADD KEY `FK_4af424d3e7b2c3cb26e075e20fc` (`shippingMethodId`),
  ADD KEY `FK_89726ee65618314009b279e66e8` (`paymentMethodId`),
  ADD KEY `FK_73f9a47e41912876446d047d015` (`addressId`);

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
  ADD KEY `FK_8c4ae7c19a3927c2fb1feefda2b` (`userId`),
  ADD KEY `FK_54ae5bb4222e2d64ace88dc1416` (`productId`),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `like`
--
ALTER TABLE `like`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT a táblához `release`
--
ALTER TABLE `release`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `shipping_method`
--
ALTER TABLE `shipping_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `shopping_cart_item`
--
ALTER TABLE `shopping_cart_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT a táblához `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `like`
--
ALTER TABLE `like`
  ADD CONSTRAINT `FK_3aeba0763d97c702fff1c66ebb6` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_e8fb739f08d47955a39850fac23` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
