const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//rotas
app.use('/api/v1', require('./routes'));

app.listen(3333, () => {
    console.log("🚀 Back-end started!");
});

