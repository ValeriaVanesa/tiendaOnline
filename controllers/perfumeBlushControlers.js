const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const clientes= require('../models/usersModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');
const path = require('path');
require('../database/conexion');


function perfumeBlush(req,res){

    res.sendFile(path.resolve('public/index25.html'));


    
}



module.exports= {
perfumeBlush


    }