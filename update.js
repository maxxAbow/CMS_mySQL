//query to update department, role, employees

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
    
})