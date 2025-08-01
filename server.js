// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// CORS 설정
app.use(cors({
  origin: 'http://127.0.0.1:5501',
  methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'] 
}));

app.use(express.text());

let data = { message: '여러분 화이팅!!' };

// GET
app.get('/message', (req, res) => {
  res.json(data);
});

// POST
app.post('/message', (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

// PUT
app.put('/message', (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

// DELETE
app.delete('/message', (req, res) => {
  data = {};
  res.send('데이터가 삭제되었습니다.');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});