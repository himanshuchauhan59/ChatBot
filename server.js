import fs from 'fs';
import http from 'http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser  from 'body-parser';
import { askQuestionGemin } from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 7007;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const hostIp = '192.168.215.68'
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, hostIp, () => {
    console.log(`Server running at http://${hostIp}:${PORT}/`)
})

app.post('/askQuestion', (req, res) => {
    console.log("question asked :: ", req.body);
    askQuestionGemin(req.body.question).then((result) => {
        // console.log("result :: ", result);
        res.send(result);
    }).catch((error) => {
        console.error(error);
    });
});