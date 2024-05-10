const express = require('express');
const mysql = require('mysql');

const connectDB = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"complate_api"
});

connectDB.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("DB Connected!")

    }

})