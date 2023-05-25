const {Client} =  require('pg')
const client = new Client({
    user: "postgres",
    password:"admin",
    host:"localhost",
    port: 5432,
    database: "mazendb"
})

client.connect()
.then(() => console.log("Connected successfuly"))
.then(() => client.query("select * from employees"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())