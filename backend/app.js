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

const query = "SELECT * from Table_1 where id='"+req.query.id+"'";

sql.query(connectionString, query, (err, rows) => {
    res.status(200).json({
        rows:rows
    })
  });

});

app.post('/postData',(req,res)=>{
     console.log('console data for postl',req.query.title);
     console.log('console data for postl',req.body.title);
    // let a =2+ parseInt(req.query.data);
    // res.status(200).json({
    //     result:a
    // })

    const query = "insert into Table_1(id,title,fname,lname) values ('"+1+"','"+req.body.title+"','"+req.body.firstName+"','"+req.body.lastName+"')";

sql.query(connectionString, query, (err, rows) => {
    res.status(200).json({
        rows:'record is inserted'
    })
});
})

app.listen(3060,(req,res)=>{
    console.log('Express API is running in port 300');
})