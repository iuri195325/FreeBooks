const express = require('express');
const router = express.Router();
const Livros = require('./livros')
const Category = require('../categoriesController/categorys')

router.get('/home', (req, res) => {
    Livros.findAll().then(livros => {
        Category.findAll().then(category =>{
            res.render('index', {livros: livros, category:category});
        });
    });       
});

router.get('/sobre', (req, res) => {
    Category.findAll().then(category =>{
        res.render('sobre', {category:category});
    }); 
});
router.get('/contato', (req, res) => { 
    Category.findAll().then(category =>{
        res.render('contato', {category:category});
    }); 
});

router.get('/livros/romance', (req, res) => {
    Livros.findAll().then(livros => {
        Category.findAll().then(category => {
            res.render('livros/Romance', {livros: livros, category: category});
        });
        
    });       
});
router.get('/livros/ficcao', (req, res) => {
    Livros.findAll().then(livros => {
        Category.findAll().then(category => {
            res.render('livros/ficcao', {livros: livros, category: category});
        });
        
    });       
});
router.get('/livros/fantasia', (req, res) => {
    Livros.findAll().then(livros => {
        Category.findAll().then(category => {
            res.render('livros/fantasia', {livros: livros, category: category});
        });
        
    });       
});

router.get('/livros/suspense', (req, res) => {
    Livros.findAll().then(livros => {
        Category.findAll().then(category => {
            res.render('livros/suspense', {livros: livros, category: category});
        });
        
    });       
});

router.get('/livros/naoficcao', (req, res) => {
    Livros.findAll().then(livros => {
        Category.findAll().then(category => {
            res.render('livros/naoficcao', {livros: livros, category: category});
        });
        
    });       
});


router.get('/admin/livros', (req, res) => {
    Livros.findAll().then(livros => {
        Category.findAll().then(category => {
            res.render('livros/adminLivros', {livros: livros, category: category});
        });
        
    });       
});



router.get('/livros/new', (req, res) => {
    Category.findAll().then(category => {
        res.render('livros/addLivros', {category: category});
    });
    
});
router.post('/livros/new/add', (req, res) => {
    var titulo = req.body.titulo;
    var descri = req.body.descri;
    var img = req.body.img;
    var valor = req.body.valor;
    var autor = req.body.autor;
    var category = req.body.category;
    Livros.create({
        titulo: titulo,
        descri: descri,
        img: img,
        valor: valor,
        autor: autor,
        CategoryId: category
    }).then(() => {
        res.redirect('/admin/livros');
    });

});


router.get("/livros/download/:id", (req, res) => {
    var id = req.params.id;
    
    Livros.findOne({where: {id: id}}).then((livros) => {
        Category.findAll().then(category => {
            res.render("livros", {livros: livros, category: category});
        })
        
    });
});

module.exports = router;