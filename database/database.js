const Sequelize = require('sequelize');
const connection = new Sequelize('livros','root','5454',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;