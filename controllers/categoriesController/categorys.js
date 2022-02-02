const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Category = connection.define('Category',{
    title:{
        type: Sequelize.STRING    
    },
    foto:{
        type: Sequelize.STRING 
    }
});

//Category.sync({force: true});

module.exports = Category;