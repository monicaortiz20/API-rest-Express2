const express = require('express');
const app  = express();
const port = 3000;

const filmRoutes = require("./routes/apiRestroutes")

app.use(express.json());
app.use(express.urlencoded( {extended:true })) //línea fija, se usa siempre para cualq POST
app.set('view engine', 'pug');
app.set('views','./views');


app.use('/',filmRoutes); 
// app.use('/film',filmRoutes);           


app.listen(port, () => {
    console.log(`Mi servidor funciona en http://localhost/:$%7Bport%7D%60`);
  })

