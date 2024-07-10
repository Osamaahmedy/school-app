const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// إضافة طالب جديد
router.post('/', async (req, res) => {
    const student = new Student({
        name: req.body.name
    });

    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
    } catch (err) {
        res.status(400).send(err);
    }
});

// جلب جميع الطلاب
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;