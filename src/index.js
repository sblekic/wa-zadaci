import express from 'express';
import routes from './routes'; // . označava da tražimo modul u istom direktoriju gdje se nalazi ovaj modul


const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati
const staticMiddleware = express.static('public') // direktorij sa statičkim datotekama

app.get('/', staticMiddleware)
app.get('/datum', routes.datum)
app.get('/prognoza', routes.prognoza)
app.listen(port, () => console.log(`Slušam na portu ${port}!`))