import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateDatabase1663749735609 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE food (
              id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
              name varchar(15) NOT NULL UNIQUE, 
              description VARCHAR(30) NOT NULL,
              cost INT(10) NOT NULL,
              createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
              )`,
    );
    await queryRunner.query(
      `CREATE TABLE ship (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                username varchar(15) NOT NULL UNIQUE, 
                email VARCHAR(30) NOT NULL,
                password VARCHAR(30) NOT NULL,
                createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
                )`,
    );
    await queryRunner.query(
      `CREATE TABLE payment (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                userId INT(6) UNSIGNED, 
                status INT(1) default 0,
                createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                CONSTRAINT FK_user_payment FOREIGN KEY (userId) REFERENCES user(id) ON UPDATE CASCADE ON DELETE CASCADE
                )`,
    );
    await queryRunner.query(
      `CREATE TABLE orders (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        userId INT(6) UNSIGNED,
        paymentId INT(6) UNSIGNED,
        total INT(10),
        shipId INT(6) UNSIGNED,
        createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT FK_user_order FOREIGN KEY (userId) REFERENCES user(id) ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT FK_order_payment FOREIGN KEY (paymentId) REFERENCES payment(id) ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT FK_order_ship FOREIGN KEY (shipId) REFERENCES ship(id) ON UPDATE CASCADE ON DELETE CASCADE
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE orderitems (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        orderId INT(6) UNSIGNED, 
        amount INT(6), 
        foodId INT(6) UNSIGNED,
        createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT FK_order_items FOREIGN KEY (orderId) REFERENCES orders(id) ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT FK_order_food FOREIGN KEY (foodId) REFERENCES food(id) ON UPDATE CASCADE ON DELETE CASCADE
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE orderitems;`);
    await queryRunner.query(`DROP TABLE orders;`);
    await queryRunner.query(`DROP TABLE payment;`);
    await queryRunner.query(`DROP TABLE food;`);
    await queryRunner.query(`DROP TABLE ship;`);
  }
}
