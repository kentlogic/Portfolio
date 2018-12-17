-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2018 at 04:47 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kentlogic_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback_tbl`
--

CREATE TABLE `feedback_tbl` (
  `fid` int(5) NOT NULL,
  `feedbackCategory` varchar(25) DEFAULT NULL,
  `userID` varchar(11) NOT NULL,
  `feedbackTitle` varchar(255) NOT NULL,
  `feedbackDesc` varchar(255) NOT NULL,
  `feedbackDate` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `knowledgebase`
--

CREATE TABLE `knowledgebase` (
  `kbID` int(11) NOT NULL,
  `kbCategory` varchar(27) NOT NULL,
  `kbTitle` varchar(55) NOT NULL,
  `kbDesc` varchar(550) NOT NULL,
  `kbCreatedBy` varchar(25) DEFAULT NULL,
  `kbCreateDate` varchar(25) DEFAULT NULL,
  `kbTags` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

CREATE TABLE `links` (
  `linkID` int(11) NOT NULL,
  `linkCategory` varchar(25) NOT NULL,
  `linkUrl` varchar(35) NOT NULL,
  `linkDesc` varchar(45) DEFAULT NULL,
  `linkCreatedBy` varchar(25) DEFAULT NULL,
  `linkCreateDate` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `process`
--

CREATE TABLE `process` (
  `pID` int(7) NOT NULL,
  `pLevel` int(1) NOT NULL,
  `pCategory` varchar(16) NOT NULL,
  `pTitle` varchar(21) NOT NULL,
  `pDesc` varchar(182) NOT NULL,
  `pCreatedBy` varchar(16) NOT NULL,
  `pCreateDate` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feedback_tbl`
--
ALTER TABLE `feedback_tbl`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `knowledgebase`
--
ALTER TABLE `knowledgebase`
  ADD PRIMARY KEY (`kbID`);

--
-- Indexes for table `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`linkID`);

--
-- Indexes for table `process`
--
ALTER TABLE `process`
  ADD PRIMARY KEY (`pID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback_tbl`
--
ALTER TABLE `feedback_tbl`
  MODIFY `fid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT for table `knowledgebase`
--
ALTER TABLE `knowledgebase`
  MODIFY `kbID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `links`
--
ALTER TABLE `links`
  MODIFY `linkID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `process`
--
ALTER TABLE `process`
  MODIFY `pID` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=352;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
