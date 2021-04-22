const express = require("express")
const app = express()
const port = process.env.PORT

const cors = require("cors")

var corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.get("*", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
