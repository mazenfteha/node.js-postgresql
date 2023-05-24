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
.catch(e => console.log)
.finally(() => client.end())