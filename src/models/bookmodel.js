const{SQLConnection} = require("../db/connection");
const{DataTypes} = require("sequelize");

const Book = SQLConnection.define("Book",{
    title: {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
    },
    author: {
        type: DataTypes.STRING
    },
    publisher: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes. STRING
    }
});

module.exports = Book;