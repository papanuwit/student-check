-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2023 at 07:18 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `Id` int(3) NOT NULL,
  `studentId` varchar(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `level` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`Id`, `studentId`, `name`, `level`) VALUES
(1, '633410005-5', 'นายกฤตเมธ มุ้ยกระโทก', '4'),
(2, '633410006-3', 'นายคเชนทร์ จันทเกษ', '4'),
(3, '633410007-1', 'นายจตุรวิธ มั่งกูล', '4'),
(4, '633410008-9', 'นายจิรภัทร ภูหลักถิน', '4'),
(5, '633410009-7', 'นายจีรศักดิ์ ผาลี', '4'),
(6, '633410010-2', 'นายชินปกรณ์ วัยวุฒิ', '4'),
(7, '633410011-0', 'นายชินวัตร กงชา', '4'),
(8, '633410012-8', 'นายณัฐพล วงศ์ภูมี', '4'),
(9, '633410013-6', 'นายณัฐวัตร วิลัย', '4'),
(10, '633410014-4', 'นายธนากร วานิช', '4');

-- --------------------------------------------------------

--
-- Table structure for table `student_check`
--

CREATE TABLE `student_check` (
  `Id` int(3) NOT NULL,
  `studentId` varchar(20) NOT NULL,
  `status` varchar(10) NOT NULL,
  `dateIn` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `student_check`
--

INSERT INTO `student_check` (`Id`, `studentId`, `status`, `dateIn`) VALUES
(1, '633410005-5', 'มาสาย', '2023-10-25');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(3) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'อาจารย์ใจดี ', 'teacher@gmail.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `student_check`
--
ALTER TABLE `student_check`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `Id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `student_check`
--
ALTER TABLE `student_check`
  MODIFY `Id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
