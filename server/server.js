const express = require('express')
const app = express()



app.get("/", (req, res) => {
    res.json({"users":["User 1", "User 2", "User 3"]})
})

app.listen(8000, () => {console.log("Server started on port 8000")})

