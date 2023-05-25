const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password:"admin",
    host:"localhost",
    port: 5432,
    database: "mazendb"
})

execute()
async function execute() {
    try{

    await client.connect()
    console.log("connected successfully")
    const results = await client.query("select * from employees")
    console.table(results.rows)
    }
    catch (e) {
        console.log(`Something wrong happend ${e}`)
    }
    finally {
        await client.end()
        console.log("Client disconnected successfuly")
    }
}