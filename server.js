const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send(`Hello,Welcome to my API!`);
    res.status(200).json({ message: 'Welcome to my API!' })
});

//http://localhost:3000/api/users
app.get('/api/users', (req, res) => {
    res.status(200).json([
        { id: 1, name: 'Somchai' },
        { id: 2, name: 'Somsak' }
    ]);
});

//http://localhost:3000/api/products
app.get('/api/products', (req, res) => {
    res.status(200).json([
        { id: 101, name: 'Notebook', price: 350 }
    ]);
});

<<<<<<< HEAD
=======
//http://localhost:3000/api/users/101
app.get('/api/users/:userId', (req, res) => {
    const id = req.params.userId;
    res.send(`กำลังดึงข้อมูลผู้ใช้งาน ID: ${id}`);
});

>>>>>>> develop
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
