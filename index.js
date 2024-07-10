const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/students');

const app = express();

// إعداد الاتصال بقاعدة بيانات MongoDB
mongoose.connect('mongodb://localhost:27017/school', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// إعداد body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// إعداد المسارات
app.use('/students', studentRoutes);

// إعداد المنظر الرئيسي
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// بدء تشغيل الخادم
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});