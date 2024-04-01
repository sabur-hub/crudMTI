import express from "express";

import fs from "fs";

import bodyParser from "body-parser";

const app = express();
const PORT = 9000;

// Используем bodyParser для обработки JSON-данных
app.use(bodyParser.json());

// Разрешаем CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Обработчик POST запроса для добавления данных 1
app.post('/api/add1', (req, res) => {
    const newData = req.body;
    fs.appendFile('data1.json', JSON.stringify(newData) + '\n', (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Ошибка при сохранении данных' });
        } else {
            res.status(200).json({ message: 'Данные успешно добавлены в data1.json' });
        }
    });
});

// Обработчик POST запроса для добавления данных 1
app.post('/api/add2', (req, res) => {
    const newData = req.body;
    fs.appendFile('data2.json', JSON.stringify(newData) + '\n', (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Ошибка при сохранении данных' });
        } else {
            res.status(200).json({ message: 'Данные успешно добавлены в data2.json' });
        }
    });
});
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
