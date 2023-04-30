-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 30. 17:39
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
(1, 'Jani u. 3', 'Budaörs', 'Pest', 2040),
(2, 'Deak u. ', 'Budapest', 'Pest', 1234),
(3, 'Utca 2.', 'Budapest', 'Pest', 8461),
(4, 'Nagyon jo u. 4', 'Budapest', 'Pest', 1476);

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
(1, 'AIR FORCE 1'),
(2, 'DUNK LOW'),
(3, 'AIR JORDAN'),
(4, 'YEEZY');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `like`
--

CREATE TABLE `like` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `like`
--

INSERT INTO `like` (`id`, `userId`, `productId`) VALUES
(1, 6, 1),
(2, 6, 1),
(3, 6, 2),
(4, 6, 3),
(5, 6, 4),
(6, 6, 5),
(7, 6, 6),
(8, 6, 7),
(9, 6, 8),
(10, 7, 1),
(11, 7, 1),
(12, 7, 2),
(13, 7, 3),
(14, 7, 4),
(15, 7, 5),
(16, 8, 6),
(17, 8, 4),
(18, 8, 5),
(19, 8, 6);

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
(1, '2023-04-30 15:49:15', 6, 3, 2, 2),
(2, '2023-04-30 15:50:15', 7, 1, 1, 1),
(3, '2023-04-30 15:56:45', 2, 2, 3, 4),
(4, '2023-04-30 15:57:35', 4, 3, 2, 1),
(5, '2023-04-30 15:58:16', 9, 1, 1, 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `order_item`
--

CREATE TABLE `order_item` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `order_item`
--

INSERT INTO `order_item` (`id`, `quantity`, `productId`, `orderId`, `sizeId`) VALUES
(1, 2, 1, 1, 38),
(2, 4, 4, 1, 38),
(3, 3, 9, 2, 38),
(4, 6, 22, 2, 38),
(5, 3, 27, 3, 38),
(6, 7, 6, 3, 38),
(7, 10, 31, 3, 38),
(8, 10, 8, 4, 38),
(9, 1, 31, 5, 38),
(10, 1, 19, 5, 38),
(11, 1, 20, 5, 38),
(12, 10, 27, 5, 38);

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
(2, 'MasterCard'),
(3, 'Utánvétel');

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
(1, 'AIR FORCE 1 LOW \'07 TRIPLE WHITE', 'Ha van Klasszikus Sneaker nagybetűvel, akkor az alacsony szárú fehér Air Force 1 Low biztosan az. Egy hófehér AF1 sneakerrel biztosan nem lehet mellélőni, de az utóbbi időben még a megszokottnál is sokkal népszerűbb: egy fehér Air Force akkor akkor is gyö', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Force-1-Low-07-White-on-White-_315122-111_-01_900x.png?v=1623668489', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Force-1-Low-07-White-on-White-_315122-111_-03_900x.png?v=1623668490', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Force-1-Low-07-White-on-White-_315122-111_-04_900x.png?v=1623668489', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Force-1-Low-07-White-on-White-_315122-111_-05_900x.png?v=1623668490', 59990, 1, 1, 1),
(2, 'SUPREME X NIKE AIR FORCE 1 LOW \'WHITE\'', 'A Supreme x Nike Air Force 1 Low egyáltalán nem az a kollab modell, ami jelentősen átalakította volna az alapmodellt. Hangsúlyozottan kis beavatkozások történtek klasszikus Air Force 1 Low sneakeren: egy kis Supreme box logo a cipő sarkán valamint a talpb', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Supreme-Air-Force-1-White-01_900x.png?v=1624110719', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CU9225-100_2_7e24d43c-1374-48dd-93f1-163bf1039ace_700x.png?v=1584225042', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CU9225-100_3_f75d848b-a1fc-40f3-8a8b-75c559d218c4_700x.png?v=1584225046', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CU9225-100_5_efc5e626-8938-4fd0-a8ae-3e490f80d827_700x.png?v=1584225048', 104990, 0, 0, 1),
(3, 'SUPREME X NIKE AIR FORCE 1 LOW BLACK', 'A Supreme x Nike Air Force 1 Low egyáltalán nem az a kollab modell, ami jelentősen átalakította volna az alapmodellt. Hangsúlyozottan kis beavatkozások történtek klasszikus Air Force 1 Low sneakeren: egy kis Supreme box logo a cipő sarkán valamint a talpb', 'https://cdn.shopify.com/s/files/1/2999/5106/products/cu9225_001_1_900x.png?v=1584502517', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CU9225-001_3_900x.png?v=1584502553', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CU9225-001_4A_900x.png?v=1584502565', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CU9225-001_5_900x.png?v=1584502576', 104990, 0, 1, 1),
(4, 'AIR FORCE 1 LOW EXPERIMENTAL HALLOWEEN', 'Ha azt kérnénk, hogy képzelj magad elé egy klasszikus Nike cipőt, valószínűleg neked is az Air Force 1 jelenne meg lelki szemeid előtt. Arányos és időtálló designja már 1982 óta itt van velünk. Először kosárcipő volt, de villámgyorsan meghódította az utcá', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Experimental-Halloween-DC8904-001-04_900x.png?v=1634918101', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Experimental-Halloween-DC8904-001-03_900x.png?v=1634918101', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Experimental-Halloween-DC8904-001-02_900x.png?v=1634918101', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Experimental-Halloween-DC8904-001-01_900x.png?v=1634918101', 89990, 0, 0, 1),
(5, 'AIR FORCE 1 LOW TEAR-AWAY FAUNA BROWN', 'Ha azt kérnénk, hogy képzelj magad elé egy klasszikus Nike cipőt, valószínűleg neked is az Air Force 1 jelenne meg lelki szemeid előtt. Arányos és időtálló designja már 1982 óta itt van velünk. Először kosárcipő volt, de villámgyorsan meghódította az utcá', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Tear-Away-Fauna-Brown-DJ9941-244-01_900x.png?v=1620214050', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Tear-Away-Fauna-Brown-DJ9941-244-02_900x.png?v=1620214051', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Tear-Away-Fauna-Brown-DJ9941-244-03_900x.png?v=1620214050', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Low-Tear-Away-Fauna-Brown-DJ9941-244-04_900x.png?v=1620214051', 94990, 0, 0, 1),
(6, 'AIR FORCE 1 UNDEFEATED 5 ON IT', 'Ha azt kérnénk, hogy képzelj magad elé egy klasszikus Nike cipőt, valószínűleg neked is az Air Force 1 jelenne meg lelki szemeid előtt. Arányos és időtálló designja már 1982 óta itt van velünk. Először kosárcipő volt, de villámgyorsan meghódította az utcá', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Undefeated-5-On-It-DM8462-400-01copy_900x.png?v=1632480538', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Undefeated-5-On-It-DM8462-400-02copy_900x.png?v=1632480537', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Undefeated-5-On-It-DM8462-400-04copy_900x.png?v=1632480538', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Undefeated-5-On-It-DM8462-400-04copy_224a0339-c274-44ab-aaa7-bcd74c93cb08_900x.png?v=1632480863', 79990, 0, 0, 1),
(7, 'AIR FORCE 1 LOW SP UNDEFEATED MULTI-PATENT TOTAL ORANGE', 'A Nike Air Force 1 az a sneaker, melynek megjelenése után a szárnyát bontogató sneaker kultúra sosem volt már ugyanolyan. 1982-ben jelent meg az első olyan kosárcipőként, amiben már Air légbetétjének volt, és nem ez volt benne az egyetlen technológiai újí', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentTotalOrange-1_900x.png?v=1671465969', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentTotalOrange-2_900x.png?v=1671465969', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentTotalOrange-3_900x.png?v=1671465970', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentTotalOrange-4_900x.png?v=1671465970', 94990, 1, 0, 1),
(8, 'AIR FORCE 1 LOW TIFFANY & CO. 1837', 'A Nike Air Force 1 az a sneaker, melynek megjelenése után a szárnyát bontogató sneaker kultúra sosem volt már ugyanolyan. 1982-ben jelent meg az első olyan kosárcipőként, amiben már Air légbetétjének volt, és nem ez volt benne az egyetlen technológiai újí', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowTiffany_Co.1837-1_900x.png?v=1677766887', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowTiffany_Co.1837-3_900x.png?v=1677766888', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowTiffany_Co.1837-4_900x.png?v=1677766888', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowTiffany_Co.1837-5_900x.png?v=1677766888', 649990, 0, 0, 1),
(9, 'AIR FORCE 1 LOW POPCORN', 'Ha azt kérnénk, hogy képzelj magad elé egy klasszikus Nike cipőt, valószínűleg neked is az Air Force 1 jelenne meg lelki szemeid előtt. Arányos és időtálló designja már 1982 óta itt van velünk. Először kosárcipő volt, de villámgyorsan meghódította az utcá', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Popcorn-01_900x.png?v=1626879462', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Popcorn-02_900x.png?v=1626879469', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Popcorn-03_900x.png?v=1626879475', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Air-Force-1-Popcorn-04_900x.png?v=1626879480', 109990, 0, 0, 1),
(10, 'AIR FORCE 1 LOW SP UNDEFEATED MULTI-PATENT CELESTINE BLUE', 'Ha azt kérnénk, hogy képzelj magad elé egy klasszikus Nike cipőt, valószínűleg neked is az Air Force 1 jelenne meg lelki szemeid előtt. Arányos és időtálló designja már 1982 óta itt van velünk. Először kosárcipő volt, de villámgyorsan meghódította az utcá', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentCelestineBlue_DV5255-500_-TruetoSole-1_900x.png?v=1671464865', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentCelestineBlue_DV5255-500_-TruetoSole-3_900x.png?v=1671464865', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentCelestineBlue_DV5255-500_-TruetoSole-4_900x.png?v=1671464941', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirForce1LowSPUndefeatedMulti-PatentCelestineBlue_DV5255-500_-TruetoSole-5_900x.png?v=1671464942', 94990, 0, 1, 1),
(11, 'DUNK LOW PANDA RETRO BLACK WHITE', 'A Panda Dunk az elmúlt évek egyik legnépszerűbb alap sneakere lett a fehér Air Force 1 mellett. Ez nem is csoda: a Panda Low klasszikus vonalai és fekete-fehér színeinek köszönhetően gyakorlatilag bármihez fel lehet venni, tech fleece szettől kezdve egy c', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Dunk-Low-Retro-Black-White-01_42371a5e-7e8a-48c3-8854-a3bbdeef87b6_900x.png?v=1653054125', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowRetroBlackWhiteDD1391-100-06_900x.png?v=1653087987', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowRetroBlackWhiteDD1391-100-05_900x.png?v=1653087987', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowRetroBlackWhiteDD1391-100-04_900x.png?v=1653087987', 89990, 0, 0, 2),
(12, 'DUNK LOW OCEAN', 'Az 1985-ben bemutatott Nike Dunk modell egy jól összerakott, elérhető árú kosárlabda cipő volt, alacsony és magas szárú kivitelben. Nagyon sok változatban jelent meg az évek során, a kétezres években pedig a deszkások is megkedvelték a Dunkot, mert még ez', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkTemplate-DV3029-100-01_f347e639-96eb-4e0b-acf3-62a67af18b67_900x.png?v=1652788075', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkTemplate-DV3029-100-02_c7776386-a015-4d33-acc1-5a8c055ba5d4_900x.png?v=1652788075', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkTemplate-DV3029-100-04_6f485983-840f-4a9e-9195-28b2f4127260_900x.png?v=1652788075', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkTemplate-DV3029-100-05_7f36b0cb-2d1e-4178-a257-7892ba1fe4f9_900x.png?v=1652788076', 94990, 0, 0, 2),
(13, 'DUNK LOW NEXT NATURE WHITE MINT', 'A Nike Dunk - ahogy neve is mutatja - eredetileg kosaras cipőként vált népszerűvé. Miután utcai sneakerként is elterjedt, az ezredforduló után a gördeszkások is felfedezték maguknak. Az SB Dunk cipők nemcsak strapabírók voltak, de a megjelenésükben is bev', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowNextNatureWhiteMint-DN1431-102-01_900x.png?v=1651491935', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowNextNatureWhiteMint-DN1431-102-06_900x.png?v=1651492053', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowNextNatureWhiteMint-DN1431-102-04_900x.png?v=1651492053', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowNextNatureWhiteMint-DN1431-102-05_900x.png?v=1651492053', 89990, 0, 0, 2),
(14, 'DUNK LOW CHAMPIONSHIP COURT PURPLE', 'A ‘Banned’ Jordan 1-es cipő sikere után a Nike tervezőcsapata még jobban rákoncentrált a kosárcipőkre: 1985-ben mutatták be a Dunk modellt. Az AJ1-hez hasonló színállás mellett nagyon sok változatban jelent még meg, többek között a ‘Be True To Your School', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-NikeDunkLowChampionshipCourtPurple-DD1391-104-01_900x.png?v=1648053972', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-NikeDunkLowChampionshipCourtPurple-DD1391-104-02_900x.png?v=1648053972', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-NikeDunkLowChampionshipCourtPurple-DD1391-104-03_900x.png?v=1648053971', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-NikeDunkLowChampionshipCourtPurple-DD1391-104-04_900x.png?v=1648053972', 119990, 1, 0, 2),
(15, 'DUNK LOW NEXT NATURE GYM RED', 'A ‘Banned’ Jordan 1-es cipő sikere után a Nike tervezőcsapata még jobban rákoncentrált a kosárcipőkre: 1985-ben mutatták be a Dunk modellt. Az AJ1-hez hasonló színállás mellett nagyon sok változatban jelent még meg, többek között a ‘Be True To Your School', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowNextNatureGymRed-DN1431-101-01_900x.png?v=1649677544', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowNextNatureGymRed-DN1431-101-02_900x.png?v=1649677545', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowNextNatureGymRed-DN1431-101-03_900x.png?v=1649677545', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowNextNatureGymRed-DN1431-101-04_900x.png?v=1649677544', 129990, 0, 0, 2),
(16, 'DUNK LOW SP KENTUCKY', 'A ‘Banned’ Jordan 1-es cipő sikere után a Nike tervezőcsapata még jobban rákoncentrált a kosárcipőkre: 1985-ben mutatták be a Dunk modellt. Az AJ1-hez hasonló színállás mellett nagyon sok változatban jelent még meg, többek között a ‘Be True To Your School', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-NikeDunkLowSPKentucky_CU1726-100_-01_900x.png?v=1667928660', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-NikeDunkLowSPKentucky_CU1726-100_-02_900x.png?v=1667928660', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-NikeDunkLowSPKentucky_CU1726-100_-03_900x.png?v=1667928660', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-NikeDunkLowSPKentucky_CU1726-100_-04_900x.png?v=1667928661', 134990, 0, 0, 2),
(17, 'OFF-WHITE DUNK LOW PINE GREEN', 'A Nike és az Off-White együttműködése folytatja a neves partnerek sorát, akik collab Dunkokat készítettek. Virgil ennél a modellnél nem a dekonstruálásra ment rá: az eredeti vonalak szinte érintetlenek maradtak, de a színes és elasztikus \"kábelekkel\" így ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CT0856-100_1_900x.png?v=1620833597', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CT0856-100_2_900x.png?v=1628004452', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CT0856-100_3_900x.png?v=1628004455', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CT0856-100_4A_900x.png?v=1628004458', 269990, 0, 0, 2),
(18, 'SB DUNK LOW PRO STRANGE LOVE', 'A Nike SB Dunk Low \'Strangelove\' az extrém színállások közé tartozik: két neves művész, Todd Bratrud és Sean Cliver tervezték. Az alacsony szárú felsőrészen a rózsaszín különböző árnyalatai dominálnak, de a különlegesség itt nem ér véget: szinte az egész ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CT2552-800_1_900x.png?v=1582822215', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CT2552-800_2_900x.png?v=1582822234', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CT2552-800_3_900x.png?v=1582822250', 'https://cdn.shopify.com/s/files/1/2999/5106/products/CT2552-800_4A_900x.png?v=1582823058', 504990, 0, 0, 2),
(19, 'DUNK LOW ACTIVE FUCHSIA', 'A ‘Banned’ Jordan 1-es cipő sikere után a Nike tervezőcsapata még jobban rákoncentrált a kosárcipőkre: 1985-ben mutatták be a Dunk modellt. Az AJ1-hez hasonló színállás mellett nagyon sok változatban jelent még meg, többek között a ‘Be True To Your School', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkLowActiveFuchsia-1_900x.png?v=1679307175', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkLowActiveFuchsia-2_900x.png?v=1679307176', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkLowActiveFuchsia-3_900x.png?v=1679307175', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkLowActiveFuchsia-4_900x.png?v=1679307175', 74990, 1, 0, 2),
(20, 'SB DUNK LOW EBAY SANDY BODECKER', 'Az 1985-ben bemutatott Nike Dunk modell egy jól összerakott, elérhető árú kosárlabda cipő volt, alacsony és magas szárú kivitelben. Nagyon sok változatban jelent meg az évek során, a kétezres években pedig a deszkások is megkedvelték a Dunkot, mert még ez', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeSBDunkLoweBaySandyBodecker_FD8777-100_-1_900x.png?v=1670930350', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeSBDunkLoweBaySandyBodecker_FD8777-100_-2_900x.png?v=1670930351', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeSBDunkLoweBaySandyBodecker_FD8777-100_-3_900x.png?v=1670930351', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeSBDunkLoweBaySandyBodecker_FD8777-100_-4_900x.png?v=1670930350', 94990, 0, 0, 2),
(21, 'AIR JORDAN 1 RETRO HIGH UNC', 'Az Air Jordan 1 Retro High University Blue egy igazi klasszikus / OG színállás. A sneaker alapvetően kék színű, de a fekete és a fehér is megjelenik rajta. Letisztultsága miatt bármely casual outfithez jól passzol!', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-01_3df76d08-2391-4241-9fad-59581aff8423_900x.png?v=1615250938', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-02_70bcd5a6-a744-4f23-9df4-13cd923dfe84_900x.png?v=1615250938', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-03_955572d7-9c6b-4e3b-911e-3c3e9e641318_900x.png?v=1615250939', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-04_17225f77-36f6-4188-8aa3-fe873d845a4f_900x.png?v=1615250939', 199990, 0, 0, 3),
(22, 'AIR JORDAN 1 RETRO HIGH DARK MOCHA', 'Az Air Jordan 1 High \'Dark Mocha\' első ránézésre egy egyszerű fekete-fehér-barna színállás, de a sneakerheadek pontosan tudják, hogy mitől különleges ez a cipő: pont olyan mintha az ikonikus Travis Scott AJ1-es testvére lenne. Természetesen nem ugyanolyan', 'https://cdn.shopify.com/s/files/1/2999/5106/products/555088-105_1_900x.png?v=1606247460', 'https://cdn.shopify.com/s/files/1/2999/5106/products/555088-105_3_900x.png?v=1606247459', 'https://cdn.shopify.com/s/files/1/2999/5106/products/555088-105_4A_900x.png?v=1606247460', 'https://cdn.shopify.com/s/files/1/2999/5106/products/555088-105_5_900x.png?v=1606247460', 254990, 0, 0, 3),
(23, 'AIR JORDAN 1 RETRO HIGH OG COURT PURPLE 2020', 'Az Air Jordan 1 Retro High OG Court Purple 2020 domináns lila színe mellett fehér és fekete panelekkel jött ki, a pipa is fekete rajta. Ez a nem mindennapi színkombó vonzza a tekintetet, de a nem szokványos lila szín ellenére nagyon sok outfitbe tökélesen', 'https://cdn.shopify.com/s/files/1/2999/5106/products/555088-500_1_1_900x.png?v=1586624873', 'https://cdn.shopify.com/s/files/1/2999/5106/products/555088-500_2_1_900x.png?v=1586624873', 'https://cdn.shopify.com/s/files/1/2999/5106/products/555088-500_3_900x.png?v=1586624873', 'https://cdn.shopify.com/s/files/1/2999/5106/products/555088-500_4A_900x.png?v=1586624874', 159990, 0, 0, 3),
(26, 'AIR JORDAN 4 RETRO MILITARY BLACK', 'A Jordan 4 Military Black színállása egyértelműen 2022 egyik legnépszerűbb AJ4 színállásá vált! Nem csoda, hiszen egy nagyon jól összerakott világos monokróm cw-ről beszélhetünk: a felsőrészt a fehér szín dominálja, melyet a talp oldalán, a fűzőrögzítőn é', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4RetroMilitaryBlack-DH6927-111-01_900x.png?v=1652364461', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4RetroMilitaryBlack-DH6927-111-02_900x.png?v=1652364461', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4RetroMilitaryBlack-DH6927-111-03_900x.png?v=1652364461', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4RetroMilitaryBlack-DH6927-111-04_900x.png?v=1652364461', 199990, 0, 0, 3),
(27, 'AIR JORDAN 4 RETRO SE BLACK CANVAS', 'A Jordan IV 1989-ben jelent meg és ezt is Tinker Hatfield tervezte. A látható Air légbetét és a közepes szármagasság maradt a III-asból de annak robosztus kinézetéhez képest könnyedebbé vált az összhatás. Megjelentek az ikonikus hálós panelek és a jellegz', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4RetroSEBlackCanvas_DH7138-006_-01_900x.png?v=1662473954', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4RetroSEBlackCanvas_DH7138-006_-02_1024x.png?v=1662473954', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4RetroSEBlackCanvas_DH7138-006_-03_900x.png?v=1662473955', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4RetroSEBlackCanvas_DH7138-006_-04_900x.png?v=1662473955', 194990, 0, 0, 3),
(28, 'AIR JORDAN 4 SAIL CANVAS', 'A Jordan IV 1989-ben jelent meg és ezt is Tinker Hatfield tervezte. A látható Air légbetét és a közepes szármagasság maradt a III-asból de annak robosztus kinézetéhez képest könnyedebbé vált az összhatás. Megjelentek az ikonikus hálós panelek és a jellegz', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4SailCanvas-DQ4909-100-01_900x.png?v=1655736004', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4SailCanvas-DQ4909-100-02_900x.png?v=1655736004', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4SailCanvas-DQ4909-100-03_900x.png?v=1655736004', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4SailCanvas-DQ4909-100-04_900x.png?v=1655736004', 164990, 0, 1, 3),
(29, 'AIR JORDAN 4 RETRO PSG (PARIS SAINT GERMAIN)', 'A Jordan IV 1989-ben jelent meg és ezt is Tinker Hatfield tervezte. A látható Air légbetét és a közepes szármagasság maradt a III-asból de annak robosztus kinézetéhez képest könnyedebbé vált az összhatás. Megjelentek az ikonikus hálós panelek és a jellegz', 'https://cdn.shopify.com/s/files/1/2999/5106/products/air_jordan_4_psg_gs_03_900x.png?v=1621684432', 'https://cdn.shopify.com/s/files/1/2999/5106/products/air_jordan_4_psg_gs_04_900x.png?v=1627676244', 'https://cdn.shopify.com/s/files/1/2999/5106/products/air_jordan_4_psg_gs_05_900x.png?v=1627676248', 'https://cdn.shopify.com/s/files/1/2999/5106/products/air_jordan_4_psg_gs_06_900x.png?v=1627676251', 299990, 0, 0, 3),
(30, 'AIR JORDAN 3 RETRO CARDINAL RED', 'A Jordan 3 modellt szintén a legendás Tinker Hatfield tervezte és 1988-ban jelent meg. A pántokon szereplő Wings logot ezen a sneakeren váltotta a fel a Jumpman, ezen kívül a látható Air légbetét és a elephant print is ezen a Jordan generáción mutatkozott', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan3RetroCardinalRed-CT8532-126-01_900x.png?v=1646312632', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan3RetroCardinalRed-CT8532-126-02_900x.png?v=1646312633', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan3RetroCardinalRed-CT8532-126-03_900x.png?v=1646312631', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan3RetroCardinalRed-CT8532-126-04_900x.png?v=1646312632', 134990, 0, 0, 3),
(31, 'AIR JORDAN 3 RETRO LASER ORANGE', 'A Jordan 3 modellt szintén a legendás Tinker Hatfield tervezte és 1988-ban jelent meg. A pántokon szereplő Wings logot ezen a sneakeren váltotta a fel a Jumpman, ezen kívül a látható Air légbetét és a elephant print is ezen a Jordan generáción mutatkozott', 'https://cdn.shopify.com/s/files/1/2999/5106/products/AIR_JORDAN_3_RETRO_WMNS_Laser_Orange_01_900x.png?v=1627678868', 'https://cdn.shopify.com/s/files/1/2999/5106/products/AIR_JORDAN_3_RETRO_WMNS_Laser_Orange_02_900x.png?v=1627678876', 'https://cdn.shopify.com/s/files/1/2999/5106/products/AIR_JORDAN_3_RETRO_WMNS_Laser_Orange_03_900x.png?v=1627678879', 'https://cdn.shopify.com/s/files/1/2999/5106/products/AIR_JORDAN_3_RETRO_WMNS_Laser_Orange_04_900x.png?v=1627678882', 114990, 0, 0, 3),
(32, 'AIR JORDAN 3 RETRO LUCKY GREEN', 'A Jordan 3 modellt szintén a legendás Tinker Hatfield tervezte és 1988-ban jelent meg. A pántokon szereplő Wings logot ezen a sneakeren váltotta a fel a Jumpman, ezen kívül a látható Air légbetét és a elephant print is ezen a Jordan generáción mutatkozott', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan3RetroLuckyGreen_Women_s_-1_900x.png?v=1681908763', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan3RetroLuckyGreen_Women_s_-2_900x.png?v=1681908763', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan3RetroLuckyGreen_Women_s_-3_900x.png?v=1681908763', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan3RetroLuckyGreen_Women_s_-4_900x.png?v=1681908763', 109990, 0, 0, 3),
(33, 'YEEZY BOOST 350 V2 LIGHT', 'A Yeezy 350 Light színállása fehér felsőrésszel, átlátszó sávval, sárgás árnyalatú heeltabbel és oldaltalppal érkezik. A felsőrész különleges UV reagens tulajdonsággal bír: az oldalsáv napfény hatására megváltoztatja a színét: a fehéres szín narancsosra v', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Adidas-Yeezy-Boost-350-V2-Light-GY3438-001_900x.png?v=1630771117', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Adidas-Yeezy-Boost-350-V2-Light-GY3438-003_900x.png?v=1630771116', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Adidas-Yeezy-Boost-350-V2-Light-GY3438-004_900x.png?v=1630771116', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Adidas-Yeezy-Boost-350-V2-Light-GY3438-006_900x.png?v=1630771117', 164990, 0, 0, 4),
(34, 'YEEZY BOOST 350 V2 \'ZEBRA\'', 'A Yeezy 350 v2 \'Zebra\' színállása egy igazi klasszikus a háromötvenesek között, melynek népszerűsége a több restock ellenére is töretlen. A Primeknit felsőrész fekete-fehér mintákból áll össze, erről kapta a zebra nevet. A klasszikus jelleget erősíti, hog', 'https://cdn.shopify.com/s/files/1/2999/5106/products/cp9654_1_1_900x.png?v=1578708685', 'https://cdn.shopify.com/s/files/1/2999/5106/products/cp9654_3_1_900x.png?v=1578708701', 'https://cdn.shopify.com/s/files/1/2999/5106/products/cp9654_4a_900x.png?v=1578708708', 'https://cdn.shopify.com/s/files/1/2999/5106/products/cp9654_5_1_900x.png?v=1578708715', 189990, 0, 0, 4),
(35, 'YEEZY BOOST 350 V2 DAZZLING BLUE', 'Az adidas Yeezy Boost 350 V2 Dazzling Blue sneakert a sötét színek dominálják.  A Primeknit felsőrész és a talp is fekete, a pulltab díszvarrása a SPLY-350 felirat pedig sötétkék alapot kapott. Letisztultsága miatt bármely casual outfithez jól passzol ez ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AdidasYEEZY350V2DazzlingBlue-GY7164-01_900x.png?v=1646234603', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AdidasYEEZY350V2DazzlingBlue-GY7164-02_900x.png?v=1646234603', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AdidasYEEZY350V2DazzlingBlue-GY7164-03_900x.png?v=1646234604', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AdidasYEEZY350V2DazzlingBlue-GY7164-04_900x.png?v=1646234603', 189990, 0, 0, 4),
(36, 'YEEZY BOOST 700 ANALOG', 'A Yeezy Boost 700 \'Analog\' modell fehér, csontszín és bézs árnyalatai határozzák meg, a talpon és a felsőrészen is néhány világosszürke kiegészítéssel. Az Analog 700-as az első generációs v1-es felsőrésszel készült, mely vonalaiban teljesen megegyezik az ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/adidas_yeezy_boost_700_analog_01_900x.png?v=1620738029', 'https://cdn.shopify.com/s/files/1/2999/5106/products/adidas_yeezy_boost_700_analog_03_900x.png?v=1627504600', 'https://cdn.shopify.com/s/files/1/2999/5106/products/adidas_yeezy_boost_700_analog_04_900x.png?v=1627504603', 'https://cdn.shopify.com/s/files/1/2999/5106/products/adidas_yeezy_boost_700_analog_05_900x.png?v=1627504606', 184990, 0, 0, 4),
(37, 'YEEZY 700 MNVN RESIN', 'Az adidas Yeezy Boost 700 MNVN a nagy sikerű 700-as modell újragondolása.\rReflektív részletekből az elődökhöz híven nem lesz hiány, ám a megújult felsőrész egy merőben eltérő kinézetet ad a modellnek. Nylon anyaga és új fűzőrendszere a sportos vonalat erő', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AdidasYeezy700MNVNResin-GW9525-03_900x.png?v=1645361582', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AdidasYeezy700MNVNResin-GW9525-01copy_900x.png?v=1645361582', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AdidasYeezy700MNVNResin-GW9525-02_900x.png?v=1645361581', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AdidasYeezy700MNVNResin-GW9525-04_900x.png?v=1645361582', 119990, 0, 0, 4);

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
(1, 'AIR JORDAN 4 RETRO SB PINE GREEN', '2023-03-31', 'Jordan IV was designed by Tinker Hatfield and released in 1989. It inherited the visible Air unit and mid upper from the Jordan III - but it\'s less robust. Iconic mesh panels and a unique lacing support system with the shoe’s iconic “wings” were introduce', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan4RetroSBPineGreen-1_900x.png?v=1679417100', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan4RetroSBPineGreen-3_800x.png?v=1679417099', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan4RetroSBPineGreen-4_800x.png?v=1679417099', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan4RetroSBPineGreen-5_900x.png?v=1679417100'),
(2, 'NEW BALANCE 1906R CORDURA POCKET BLACK', '2023-04-29', 'New Balance, the Boston-based brand was founded in 1906, making them one of the oldest sneaker brands with over a century of history. In the last decade, New Balance has enjoyed it\'s renaissance, fuelled by the collaborations it has launched, with models ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NewBalance1906RCorduraPocketBlack-1_900x.png?v=1679418117', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NewBalance1906RCorduraPocketBlack-2_800x.png?v=1679418117', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NewBalance1906RCorduraPocketBlack-3_900x.png?v=1679418117', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NewBalance1906RCorduraPocketBlack-4_900x.png?v=1679418117'),
(3, 'AIR JORDAN 6 RETRO COOL GREY', '2023-05-30', 'The Air Jordan VI, designed by Tinker Hatfield, was a big leap forward from the previous model, and introduced the neoprene tongue. In addition to the sturdy upper and accented sole, the small stash pocket also draws the eye. It\'s not just the OG colours ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan6RetroCoolGrey-1_800x.png?v=1679332368', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan6RetroCoolGrey-3_900x.png?v=1679332368', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan6RetroCoolGrey-4_900x.png?v=1679332368', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Jordan6RetroCoolGrey-5_900x.png?v=1679332368'),
(4, 'NIKE DUNK HIGH RETRO PRM CRACKED LEATHER SWOOSH', '2023-07-30', 'Az 1985-ben bemutatott Nike Dunk modell egy jól összerakott, elérhető árú kosárlabda cipő volt, alacsony és magas szárú kivitelben. Nagyon sok változatban jelent meg az évek során, a kétezres években pedig a deszkások is megkedvelték a Dunkot, mert még ez', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkHighRetroPRMCrackedLeatherSwoosh-1_800x.png?v=1679305608', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkHighRetroPRMCrackedLeatherSwoosh-3_900x.png?v=1679305607', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkHighRetroPRMCrackedLeatherSwoosh-4_900x.png?v=1679305608', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeDunkHighRetroPRMCrackedLeatherSwoosh-5_900x.png?v=1679305608'),
(5, 'AIR JORDAN 1 RETRO LOW OG SP TRAVIS SCOTT OLIVE', '2023-05-01', 'A Jordan 1 változatlan népszerűségnek örvend 1984-es megjelenése óta. Klasszikus formája végtelen színben és változatos anyaghasználattal jelent meg az elmúlt közel négy évtizedben. Ikonikus státuszát mi sem bizonyítja jobban, hogy olyan tizen- és huszoné', 'https://cdn.shopify.com/s/files/1/2999/5106/files/AirJordan1RetroLowOGSPTravisScottOlive_DZ4137-106_-TruetoSole-01_900x.png?v=1682552666', 'https://cdn.shopify.com/s/files/1/2999/5106/files/AirJordan1RetroLowOGSPTravisScottOlive_DZ4137-106_-TruetoSole-02_900x.png?v=1682552666', 'https://cdn.shopify.com/s/files/1/2999/5106/files/AirJordan1RetroLowOGSPTravisScottOlive_DZ4137-106_-TruetoSole-03_900x.png?v=1682552666', 'https://cdn.shopify.com/s/files/1/2999/5106/files/AirJordan1RetroLowOGSPTravisScottOlive_DZ4137-106_-TruetoSole-04_900x.png?v=1682552665'),
(6, 'NIKE AIR MAX 1 \'87 SAFARI COCONUT MILK', '2023-05-03', 'A Nike Air Max 1 megjelenésének napja, 1987.03.26. már jópár éve hivatalosan is Air Max Day a Nikenál és ez nem véletlen. Tinker Hatfield ugyanis forradalmit alkotott az AM1 modellel. A 80-as évek építészete által inspirálva, láthatóvá tette az Air légbet', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirMax1_87WMNS_CoconutMilk-1_900x.png?v=1681911378', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirMax1_87WMNS_CoconutMilk-3_900x.png?v=1681911378', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirMax1_87WMNS_CoconutMilk-4_900x.png?v=1681911378', 'https://cdn.shopify.com/s/files/1/2999/5106/products/NikeAirMax1_87WMNS_CoconutMilk-5_900x.png?v=1681911378');

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
  `userId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
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
(36, 36),
(37, 37),
(38, 38),
(39, 39),
(40, 40),
(41, 41),
(42, 42),
(43, 43),
(44, 44),
(45, 45),
(46, 46);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `inStock` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `stock`
--

INSERT INTO `stock` (`id`, `inStock`, `sizeId`, `productId`) VALUES
(1, 5, 36, 1),
(2, 5, 37, 1),
(3, 5, 38, 1),
(4, 5, 39, 1),
(5, 5, 40, 1),
(6, 5, 41, 1),
(7, 5, 42, 1),
(8, 5, 43, 1),
(9, 5, 44, 1),
(10, 5, 45, 1),
(11, 5, 46, 1),
(12, 5, 36, 2),
(13, 5, 37, 2),
(14, 5, 38, 2),
(15, 5, 39, 2),
(16, 5, 40, 2),
(17, 5, 41, 2),
(18, 5, 42, 2),
(19, 5, 43, 2),
(20, 5, 44, 2),
(21, 5, 45, 2),
(22, 5, 46, 2),
(23, 5, 36, 3),
(24, 5, 37, 3),
(25, 5, 38, 3),
(26, 5, 39, 3),
(27, 5, 40, 3),
(28, 5, 41, 3),
(29, 5, 42, 3),
(30, 5, 43, 3),
(31, 5, 44, 3),
(32, 5, 45, 3),
(33, 5, 46, 3),
(34, 5, 36, 4),
(35, 5, 37, 4),
(36, 5, 38, 4),
(37, 5, 39, 4),
(38, 5, 40, 4),
(39, 5, 41, 4),
(40, 5, 42, 4),
(41, 5, 43, 4),
(42, 5, 44, 4),
(43, 5, 45, 4),
(44, 5, 46, 4),
(45, 5, 36, 5),
(46, 5, 37, 5),
(47, 5, 38, 5),
(48, 5, 39, 5),
(49, 5, 40, 5),
(50, 5, 41, 5),
(51, 5, 42, 5),
(52, 5, 43, 5),
(53, 5, 44, 5),
(54, 5, 45, 5),
(55, 5, 46, 5),
(56, 5, 36, 6),
(57, 5, 37, 6),
(58, 5, 38, 6),
(59, 5, 39, 6),
(60, 5, 40, 6),
(61, 5, 41, 6),
(62, 5, 42, 6),
(63, 5, 43, 6),
(64, 5, 44, 6),
(65, 5, 45, 6),
(66, 5, 46, 6),
(67, 5, 36, 7),
(68, 5, 37, 7),
(69, 5, 38, 7),
(70, 5, 39, 7),
(71, 5, 40, 7),
(72, 5, 41, 7),
(73, 5, 42, 7),
(74, 5, 43, 7),
(75, 5, 44, 7),
(76, 5, 45, 7),
(77, 5, 46, 7),
(78, 5, 36, 8),
(79, 5, 37, 8),
(80, 5, 38, 8),
(81, 5, 39, 8),
(82, 5, 40, 8),
(83, 5, 41, 8),
(84, 5, 42, 8),
(85, 5, 43, 8),
(86, 5, 44, 8),
(87, 5, 45, 8),
(88, 5, 46, 8),
(89, 5, 36, 9),
(90, 5, 37, 9),
(91, 5, 38, 9),
(92, 5, 39, 9),
(93, 5, 40, 9),
(94, 5, 41, 9),
(95, 5, 42, 9),
(96, 5, 43, 9),
(97, 5, 44, 9),
(98, 5, 45, 9),
(99, 5, 46, 9),
(100, 5, 36, 10),
(101, 5, 37, 10),
(102, 5, 38, 10),
(103, 5, 39, 10),
(104, 5, 40, 10),
(105, 5, 41, 10),
(106, 5, 42, 10),
(107, 5, 43, 10),
(108, 5, 44, 10),
(109, 5, 45, 10),
(110, 5, 46, 10),
(111, 5, 36, 11),
(112, 5, 37, 11),
(113, 5, 38, 11),
(114, 5, 39, 11),
(115, 5, 40, 11),
(116, 5, 41, 11),
(117, 5, 42, 11),
(118, 5, 43, 11),
(119, 5, 44, 11),
(120, 5, 45, 11),
(121, 5, 46, 11),
(122, 5, 36, 12),
(123, 5, 37, 12),
(124, 5, 38, 12),
(125, 5, 39, 12),
(126, 5, 40, 12),
(127, 5, 41, 12),
(128, 5, 42, 12),
(129, 5, 43, 12),
(130, 5, 44, 12),
(131, 5, 45, 12),
(132, 5, 46, 12),
(133, 5, 36, 13),
(134, 5, 37, 13),
(135, 5, 38, 13),
(136, 5, 39, 13),
(137, 5, 40, 13),
(138, 5, 41, 13),
(139, 5, 42, 13),
(140, 5, 43, 13),
(141, 5, 44, 13),
(142, 5, 45, 13),
(143, 5, 46, 13),
(144, 5, 36, 14),
(145, 5, 37, 14),
(146, 5, 38, 14),
(147, 5, 39, 14),
(148, 5, 40, 14),
(149, 5, 41, 14),
(150, 5, 42, 14),
(151, 5, 43, 14),
(152, 5, 44, 14),
(153, 5, 45, 14),
(154, 5, 46, 14),
(155, 5, 36, 15),
(156, 5, 37, 15),
(157, 5, 38, 15),
(158, 5, 39, 15),
(159, 5, 40, 15),
(160, 5, 41, 15),
(161, 5, 42, 15),
(162, 5, 43, 15),
(163, 5, 44, 15),
(164, 5, 45, 15),
(165, 5, 46, 15),
(166, 5, 36, 16),
(167, 5, 37, 16),
(168, 5, 38, 16),
(169, 5, 39, 16),
(170, 5, 40, 16),
(171, 5, 41, 16),
(172, 5, 42, 16),
(173, 5, 43, 16),
(174, 5, 44, 16),
(175, 5, 45, 16),
(176, 5, 46, 16),
(177, 5, 36, 17),
(178, 5, 37, 17),
(179, 5, 38, 17),
(180, 5, 39, 17),
(181, 5, 40, 17),
(182, 5, 41, 17),
(183, 5, 42, 17),
(184, 5, 43, 17),
(185, 5, 44, 17),
(186, 5, 45, 17),
(187, 5, 46, 17),
(188, 5, 36, 18),
(189, 5, 37, 18),
(190, 5, 38, 18),
(191, 5, 39, 18),
(192, 5, 40, 18),
(193, 5, 41, 18),
(194, 5, 42, 18),
(195, 5, 43, 18),
(196, 5, 44, 18),
(197, 5, 45, 18),
(198, 5, 46, 18),
(199, 5, 36, 19),
(200, 5, 37, 19),
(201, 5, 38, 19),
(202, 5, 39, 19),
(203, 5, 40, 19),
(204, 5, 41, 19),
(205, 5, 42, 19),
(206, 5, 43, 19),
(207, 5, 44, 19),
(208, 5, 45, 19),
(209, 5, 46, 19),
(210, 5, 36, 20),
(211, 5, 37, 20),
(212, 5, 38, 20),
(213, 5, 39, 20),
(214, 5, 40, 20),
(215, 5, 41, 20),
(216, 5, 42, 20),
(217, 5, 43, 20),
(218, 5, 44, 20),
(219, 5, 45, 20),
(220, 5, 46, 20),
(221, 5, 36, 21),
(222, 5, 37, 21),
(223, 5, 38, 21),
(224, 5, 39, 21),
(225, 5, 40, 21),
(226, 5, 41, 21),
(227, 5, 42, 21),
(228, 5, 43, 21),
(229, 5, 44, 21),
(230, 5, 45, 21),
(231, 5, 46, 21),
(232, 5, 36, 22),
(233, 5, 37, 22),
(234, 5, 38, 22),
(235, 5, 39, 22),
(236, 5, 40, 22),
(237, 5, 41, 22),
(238, 5, 42, 22),
(239, 5, 43, 22),
(240, 5, 44, 22),
(241, 5, 45, 22),
(242, 5, 46, 22),
(243, 5, 36, 23),
(244, 5, 37, 23),
(245, 5, 38, 23),
(246, 5, 39, 23),
(247, 5, 40, 23),
(248, 5, 41, 23),
(249, 5, 42, 23),
(250, 5, 43, 23),
(251, 5, 44, 23),
(252, 5, 45, 23),
(253, 5, 46, 23),
(377, 5, 36, 33),
(378, 5, 37, 33),
(379, 5, 38, 33),
(380, 5, 39, 33),
(381, 5, 40, 33),
(382, 5, 41, 33),
(383, 5, 42, 33),
(384, 5, 43, 33),
(385, 5, 44, 33),
(386, 5, 45, 33),
(387, 5, 46, 33),
(522, 5, 36, 34),
(523, 5, 37, 34),
(524, 5, 38, 34),
(525, 5, 39, 34),
(526, 5, 40, 34),
(527, 5, 41, 34),
(528, 5, 42, 34),
(529, 5, 43, 34),
(530, 5, 44, 34),
(531, 5, 45, 34),
(532, 5, 46, 34),
(533, 5, 36, 26),
(534, 5, 37, 26),
(535, 5, 38, 26),
(536, 5, 39, 26),
(537, 5, 40, 26),
(538, 5, 41, 26),
(539, 5, 42, 26),
(540, 5, 43, 26),
(541, 5, 44, 26),
(542, 5, 45, 26),
(543, 5, 46, 26),
(544, 5, 36, 27),
(545, 5, 37, 27),
(546, 5, 38, 27),
(547, 5, 39, 27),
(548, 5, 40, 27),
(549, 5, 41, 27),
(550, 5, 42, 27),
(551, 5, 43, 27),
(552, 5, 44, 27),
(553, 5, 45, 27),
(554, 5, 46, 27),
(555, 5, 36, 28),
(556, 5, 37, 28),
(557, 5, 38, 28),
(558, 5, 39, 28),
(559, 5, 40, 28),
(560, 5, 41, 28),
(561, 5, 42, 28),
(562, 5, 43, 28),
(563, 5, 44, 28),
(564, 5, 45, 28),
(565, 5, 46, 28),
(566, 5, 36, 29),
(567, 5, 37, 29),
(568, 5, 38, 29),
(569, 5, 39, 29),
(570, 5, 40, 29),
(571, 5, 41, 29),
(572, 5, 42, 29),
(573, 5, 43, 29),
(574, 5, 44, 29),
(575, 5, 45, 29),
(576, 5, 46, 29),
(577, 5, 36, 30),
(578, 5, 37, 30),
(579, 5, 38, 30),
(580, 5, 39, 30),
(581, 5, 40, 30),
(582, 5, 41, 30),
(583, 5, 42, 30),
(584, 5, 43, 30),
(585, 5, 44, 30),
(586, 5, 45, 30),
(587, 5, 46, 30),
(588, 5, 36, 31),
(589, 5, 37, 31),
(590, 5, 38, 31),
(591, 5, 39, 31),
(592, 5, 40, 31),
(593, 5, 41, 31),
(594, 5, 42, 31),
(595, 5, 43, 31),
(596, 5, 44, 31),
(597, 5, 45, 31),
(598, 5, 46, 31),
(599, 5, 36, 32),
(600, 5, 37, 32),
(601, 5, 38, 32),
(602, 5, 39, 32),
(603, 5, 40, 32),
(604, 5, 41, 32),
(605, 5, 42, 32),
(606, 5, 43, 32),
(607, 5, 44, 32),
(608, 5, 45, 32),
(609, 5, 46, 32),
(610, 5, 36, 35),
(611, 5, 37, 35),
(612, 5, 38, 35),
(613, 5, 39, 35),
(614, 5, 40, 35),
(615, 5, 41, 35),
(616, 5, 42, 35),
(617, 5, 43, 35),
(618, 5, 44, 35),
(619, 5, 45, 35),
(620, 5, 46, 35),
(621, 5, 36, 36),
(622, 5, 37, 36),
(623, 5, 38, 36),
(624, 5, 39, 36),
(625, 5, 40, 36),
(626, 5, 41, 36),
(627, 5, 42, 36),
(628, 5, 43, 36),
(629, 5, 44, 36),
(630, 5, 45, 36),
(631, 5, 46, 36),
(632, 5, 37, 37),
(633, 5, 36, 37),
(634, 5, 38, 37),
(635, 5, 39, 37),
(636, 5, 40, 37),
(637, 5, 41, 37),
(638, 5, 42, 37),
(639, 5, 43, 37),
(640, 5, 44, 37),
(641, 5, 45, 37),
(642, 5, 46, 37);

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
(1, 'Valentinusz', 'valentin.levente2003@gmail.com', '$2b$15$eUpiC.QgxL5.mxIhpAByK.A1Yys9ndLBl9qlfeVHKSSvZgh1ohlNW'),
(2, 'Valentin02', 'valentin.masodik@gmail.com', '$2b$15$cOkQP3ue6CZ/bOz3JhoSl.uXmT.8xSayCndZizhXSN.ZeFyDsxRo6'),
(3, 'Valentin03', 'valentin.harmadik@gmail.com', '$2b$15$1LWO3TQDEcPZVNEeTS5AxudQs4CWIq4S6cSbEEPD4cd1HFVKkDeVO'),
(4, 'Valentin04', 'valentin.negyedik@gmail.com', '$2b$15$l4MtD60utJEkptzbv5OpB.SM.YoyQwF.HCNWrAZ9kFpb7Az.qcOx2'),
(5, 'Valentin05', 'valentin.otodik@gmail.com', '$2b$15$7rRsIdHEwPUB.82RKGBnbuOkSwHolyXRcuAt3ca4YwHzit8T3A2Lm'),
(6, 'patrik01', 'kopcsak.elso@gmail.com', '$2b$15$8hLDos7nIyVF.3fkKLrP4e/7jaXVBZwncl/eD75/n9nWVUwJI1z0q'),
(7, 'patrik02', 'kopcsak.masodik@gmail.com', '$2b$15$qHGQPXq3ttd3MF54BDeUTuBJk6aO0zNkdcmHDKN1Z0f6yjHHu9I3K'),
(8, 'patrik03', 'kopcsak.harmadik@gmail.com', '$2b$15$hxvqHon2QO/5s37QWvPQ/uBSXTHxLqjfovzkjBliFXAZChAUrVORS'),
(9, 'patrik04', 'kopcsak.negyedik@gmail.com', '$2b$15$hxvqHon2QO/5s37QWvPQ/uBSXTHxLqjfovzkjBliFXAZChAUrVORS'),
(10, 'Teszt', 'teszt@gmail.com ', '$2b$15$7rRsIdHEwPUB.82RKGBnbuOkSwHolyXRcuAt3ca4YwHzit8T3A2Lm');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT a táblához `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT a táblához `release`
--
ALTER TABLE `release`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT a táblához `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=643;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
  ADD CONSTRAINT `FK_904370c093ceea4369659a3c810` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_b92d3a6017b15d811d4b0c7b789` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
