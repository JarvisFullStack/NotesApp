const express = require('express');
const router = express.Router();

router.get('/users/singin', (req, res) => {
    res.render('users/singin');
});

router.get('/users/singup', (req, res) => {
    res.render('users/singup');
});

router.post('/users/singup', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    const errors = [];
    if(name.length <= 0) {
        errors.push({text: 'Debe llenar el campo nombre!'});
    }
    if(email.length <= 0) {
        errors.push({text: 'Debe proporcionar un Email!'});
    }
    if(password != confirmPassword) {
        errors.push({text: 'La clave no es igual a la de confirmacion'});
    }
    if(password.length < 6) {
        errors.push({text: 'La clave debe ser mayor a 6 caracteres!'});
    }
    if(errors.length > 0 ) {
        res.render('users/singup', {
            errors, name, email, password, confirmPassword
        });
    } else {
        res.send('ok');
    }
    
});
module.exports = router;