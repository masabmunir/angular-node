const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const sql = require("msnodesqlv8");
const connectionString = "server=DESKTOP-UGTFEF6;Database=Masab;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
app.use(bodyParser.json());
// app.get('/getData', (req, res) => {
//     res.json({
//         "statusCode":200,
//         'message': 'Hello World'
//     })
// })


app.get('/getData', function (req, res) {

    const query = "SELECT * from Table_1";
    console.log(query,"masab");

    sql.query(connectionString, query, (err, rows) => {
      res.send(rows)
    });

});

app.get('/getDataById', function (req, res) {

    const query = "SELECT * from Table_1 where id='" + req.query.id + "'";
    console.log(query,"masab");

    sql.query(connectionString, query, (err, rows) => {
        res.status(200).json({
            rows: rows
        })
    });

});




app.post('/postData', (req, res) => {

    // let a =2+ parseInt(req.query.data);
    // res.status(200).json({
    //     result:a
    // })

    const query = "insert into Table_1(title,fname,lname) values ('" + req.body.title + "','" + req.body.firstName + "','" + req.body.lastName + "')";
    console.log(query, "asasasassa")
    sql.query(connectionString, query, (err, rows) => {
        res.status(200).json({
            rows: 'record is inserted'
        })
    });
})


app.post('/updateData', (req, res) => {

    // let a =2+ parseInt(req.query.data);
    // res.status(200).json({
    //     result:a
    // })

    const query = "update Table_1 set title='"+req.body.title+"',Fname='"+req.body.fname+"',Lname='"+req.body.lname+"' where id='"+req.body.id+"'";
    console.log(query, "asasasassa")
    sql.query(connectionString, query, (err, rows) => {
        res.status(200).json({
            rows: 'record is inserted'
        })
    });
})

app.get('/editdata',(req,res)=>{
    console.log(req.query.id)
    let query = "select id,trim(title) as title,Fname,Lname from Table_1 where id='"+req.query.id+"'";
    sql.query(connectionString,query,(err,rows)=>{
        console.log(rows)
        res.status(200).json({
            record:rows
        })
    });
})

app.listen(3060, (req, res) => {
    console.log('Express API is running in port 300');
})