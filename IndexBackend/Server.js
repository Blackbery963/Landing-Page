import Express from 'express';


const app = Express();

app.get('/', (req, res) => {
    res.send('Server is Runnings');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

