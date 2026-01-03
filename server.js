const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors()); // Importante para o site conseguir ler

app.get('/', async (req, res) => {
    try {
        // O Render busca no seu bot
        const response = await axios.get('http://fr-node-36.katabump.com:20316/api/membros');
        res.json(response.data);
    } catch (error) {
        // Se o bot estiver off, retorna um número padrão
        res.json({ total: 6, erro: "Bot offline" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Ponte Ativa"));
