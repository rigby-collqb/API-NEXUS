const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/membros', async (req, res) => {
    try {
        // O Render vai buscar o dado no seu bot (HTTP)
        const response = await axios.get('http://fr-node-36.katabump.com:20316/api/membros');
        // E vai devolver para o seu site com HTTPS
        res.json(response.data);
    } catch (error) {
        res.json({ total: 6, status: "bot_offline_usando_cache" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Ponte HTTPS ativa!"));
