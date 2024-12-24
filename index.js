const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! Deploy express App using AWS CodePipeline!!!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
