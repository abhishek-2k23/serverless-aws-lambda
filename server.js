import {app} from './index.js';

app.listen(3000, () => console.log('Server running on port 3000'));

app.get('/', (req, res) => {
    return res.send('Hello World!');
})

app.get('/health', (req,res) => {
    res.send('ok health check');
})