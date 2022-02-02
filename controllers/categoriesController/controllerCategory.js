const express = require('express');
const router = express.Router();
const Category = require('./categorys')

router.get('/admin/category', (req, res) => {
    Category.findAll().then(category => {
        res.render('categorias/adminCategoria', {category: category});
    });
    
});

router.get('/admin/categoryNew', (req, res) => {
    res.render('categorias/addCategoria');
});

router.post('/category/new/add', (req, res) =>{
    var title = req.body.title;
    var foto = req.body.foto;
    Category.create({
        title: title,
        foto: foto
    }).then(() => {
        res.redirect('categorias/adminCategoria');
    });
});



module.exports = router;