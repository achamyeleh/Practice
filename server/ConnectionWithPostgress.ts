import { createConnection } from "typeorm";
import { User } from "./User";

const m = async () => {
await createConnection({
    "name": "practice",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "mysecretpassword",
    "database": "test",
    "synchronize": true,
    "entities": [User]
    // "entities": [
    //   "src/entity/*.js"
    // ]
}).then(async connection => {


    const user = new User();
    user.firstName = "Abebe";
    user.lastName = "Yalew";
    user.isActive = true;
    await connection.manager.save(user);
    console.log("Post has been saved: ", user);

}).catch(error => console.log("Error: ", error));
}
m()