const express = require('express');
const app = express();
const path = require('path');

// 设置模板引擎为 EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 定义路由
// app.get('/', (req, res) => {
//   res.render('index', { title: 'My Blog', message: 'Welcome to my personal blog!' });
// });
app.get('/about', (req, res) => {
    res.render('about');
  });
// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT,'127.0.0.1', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});