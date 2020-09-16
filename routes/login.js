const express = require('express');
const router = express.Router();
const login = require('../db/db.json');

function Logar(){
    
   login.post('/inside/site', (req,res) => {
        const { email, password } = req.body;
    
            if(email && password) {
                res.redirect('/inside/site');
            } else {
                console.log("Não foi possível logar")
            }
    })
}

function SendEmail() {
    login.post('/login/senha', (req,res) => {
        const { email } = req.body;
    
            if(email) {
            res.redirect('/login/senha')
        } else {
            console.log('Usuário não encontrado')
        }
    })

}

module.export = Logar;
module.export = SendEmail;

module.exports = router;