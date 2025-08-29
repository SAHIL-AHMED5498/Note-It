// const { Sequelize, DataTypes } = require('sequelize');

// // Create connection
// const sequelize = new Sequelize("database1", "root", "SAHIL5498", {
//     host: "localhost",
//     dialect: "mysql"
// });

// // Define model
// const Note = sequelize.define("Note", {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true,
//         unique: true
//     },
//     title: {
//         type: DataTypes.STRING,   // VARCHAR(255) by default
//         allowNull: false
//     },
//     content: {
//         type: DataTypes.TEXT,     // Large text
//         allowNull: true
//     }
// }, {
//     tableName: "notes",          // Optional: table name
//     timestamps: true             // createdAt & updatedAt
// });

// // Test connection and sync
// sequelize.authenticate()
//     .then(() => {
//         console.log("✅ Connected to DB successfully");
//         return sequelize.sync(); // creates table if not exists
//     })
//     .then(async() => {
        
//     //   const note=  await Note.create({title:"first note"});
//     //   console.log(note.toJSON())

      
//         console.log("✅ Models synced");
//     })
//     .catch((err) => {
//         console.error("❌ Error: ", err);
//     });



//     module.exports = { sequelize, Note };