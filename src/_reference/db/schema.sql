DROP DATABASE IF EXISTS zu_db;
CREATE DATABASE zu_db;

DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;

-- user table schema --

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  hasBioScanner BOOLEAN DEFAULT false,
  hasGeoMapper BOOLEAN DEFAULT false,
  hasLazer BOOLEAN DEFAULT false,
  hasJetpack BOOLEAN DEFAULT false,
  hasWaterFilter BOOLEAN DEFAULT false,
  hasO2Scrubber BOOLEAN DEFAULT false,
  warpCount INT DEFAULT 0 NOT NULL,
  health INT DEFAULT 20 NOT NULL,
  oxygen INT DEFAULT 10 NOT NULL,
  fuel INT DEFAULT 0 NOT NULL,
  planet BOOLEAN DEFAULT 0 NOT NULL,
  PRIMARY KEY (id)
);

-- accounts table schema --

CREATE TABLE accounts (
  id INT AUTO_INCREMENT,
  user_name VARCHAR(50) NOT NULL,
  saved_game VARCHAR(50) NOT NULL,
  logged_in BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

-- socket table schema --

CREATE TABLE messages (
id INT AUTO_INCREMENT,
message TEXT NOT NULL,
PRIMARY KEY (id)
);