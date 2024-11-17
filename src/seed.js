import mongoose from "mongoose";
import { connDB } from "./util/ConnDB.js";
import { config } from "./config/config.js";


let argument = process.argv; 

if (!argument[2]){ 
    console.log("Ingrese Clave")    
    process.exit();
}
if (argument[2]!= "coder123") { 
    console.log("Clave Incorrecta")
    process.exit();
}

await connDB(config.MONGO_URL, config.DB_NAME);

const seedUsers = [
    { name: 'John Doe', email: 'john@example.com', password: 'password123' },
    { name: 'Jane Smith', email: 'jane@example.com', password: 'password456' },
    { name: 'Alice Johnson', email: 'alice@example.com', password: 'password789' },
  ]

let result = await mongoose.connection.collection('users').deleteMany({});
console.log(result);


result = await mongoose.connection.collection('users').insertMany(seedUsers);
console.log(result);
 


process.exit();


/*   
const seedDatabase = async () => {
    try {
      await connDB(); // Conectar a la base de datos
  
      // Limpiar la colección de usuarios antes de insertar
      await User.deleteMany({});
  
      // Insertar los usuarios
      await User.insertMany(seedUsers);
      console.log('Database seeded with users');
  
      // Cerrar la conexión
      mongoose.connection.close();
    } catch (error) {
      console.error('Error seeding database:', error.message);
    }
  };
  
  // Ejecutar el script de seeding
  seedDatabase();
  */

  