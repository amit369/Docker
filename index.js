const express = require('express');
const app = express();


app.get("/", (req,res) => {
           res.json({
                   id : 1,
                   name : "Amit",
                   age : 25
                 },
                 {
                    id : 2,
                    name : "Sunil",
                    age : 25
                  },
                  {
                     id : 3,
                     name : "Chandan",
                     age : 30
                  }
           )
})

app.listen(5000 , () => {
   console.log("app is running on 5000 port");
});