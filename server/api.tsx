import { Column, createConnection, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    firstName: string;
 
    @Column()
    lastName: string;
 
    @Column()
    age: number;
 
}

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgress",
  password: "mysecretpassword",
  database: "test",
  entities: [
      User
  ],
  synchronize: true,
  logging: false
}).then(connection => {
  // here you can start to work with your entities
}).catch(error => console.log(error));