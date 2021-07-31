import express from "express"
import recpies from "./recipes.js"
import recpiesDetails from "./recipes-details.js"

const app = express()
const port = process.env.PORT || 3000

app.get('/recipes', (req, res) => {
  res.json(recpies)
})

app.get('/recipes/:id', (req, res) => {
    let a = recpiesDetails.filter(r=>r.id==req.params.id)[0]
    res.json({"details":a})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})