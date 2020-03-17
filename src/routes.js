import moment from 'moment';

let datum = (req, res) => res.send(moment().format("dddd, MMMM Do YYYY, h:mm"))

let prognoza = (req, res) => {
    let prog = () => {
        var values = ["sunčano","kišovito","oblačno"],
        valueToUse = values[Math.floor(Math.random() * values.length)];
        //preuzeto sa: https://stackoverflow.com/questions/14422233/how-do-you-select-a-random-variable-within-a-function-in-javascript
        return valueToUse;
    }
    res.send('Danas će biti ' + prog())
}
let dodaj = (req, res) => res.send()




export default {prognoza, datum, dodaj } // na kraju navodimo koje JS objekte treba eksportati