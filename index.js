const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('API de ejemplo para SonarQube');
});
app.get('/suma', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (a == undefined || b == undefined) {
        res.status(400).send({ error: 'Los parámetros a y b deben ser números' });
    } else {
        res.send({ resultado: a + b });
    }
});
app.get('/diccionario', (req, res) => {
    const diccionario = {
    elemento1: 'valor1',
    elemento2: 'valor2',
    elemento3: 'valor3',
    elemento4: 'valor4',
    elemento5: 'valor5',
    elemento6: 'valor6',
    elemento7: 'valor7',
    elemento8: 'valor8',
    elemento9: 'valor9',
    elemento10: 'valor10'
    };
    const nombreElemento = req.query.nombre;
    if (nombreElemento && diccionario.hasOwnProperty(nombreElemento)) {
        res.send({ [nombreElemento]: diccionario[nombreElemento]
});
    } else {
        res.status(400).send({ error: 'El parámetro nombre es inválido o no está presente en el diccionario' });
    }
    });
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
