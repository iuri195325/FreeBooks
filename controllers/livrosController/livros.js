const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Category = require('../categoriesController/categorys');

const Livros = connection.define('Livros',{
    titulo:{
        type: Sequelize.STRING
        
    },
    descri:{
        type: Sequelize.TEXT,
        
    },
    valor:{
        type: Sequelize.STRING
    },
    autor:{
        type: Sequelize.STRING
    },
    img:{
        type: Sequelize.TEXT
    }
});


Category.hasMany(Livros);
Livros.belongsTo(Category);
//Livros.sync({force: true});

module.exports = Livros;