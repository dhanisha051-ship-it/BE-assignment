const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('login page');
});

app.get('/login', (req, res) => {
    const { email, password } = req.query;

    if (!email || !password) {
        return res.status(400).json({send: 'Email or password incorrect' });
    }

    res.send('Login successful');
});

app.get('/signup', (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    const password = req.query.password;
    const reenterpassword = req.query.reenterpassword;
    const gender = req.query.gender;
    const mobile = req.query.mobile;
    const address = req.query.address;
    const {building,floor,lane1,lane2,landmarks,pincode}=req.query;
     if (!name || !email || !password || !reenterpassword ||
        !gender || !mobile || !address) {
        return res.status(400).send('some field is empty');
    }

    if (password !== reenterpassword) {
        return res.status(400).json({send: 'Passwords do not match' });
    }

    res.send('Signup successful');
});

app.listen(10000, () => {
    console.log('Server is running on http://localhost:10000');
});