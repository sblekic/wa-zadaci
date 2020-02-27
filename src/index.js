import express from 'express';
import storage from './memory_storage.js'
import cors from 'cors'

const app = express()  // instanciranje aplikacije
const port = 3000  // port na kojem će web server slušati

app.use(cors())

app.get('/posts', (req, res) => {
    res.json(storage.posts)
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`))