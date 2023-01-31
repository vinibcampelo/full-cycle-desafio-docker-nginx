CREATE TABLE People(
       people_id INT PRIMARY KEY AUTO_INCREMENT, 
       people_name VARCHAR(60)
);
INSERT INTO People(people_name) VALUES("Vinicius Campelo");
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'; 
flush privileges;