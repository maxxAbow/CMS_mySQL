//Clarifying questions
const inquirer = require('inquirer');

var addDep = ;
var addEmp = ;
var addRole = ;

//query to add department, role, employee

const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const db = mysql.createConnection({
    host: 'localhost'
    ,user:'root'
    ,password:'B@rist@s23'
    ,port:PORT
    ,database:'CMS'
});

app.use(exporess.json());
app.use(express.urlencoded(extended,true));


app.get('/api/CMS',(req,res)=>{
    db.query('INSERT INTO CMS.STORAGE (Department, Employee, Role) VALUES ?;',[(addDep, addEmp, addRole)],(err,data)=>{
        res.send(res)
    })
})
