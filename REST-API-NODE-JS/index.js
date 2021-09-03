const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("test")
  console.log("test")
})
app.listen(5000, () => {
  console.log("server listening on 5000!!!")
})
