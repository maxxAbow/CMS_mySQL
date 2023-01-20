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

var addDep = ;
var addEmp = ;
var addRole = ;

app.get('/api/CMS',(req,res)=>{
    db.query('ALTER TABLE CMS.STORAGE (Department, Employee, Role) ?;',[addDep, addEmp, addRole],(err,data)=>{
        res.send(res)
    })
})
