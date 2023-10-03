import express from "express";
import mysql from "mysql";

const app=express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database: "StartingDB"
});

app.use(express.json());

app.get("/appUser", (req,res)=> {
    const q = "SELECT * FROM uppUser"
    db.query(q,(err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.post("/appUser", (req,res)=> {
    const q = "INSERT INTO appUser (`UserUN`,`UserName`,`UserEmail`,`FavGenre`,`DateJoined`,`PhotoFileName`) VALUES (?)"
    const values = [
        req.body.UserUN,
        req.body.UserName,
        req.body.UserEmail,
        req.body.FavGenre,
        req.body.DateJoined,
        req.body.PhotoFileName,
    ]

    db.query(q,[values],(err,data) =>{
        if(err) return res.json(err);
        return res.json("User added.");
    })
});

app.listen(5000,()=>console.log("app is running"));