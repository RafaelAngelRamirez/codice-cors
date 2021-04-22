const express = require("express")
const app = express()
const port = 5000 || process.env.PORT

const cors = require("cors")

app.use(cors())

app.all("*", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
