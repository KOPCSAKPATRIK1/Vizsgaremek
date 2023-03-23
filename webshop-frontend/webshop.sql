-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2023 at 06:01 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `streetAddress` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `postalCode` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'air force'),
(2, 'dunk'),
(3, 'jordan'),
(4, 'yeezy');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `orderDate` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  `shippingMethodId` int(11) DEFAULT NULL,
  `paymentMethodId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE `order_item` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `imageUrl1` varchar(255) NOT NULL,
  `imageUrl2` varchar(255) DEFAULT NULL,
  `imageUrl3` varchar(255) DEFAULT NULL,
  `imageUrl4` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `inactive` tinyint(4) NOT NULL,
  `popular` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `desc`, `imageUrl1`, `imageUrl2`, `imageUrl3`, `imageUrl4`, `price`, `categoryId`, `inactive`, `popular`) VALUES
(1, 'Air Jordan 4 Military Black', 'A Jordan 4 Military Black színállása egyértelműen 2022 egyik legnépszerűbb AJ4 színállásá vált! Nem csoda, hiszen egy nagyon jól összerakott világos monokróm cw-ről beszélhetünk: a felsőrészt a fehér szín dominálja, melyet a talp oldalán, a fűzőrögzítőn é', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4RetroMilitaryBlack-DH6927-111-01_600x.png?v=1652364461', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4RetroMilitaryBlack-DH6927-111-02_1024x.png?v=1652364461', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4RetroMilitaryBlack-DH6927-111-03_1024x.png?v=1652364461', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan4RetroMilitaryBlack-DH6927-111-04_1024x.png?v=1652364461', 199990, 3, 0, 1),
(2, 'Nike Dunk Low Panda', 'A Panda Dunk az elmúlt évek egyik legnépszerűbb alap sneakere lett a fehér Air Force 1 mellett. Ez nem is csoda: a Panda Low klasszikus vonalai és fekete-fehér színeinek köszönhetően gyakorlatilag bármihez fel lehet venni, tech fleece szettől kezdve egy c', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Dunk-Low-Retro-Black-White-01_42371a5e-7e8a-48c3-8854-a3bbdeef87b6_600x.png?v=1653054125', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Dunk-Low-Retro-Black-White-02_e864066a-9b7a-4dbd-b618-5037ad79108d_1024x.png?v=1653054125', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Nike-Dunk-Low-Retro-Black-White-02_e864066a-9b7a-4dbd-b618-5037ad79108d_1024x.png?v=1653054125', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkLowRetroBlackWhiteDD1391-100-05_1024x.png?v=1653087987', 89990, 2, 0, 1),
(3, 'AIR JORDAN 4 RETRO RED THUNDER', 'A klasszikus Air Jordan 4 sneakerek az utóbbi időben ismét egyre népszerűbbek. Az Air Jordan 4 Retro Red Thunder sneaker alapvetően fekete színű, de részleteit a piros szín dobja fel. A sneaker stílusa és megjelenése alapján inkább egy monokróm outfithez ', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-4-Retro-Red-Thunder-CT8527-016-01_300ef934-4e8c-47ea-82a1-02bde7699b72_600x.png?v=1642432504\r\n', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-4-Retro-Red-Thunder-CT8527-016-03_77e57bfd-55e1-4722-b01b-05a9eb53645f_1024x.png?v=1642432504', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-4-Retro-Red-Thunder-CT8527-016-02_fa5e774a-39ba-437a-aebf-2f0e41055000_1024x.png?v=1642432504', '', 194990, 3, 0, 1),
(4, 'AIR JORDAN 1 RETRO HIGH OG CHICAGO LOST AND FOUND', 'A Jordan 1 High eredeti Chicago vörös-fehér-fekete színállását már több alkalommal is visszahozta a márka, 2022 novemberében pedig droppolt a Lost and Found színállás, mely mintha csak most került volna elő egy gardrób mélyéről, ahová a 80-as években rejt', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1RetroHighOGChicagoLostandFound_DZ5485-612_-01_9fbb4d8b-7b26-4d7d-8e41-c0953a688975_600x.png?v=1668084483\n', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1RetroHighOGChicagoLostandFound_DZ5485-612_-02_ed67fd8c-644c-4aa2-9a02-bae36385a3dd_1024x.png?v=1668084483', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1RetroHighOGChicagoLostandFound_DZ5485-612_-04_00360edc-b707-485a-981b-a5dbc9e18d82_1024x.png?v=1668084483', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan1RetroHighOGChicagoLostandFound_DZ5485-612_-05_7eb4b5f7-0800-4bf3-ba07-bc3223b5157a_1024x.png?v=1668084483', 219990, 3, 0, 1),
(5, 'AIR JORDAN 4 INFRARED (2022)', '', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4Infrared_2022_-DH6927-061-01_0e12832b-0245-47b1-b27d-29a2dbf4aeb7_600x.png?v=1656323465', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4Infrared_2022_-DH6927-061-02_463cb905-2922-4808-b5f5-f8e8d3842cb0_800x.png?v=1656323465', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4Infrared_2022_-DH6927-061-03_203992ba-712e-4348-80a3-1c85dec41624_800x.png?v=1656323465', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4Infrared_2022_-DH6927-061-04_1e44ba17-2baa-4a99-a6b9-47e317c883f4_800x.png?v=1656323465', 134990, 3, 0, 1),
(6, 'AIR JORDAN 1 RETRO HIGH OG TAXI', 'A Jordan 1 változatlan népszerűségnek örvend 1984-es megjelenése óta. Klasszikus formája végtelen színben és változatos anyaghasználattal jelent meg az elmúlt közel négy évtizedben. Ikonikus státuszát mi sem bizonyítja jobban, hogy olyan tizen- és huszoné', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGTaxi_555088-711_-01_600x.png?v=1660000880', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGTaxi_555088-711_-02_1024x.png?v=1660000880', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGTaxi_555088-711_-03_1024x.png?v=1660000881', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGTaxi_555088-711_-04_1024x.png?v=1660000881', 114990, 3, 0, 1),
(7, 'AIR JORDAN 1 RETRO HIGH OG STAGE HAZE', 'A Jordan 1 változatlan népszerűségnek örvend 1984-es megjelenése óta. Klasszikus formája végtelen színben és változatos anyaghasználattal jelent meg az elmúlt közel négy évtizedben. Ikonikus státuszát mi sem bizonyítja jobban, hogy olyan tizen- és huszoné', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGStageHaze-555088-108-01_600x.png?v=1652896127', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGStageHaze-555088-108-02_1024x.png?v=1652896127', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGStageHaze-555088-108-03_1024x.png?v=1652896128', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AirJordan1RetroHighOGStageHaze-555088-108-04_1024x.png?v=1652896128', 119990, 3, 0, 1),
(8, 'ADIDAS YEEZY BOOST 350 V2 BONE', 'Az adidas Yeezy Boost 350 V2 BONE sneakert a világos színek dominálják. A Primeknit felsőrész és a talp is csontfehér színű. Bármely casual outfithez jól passzol!', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AdidasYeezyBoost350V2Bone-HQ6316-01_1d8db7ac-5343-4d94-8d3c-8ec2b25493ac_600x.png?v=1655994735', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AdidasYeezyBoost350V2Bone-HQ6316-02_9cf255b0-4c69-40a7-9f02-e0737ee44c6c_1024x.png?v=1655994735', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-AdidasYeezyBoost350V2Bone-HQ6316-03_5771463f-a09f-44cf-a815-d48d2c92da19_1024x.png?v=1655994735', '', 144990, 4, 0, 1),
(9, 'NIKE DUNK LOW IRONSTONE', 'A ‘Banned’ Jordan 1-es cipő sikere után a Nike tervezőcsapata még jobban rákoncentrált a kosárcipőkre: 1985-ben mutatták be a Dunk modellt. Az AJ1-hez hasonló színállás mellett nagyon sok változatban jelent még meg, többek között a ‘Be True To Your School', 'https://cdn.shopify.com/s/files/1/2999/5106/products/5661741842_800x.png?v=1677548085', 'https://cdn.shopify.com/s/files/1/2999/5106/products/3745591167_1024x.png?v=1677548085', 'https://cdn.shopify.com/s/files/1/2999/5106/products/3423559116_1024x.png?v=1677548085', 'https://cdn.shopify.com/s/files/1/2999/5106/products/3181792069_1024x.png?v=1677548085', 89990, 2, 0, 0),
(10, 'NIKE AIR FORCE 1 LOW \'07 TRIPLE WHITE', 'Ha van Klasszikus Sneaker nagybetűvel, akkor az alacsony szárú fehér Air Force 1 Low biztosan az. Egy hófehér AF1 sneakerrel biztosan nem lehet mellélőni, de az utóbbi időben még a megszokottnál is sokkal népszerűbb: egy fehér Air Force akkor akkor is gyö', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Force-1-Low-07-White-on-White-_315122-111_-01_800x.png?v=1623668489', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Force-1-Low-07-White-on-White-_315122-111_-02_1024x.png?v=1623668490', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Force-1-Low-07-White-on-White-_315122-111_-03_1024x.png?v=1623668490', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Force-1-Low-07-White-on-White-_315122-111_-04_1024x.png?v=1623668489', 59900, 1, 0, 0),
(11, 'AIR JORDAN 1 MID GYM RED BLACK WHITE', 'Az Air Jordan 1 Mid Gym Red Black White sneakernek nemcsak a formája, de a színei is klasszikusak. Középmagas (Mid) felsőrészét a fekete és a piros szín dominálja. Bőr és textil kombinálásával készült. Bármely casual outfithez jól passzol!', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Mid-Gym-Red-Black-White-554724-122-001_400x.png?v=1628988350', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Mid-Gym-Red-Black-White-554724-122-002_1024x.png?v=1628988313', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Mid-Gym-Red-Black-White-554724-122-003_1024x.png?v=1628988313', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Mid-Gym-Red-Black-White-554724-122-004_1024x.png?v=1628988314', 109990, 3, 0, 0),
(12, 'AIR JORDAN 1 RETRO HIGH UNC\r\n', 'Az Air Jordan 1 Retro High University Blue egy igazi klasszikus / OG színállás. A sneaker alapvetően kék színű, de a fekete és a fehér is megjelenik rajta. Letisztultsága miatt bármely casual outfithez jól passzol!', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-01_3df76d08-2391-4241-9fad-59581aff8423_800x.png?v=1615250938', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-02_70bcd5a6-a744-4f23-9df4-13cd923dfe84_1024x.png?v=1615250938', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-03_955572d7-9c6b-4e3b-911e-3c3e9e641318_1024x.png?v=1615250939', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-04_17225f77-36f6-4188-8aa3-fe873d845a4f_1024x.png?v=1615250939', 199990, 3, 0, 0),
(13, 'ADIDAS YEEZY BOOST 350 V2 BLACK RED (BRED)', 'A sneaker rajongók a Jordan I fekete/piros (Black/Red) színállása óta nevezik \"Bred\"-nek ikonikus sneaker sziluettek ilyen színkombóját. Ezért ragasztották rá erre a Yeezy 350 v2 Black/Red-re is ezt a becenevet. Megjelenésekor ez volt a legsötétebb 350 v2', 'https://cdn.shopify.com/s/files/1/2999/5106/products/cp9652_1_800x.png?v=1607072360', 'https://cdn.shopify.com/s/files/1/2999/5106/products/cp9652_3_1024x.png?v=1607072360', 'https://cdn.shopify.com/s/files/1/2999/5106/products/cp9652_4_1024x.png?v=1607072359', 'https://cdn.shopify.com/s/files/1/2999/5106/products/cp9652_2_1024x.png?v=1607072360', 184990, 4, 0, 0),
(14, 'AIR JORDAN 4 INFRARED (2022)', 'A Jordan IV 1989-ben jelent meg és ezt is Tinker Hatfield tervezte. A látható Air légbetét és a közepes szármagasság maradt a III-asból de annak robosztus kinézetéhez képest könnyedebbé vált az összhatás. Megjelentek az ikonikus hálós panelek és a jellegz', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4Infrared_2022_-DH6927-061-01_0e12832b-0245-47b1-b27d-29a2dbf4aeb7_800x.png?v=1656323465', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4Infrared_2022_-DH6927-061-02_463cb905-2922-4808-b5f5-f8e8d3842cb0_800x.png?v=1656323465', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4Infrared_2022_-DH6927-061-03_203992ba-712e-4348-80a3-1c85dec41624_800x.png?v=1656323465', 'https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-AirJordan4Infrared_2022_-DH6927-061-04_1e44ba17-2baa-4a99-a6b9-47e317c883f4_800x.png?v=1656323465', 134990, 3, 0, 0),
(15, 'NIKE AIR FORCE 1 SHADOW PASTEL\r\n', 'Ez a csajos Nike Air Force 1 finom pasztel színeinek köszönhetően kellemes összhatást ad. A felsőrész alapszíne a hófehér, de az összes többi árnyalat is legalább ilyen fontos: a csontszínbe hajló sárga, a visszafogott rózsaszín és viola és égkék nagyon j', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Nike-Air-Force-1-Shadow-Pastel_CI0919-106-02_800x.png?v=1595510042', 'https://cdn.shopify.com/s/files/1/2999/5106/products/Nike-Air-Force-1-Shadow-Pastel_CI0919-106-01_1024x.png?v=1595510042', '', '', 129990, 1, 0, 0),
(16, 'NIKE DUNK LOW OCEAN', 'Az 1985-ben bemutatott Nike Dunk modell egy jól összerakott, elérhető árú kosárlabda cipő volt, alacsony és magas szárú kivitelben. Nagyon sok változatban jelent meg az évek során, a kétezres években pedig a deszkások is megkedvelték a Dunkot, mert még ez', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkTemplate-DV3029-100-01_f347e639-96eb-4e0b-acf3-62a67af18b67_800x.png?v=1652788075', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkTemplate-DV3029-100-02_c7776386-a015-4d33-acc1-5a8c055ba5d4_1024x.png?v=1652788075', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkTemplate-DV3029-100-03_56e81dcd-f353-4676-9cad-78d83e6432b3_1024x.png?v=1652788075', 'https://cdn.shopify.com/s/files/1/2999/5106/products/TruetoSole-NikeDunkTemplate-DV3029-100-04_6f485983-840f-4a9e-9195-28b2f4127260_1024x.png?v=1652788075', 94990, 2, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_sizes_size`
--

CREATE TABLE `product_sizes_size` (
  `productId` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `release`
--

CREATE TABLE `release` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `imageUrl1` varchar(255) NOT NULL,
  `imageUrl2` varchar(255) DEFAULT NULL,
  `imageUrl3` varchar(255) DEFAULT NULL,
  `imageUrl4` varchar(255) DEFAULT NULL,
  `releaseDate` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `release`
--

INSERT INTO `release` (`id`, `name`, `desc`, `imageUrl1`, `imageUrl2`, `imageUrl3`, `imageUrl4`, `releaseDate`) VALUES
(1, 'JORDAN 1 RETRO HIGH OG SKYLINE', '', 'https://images.footlocker.com/is/image/FLEU/314103602604?wid=800&hei=800&fmt=png-alpha', '', '', '', '2023.03.18'),
(2, 'AIR JORDAN 1 MID CEMENT GREY', '', 'https://images.footlocker.com/is/image/FLEU/315347098402?wid=800&hei=800&fmt=png-alpha', '', '', '', '2023.13.20'),
(3, 'AIR JORDAN 1 LOW SUNSET HAZE', '', 'https://images.footlocker.com/is/image/FLEU/315347091902?wid=800&hei=800&fmt=png-alpha', '', '', '', '2023.03.21');

-- --------------------------------------------------------

--
-- Table structure for table `shipping_method`
--

CREATE TABLE `shipping_method` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shopping_cart_item`
--

CREATE TABLE `shopping_cart_item` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `sizeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `inStock` int(11) NOT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `username`) VALUES
(1, 'valentin.levente2003@gmail.com', '$2b$15$eUpiC.QgxL5.mxIhpAByK.A1Yys9ndLBl9qlfeVHKSSvZgh1ohlNW', 'Valentinusz'),
(4, 'valentin.masodik@gmail.com', '$2b$15$cOkQP3ue6CZ/bOz3JhoSl.uXmT.8xSayCndZizhXSN.ZeFyDsxRo6', 'Valentin02'),
(5, 'valentin.harmadik@gmail.com', '$2b$15$1LWO3TQDEcPZVNEeTS5AxudQs4CWIq4S6cSbEEPD4cd1HFVKkDeVO', 'Valentin03'),
(6, 'valentin.negyedik@gmail.com', '$2b$15$l4MtD60utJEkptzbv5OpB.SM.YoyQwF.HCNWrAZ9kFpb7Az.qcOx2', 'Valentin04'),
(10, 'teszt@gmail.com', '$2b$15$7rRsIdHEwPUB.82RKGBnbuOkSwHolyXRcuAt3ca4YwHzit8T3A2Lm', 'Teszt'),
(16, '', '$2b$15$b1GVAT6RGCVLcCk8vV7pQ.4vFWWu/IGiOHsX8IQbSu.H5QyCua722', ''),
(17, '', '$2b$15$bsKUoP8c.PMxNdt5z0Ew4OQwEEWo55PBLIoDfWAH5KQUIAjgtSXLq', ''),
(18, 'Asdasd@gmail.com', '$2b$15$8hLDos7nIyVF.3fkKLrP4e/7jaXVBZwncl/eD75/n9nWVUwJI1z0q', 'assasdsd'),
(19, 'valentinzrt@asd.com', '$2b$15$qHGQPXq3ttd3MF54BDeUTuBJk6aO0zNkdcmHDKN1Z0f6yjHHu9I3K', 'valentinzrt'),
(20, 'asdasd@gmail.com', '$2b$15$hxvqHon2QO/5s37QWvPQ/uBSXTHxLqjfovzkjBliFXAZChAUrVORS', 'asdasd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_d25f1ea79e282cc8a42bd616aa3` (`userId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_caabe91507b3379c7ba73637b84` (`userId`),
  ADD KEY `FK_73f9a47e41912876446d047d015` (`addressId`),
  ADD KEY `FK_4af424d3e7b2c3cb26e075e20fc` (`shippingMethodId`),
  ADD KEY `FK_89726ee65618314009b279e66e8` (`paymentMethodId`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_904370c093ceea4369659a3c810` (`productId`),
  ADD KEY `FK_845716d96530a440c6cdc6c7346` (`userId`),
  ADD KEY `FK_646bf9ece6f45dbe41c203e06e0` (`orderId`),
  ADD KEY `FK_b92d3a6017b15d811d4b0c7b789` (`sizeId`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ff0c0301a95e517153df97f6812` (`categoryId`);

--
-- Indexes for table `product_sizes_size`
--
ALTER TABLE `product_sizes_size`
  ADD PRIMARY KEY (`productId`,`sizeId`),
  ADD KEY `IDX_c363d4050056518c07348e8a27` (`productId`),
  ADD KEY `IDX_a7bd6fac9cf96620ec68761ef3` (`sizeId`);

--
-- Indexes for table `release`
--
ALTER TABLE `release`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shipping_method`
--
ALTER TABLE `shipping_method`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shopping_cart_item`
--
ALTER TABLE `shopping_cart_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_8c4ae7c19a3927c2fb1feefda2b` (`userId`),
  ADD KEY `FK_54ae5bb4222e2d64ace88dc1416` (`productId`),
  ADD KEY `FK_7ed53be42af947cfdd52153f6f1` (`sizeId`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ee5aa2560e6e28433d21405a673` (`sizeId`),
  ADD KEY `FK_e855a71c31948188c2bf78824a5` (`productId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `release`
--
ALTER TABLE `release`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `shipping_method`
--
ALTER TABLE `shipping_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shopping_cart_item`
--
ALTER TABLE `shopping_cart_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `FK_d25f1ea79e282cc8a42bd616aa3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `FK_4af424d3e7b2c3cb26e075e20fc` FOREIGN KEY (`shippingMethodId`) REFERENCES `shipping_method` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_73f9a47e41912876446d047d015` FOREIGN KEY (`addressId`) REFERENCES `address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_89726ee65618314009b279e66e8` FOREIGN KEY (`paymentMethodId`) REFERENCES `payment_method` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_caabe91507b3379c7ba73637b84` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `FK_646bf9ece6f45dbe41c203e06e0` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_845716d96530a440c6cdc6c7346` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_904370c093ceea4369659a3c810` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_b92d3a6017b15d811d4b0c7b789` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product_sizes_size`
--
ALTER TABLE `product_sizes_size`
  ADD CONSTRAINT `FK_a7bd6fac9cf96620ec68761ef3b` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_c363d4050056518c07348e8a27e` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `shopping_cart_item`
--
ALTER TABLE `shopping_cart_item`
  ADD CONSTRAINT `FK_54ae5bb4222e2d64ace88dc1416` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_7ed53be42af947cfdd52153f6f1` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_8c4ae7c19a3927c2fb1feefda2b` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `FK_e855a71c31948188c2bf78824a5` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ee5aa2560e6e28433d21405a673` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
