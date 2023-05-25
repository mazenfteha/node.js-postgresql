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
    await client.query("BEGIN")
    await client.query("insert into employees values ($1,$2)", [102, 'leo'])
    console.log("Inserted a new row")
    await client.query("COMMIT")
    }
    catch(e) {
        console.log(`Failed to execut something ${e}`)
        await client.query("ROLLBACK")
    }
    finally{
        client.end()
        console.log("Cleaned")
    }
}