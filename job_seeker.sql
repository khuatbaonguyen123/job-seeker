CREATE DATABASE job_seeker_2;

USE job_seeker_2;

CREATE TABLE `User` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `Name` varchar(255),
  `Email` varchar(255),
  `Password` varchar(255)
);

CREATE TABLE `Admin` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `UserID` int UNIQUE
);

CREATE TABLE `Employer` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `UserID` int UNIQUE,
  `CompanyID` int,
  `PhoneNumber` varchar(255)
);

CREATE TABLE `Candidate` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `UserID` int UNIQUE
);

CREATE TABLE `Job` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `Title` varchar(255),
  `SpecialismID` int,
  `MinimumWage` decimal,
  `MaximumWage` decimal,
  `LocationID` int,
  `LevelID` int,
  `YearsOfExperience` int,
  `ApplicationDeadline` date,
  `JobDescription` text,
  `EmploymentTypeID` int,
  `Gender` varchar(255),
  `QualificationID` int,
  `PostedBy` int,
  `PostedDate` datetime
);

CREATE TABLE `EmploymentType` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `Name` varchar(255)
);

CREATE TABLE `Tag` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `Name` varchar(255)
);

CREATE TABLE `Job_Tag` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `JobID` int,
  `TagID` int
);

CREATE TABLE `Specialism` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `Name` varchar(255)
);

CREATE TABLE `Location` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `Name` varchar(255)
);

CREATE TABLE `Job_Level` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `Name` varchar(255)
);

CREATE TABLE `Qualification` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `Name` varchar(255)
);

CREATE TABLE `Company` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `Name` varchar(255),
  `IndustryID` int,
  `WebsiteURL` varchar(255),
  `Description` text
);

CREATE TABLE `Industry` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `Name` varchar(255)
);

CREATE TABLE `Candidate_Job_Save` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `CandidateID` int,
  `JobID` int
);

CREATE TABLE `Application` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `CandidateID` int,
  `JobID` int,
  `CvID` int,
  `Status` ENUM ('Applied', 'Interview', 'Rejected', 'Accepted'),
  `CreatedAt` datetime
);

CREATE TABLE `Interview` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `ApplicationID` int,
  `InterviewTime` datetime
);

CREATE TABLE `CV` (
  `ID` int PRIMARY KEY AUTO_INCREMENT,
  `CandidateID` int,
  `FilePath` varchar(255),
  `FileName` varchar(255),
  `FileType` varchar(255),
  `UploadedAt` datetime
);

ALTER TABLE `Admin` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Employer` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Employer` ADD FOREIGN KEY (`CompanyID`) REFERENCES `Company` (`ID`);

ALTER TABLE `Candidate` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Job` ADD FOREIGN KEY (`SpecialismID`) REFERENCES `Specialism` (`ID`);

ALTER TABLE `Job` ADD FOREIGN KEY (`LocationID`) REFERENCES `Location` (`ID`);

ALTER TABLE `Job` ADD FOREIGN KEY (`LevelID`) REFERENCES `Job_Level` (`ID`);

ALTER TABLE `Job` ADD FOREIGN KEY (`EmploymentTypeID`) REFERENCES `EmploymentType` (`ID`);

ALTER TABLE `Job` ADD FOREIGN KEY (`QualificationID`) REFERENCES `Qualification` (`ID`);

ALTER TABLE `Job` ADD FOREIGN KEY (`PostedBy`) REFERENCES `Employer` (`ID`);

ALTER TABLE `Job_Tag` ADD FOREIGN KEY (`JobID`) REFERENCES `Job` (`ID`);

ALTER TABLE `Job_Tag` ADD FOREIGN KEY (`TagID`) REFERENCES `Tag` (`ID`);

ALTER TABLE `Company` ADD FOREIGN KEY (`IndustryID`) REFERENCES `Industry` (`ID`);

ALTER TABLE `Candidate_Job_Save` ADD FOREIGN KEY (`CandidateID`) REFERENCES `Candidate` (`ID`);

ALTER TABLE `Candidate_Job_Save` ADD FOREIGN KEY (`JobID`) REFERENCES `Job` (`ID`);

ALTER TABLE `Application` ADD FOREIGN KEY (`CandidateID`) REFERENCES `Candidate` (`ID`);

ALTER TABLE `Application` ADD FOREIGN KEY (`JobID`) REFERENCES `Job` (`ID`);

ALTER TABLE `Application` ADD FOREIGN KEY (`CvID`) REFERENCES `CV` (`ID`);

ALTER TABLE `Interview` ADD FOREIGN KEY (`ApplicationID`) REFERENCES `Application` (`ID`);

ALTER TABLE `CV` ADD FOREIGN KEY (`CandidateID`) REFERENCES `Candidate` (`ID`);

-- Insert Users
INSERT INTO `User` (`Name`, `Email`, `Password`) VALUES
('Admin1', 'admin1@example.com', 'password123'),
('Admin2', 'admin2@example.com', 'password123'),
('Candidate1', 'candidate1@example.com', 'password123'),
('Candidate2', 'candidate2@example.com', 'password123'),
('Candidate3', 'candidate3@example.com', 'password123'),
('Candidate4', 'candidate4@example.com', 'password123'),
('Employer1', 'employer1@example.com', 'password123'),
('Employer2', 'employer2@example.com', 'password123'),
('Employer3', 'employer3@example.com', 'password123'),
('Employer4', 'employer4@example.com', 'password123');

-- Insert Admins
INSERT INTO `Admin` (`UserID`) VALUES
(1),
(2);

-- Insert Industries
INSERT INTO `Industry` (`Name`) VALUES
('Technology'),
('Healthcare'),
('Finance'),
('Education'),
('Retail');

-- Insert Companies
INSERT INTO `Company` (`Name`, `IndustryID`, `WebsiteURL`, `Description`) VALUES
('TechCorp', 1, 'https://techcorp.com', 'Leading tech company specializing in AI solutions.'),
('MediCare Inc.', 2, 'https://medicare.com', 'Healthcare provider with a focus on innovation.');

-- Insert Employers
INSERT INTO `Employer` (`UserID`, `CompanyID`, `PhoneNumber`) VALUES
(7, 1, '123-456-7890'),
(8, 1, '123-456-7891'),
(9, 2, '987-654-3210'),
(10, 2, '987-654-3211');

-- Insert Candidates
INSERT INTO `Candidate` (`UserID`) VALUES
(3),
(4),
(5),
(6);

-- Insert Tags
INSERT INTO `Tag` (`Name`) VALUES
('Remote'),
('Full-time'),
('Part-time'),
('Urgent'),
('Entry Level'),
('Experienced'),
('Management'),
('Teamwork'),
('Leadership'),
('Creative');

-- Insert Specialisms
INSERT INTO `Specialism` (`Name`) VALUES
('Software Development'),
('Nursing'),
('Accounting'),
('Teaching'),
('Sales');

-- Insert Locations
INSERT INTO `Location` (`Name`) VALUES
('New York'),
('San Francisco'),
('Los Angeles'),
('Chicago'),
('Boston');

-- Insert Job Levels
INSERT INTO `Job_Level` (`Name`) VALUES
('Entry Level'),
('Mid Level'),
('Senior Level'),
('Manager'),
('Executive');

-- Insert Qualifications
INSERT INTO `Qualification` (`Name`) VALUES
('High School Diploma'),
('Associate Degree'),
('Bachelor\'s Degree'),
('Master\'s Degree'),
('PhD');

INSERT INTO `EmploymentType` (`ID`, `Name`) VALUES
(1, 'Full-time'),
(2, 'Part-time'),
(3, 'Contract'),
(4, 'Internship'),
(5, 'Temporary');

INSERT INTO `Job` (`Title`, `SpecialismID`, `MinimumWage`, `MaximumWage`, `LocationID`, `LevelID`, `YearsOfExperience`, `ApplicationDeadline`, `JobDescription`, `EmploymentTypeID`, `Gender`, `QualificationID`, `PostedBy`, `PostedDate`) VALUES
('Software Engineer', 1, 60000, 90000, 1, 2, 2, '2024-12-31', 'Develop and maintain web applications.', 1, 'Any', 3, 1, NOW()),
('Nurse Practitioner', 2, 50000, 75000, 2, 3, 3, '2024-12-20', 'Provide advanced nursing services.', 1, 'Any', 4, 3, NOW()),
('Accountant', 3, 40000, 65000, 3, 2, 1, '2024-12-25', 'Prepare financial reports and budgets.', 1, 'Any', 3, 2, NOW()),
('Teacher', 4, 30000, 50000, 4, 1, 0, '2024-12-15', 'Teach and guide students in primary education.', 1, 'Any', 2, 4, NOW()),
('Sales Manager', 5, 55000, 85000, 5, 4, 4, '2024-12-30', 'Lead a team of sales professionals.', 1, 'Any', 3, 2, NOW()),
('Data Analyst', 3, 45000, 70000, 1, 2, 1, '2024-12-28', 'Analyze and interpret complex datasets.', 1, 'Any', 3, 1, NOW()),
('Software Tester', 1, 40000, 60000, 2, 2, 1, '2024-12-29', 'Test and ensure software quality.', 1, 'Any', 2, 1, NOW()),
('Marketing Specialist', 5, 38000, 55000, 3, 3, 2, '2024-12-31', 'Develop and execute marketing strategies.', 1, 'Any', 3, 2, NOW()),
('HR Manager', 5, 50000, 75000, 4, 4, 3, '2024-12-27', 'Oversee HR activities and recruitment.', 1, 'Any', 3, 2, NOW()),
('Graphic Designer', 4, 35000, 50000, 5, 2, 1, '2024-12-20', 'Create compelling visual designs.', 2, 'Any', 2, 4, NOW()),
('IT Support Specialist', 1, 35000, 50000, 1, 2, 0, '2024-12-18', 'Provide IT support and troubleshooting.', 1, 'Any', 3, 1, NOW()),
('Registered Nurse', 2, 48000, 70000, 2, 3, 2, '2024-12-22', 'Provide patient care and medical assistance.', 1, 'Any', 3, 3, NOW()),
('Business Analyst', 3, 55000, 85000, 3, 3, 3, '2024-12-25', 'Analyze and improve business processes.', 1, 'Any', 4, 2, NOW()),
('Project Manager', 5, 60000, 95000, 4, 4, 4, '2024-12-30', 'Lead and manage project teams.', 1, 'Any', 4, 2, NOW()),
('Web Developer', 1, 45000, 75000, 5, 3, 2, '2024-12-26', 'Design and develop dynamic websites.', 1, 'Any', 3, 1, NOW());

-- Insert Job Tags
INSERT INTO `Job_Tag` (`JobID`, `TagID`) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 4),
(3, 5),
(4, 6),
(5, 3),
(5, 7);

-- Insert Job Tags for Additional Jobs
INSERT INTO `Job_Tag` (`JobID`, `TagID`) VALUES
(6, 1), (6, 5), -- Data Analyst
(7, 1), (7, 2), -- Software Tester
(8, 8), (8, 6), -- Marketing Specialist
(9, 6), (9, 7), -- HR Manager
(10, 4), (10, 9), -- Graphic Designer
(11, 3), (11, 1), -- IT Support Specialist
(12, 6), (12, 4), -- Registered Nurse
(13, 8), (13, 5), -- Business Analyst
(14, 7), (14, 10), -- Project Manager
(15, 2), (15, 1); -- Web Developer

INSERT INTO `Candidate_Job_Save` (`ID`, `CandidateID`, `JobID`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 1),
(5, 2, 3),
(6, 2, 4),
(7, 3, 2),
(8, 3, 4),
(9, 4, 1),
(10, 4, 5);

INSERT INTO `CV` (`ID`, `CandidateID`, `FilePath`, `FileName`, `FileType`, `UploadedAt`) VALUES
(1, 1, '/uploads/cv/candidate1_cv.pdf', 'candidate1_cv.pdf', 'pdf', NOW()),
(2, 2, '/uploads/cv/candidate2_cv.pdf', 'candidate2_cv.pdf', 'pdf', NOW()),
(3, 3, '/uploads/cv/candidate3_cv.docx', 'candidate3_cv.docx', 'docx', NOW()),
(4, 4, '/uploads/cv/candidate4_cv.pdf', 'candidate4_cv.pdf', 'pdf', NOW()),
(5, 1, '/uploads/cv/candidate1_updated.pdf', 'candidate1_updated.pdf', 'pdf', NOW()),
(6, 2, '/uploads/cv/candidate2_updated.pdf', 'candidate2_updated.pdf', 'pdf', NOW()),
(7, 3, '/uploads/cv/candidate3_final.docx', 'candidate3_final.docx', 'docx', NOW()),
(8, 4, '/uploads/cv/candidate4_final.pdf', 'candidate4_final.pdf', 'pdf', NOW()),
(9, 1, '/uploads/cv/candidate1_extra.docx', 'candidate1_extra.docx', 'docx', NOW()),
(10, 2, '/uploads/cv/candidate2_additional.pdf', 'candidate2_additional.pdf', 'pdf', NOW());

INSERT INTO `Application` (`ID`, `CandidateID`, `JobID`, `CvID`, `Status`, `CreatedAt`) VALUES
(1, 1, 1, 1, 'Applied', NOW()),
(2, 1, 2, 1, 'Interview', NOW()),
(3, 1, 3, 1, 'Rejected', NOW()),
(4, 2, 1, 2, 'Applied', NOW()),
(5, 2, 3, 2, 'Accepted', NOW()),
(6, 2, 4, 2, 'Applied', NOW()),
(7, 3, 2, 3, 'Interview', NOW()),
(8, 3, 4, 3, 'Rejected', NOW()),
(9, 4, 1, 4, 'Applied', NOW()),
(10, 4, 5, 4, 'Accepted', NOW());

INSERT INTO `Interview` (`ID`, `ApplicationID`, `InterviewTime`) VALUES
(1, 2, '2024-12-10 10:00:00'),
(2, 5, '2024-12-15 14:00:00'),
(3, 7, '2024-12-20 09:30:00'),
(4, 8, '2024-12-25 16:00:00'),
(5, 10, '2024-12-30 13:00:00'),
(6, 4, '2025-01-02 11:00:00'),
(7, 6, '2025-01-05 15:00:00'),
(8, 9, '2025-01-10 10:30:00'),
(9, 3, '2025-01-15 12:00:00'),
(10, 1, '2025-01-20 09:00:00');



