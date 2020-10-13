import express from 'express';

const app = express();

app.get('/users', (req,res) => {
    return res.json({'message': 'Hello Word!'})
})

app.listen(3333);

