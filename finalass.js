const express = require('express');
const app = express();

app.use(express.json());
let users = ['1', '2', '3', '4', '5'];
let profiles = [];
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

app.get('/createprofile', (req, res) => {
    const { userid } = req.query;

    if (!users.includes(userid)) {
        return res.status(404).send('User does not exist');
    }

    if (profiles.includes(userid)) {
        return res.status(400).send('Profile already exists');
    }

    profiles.push(userid);

    res.send('Profile created successfully');
});

app.get('/deleteprofile', (req, res) => {
    const { userid } = req.query;
    if (!profiles.includes(userid)) {
        return res.status(404).send('Profile does not exist');
    }

    profiles = profiles.filter(id => id !== userid);

    res.send('Profile deleted successfully');
});


app.get('/withdraw-application', (req, res) => {
    const { userid } = req.query;
    res.send('Application withdrawn successfully');
});

app.get('/application', (req, res) => {
    const { userid } = req.query;
    res.send('Application submitted successfully');
});

app.get('/health', (req, res) => {
    res.send('Server is healthy');
});

app.get('logs', (req, res) => {
    res.send('Logs retrieved successfully');
});

app.listen(10000, () => {
    console.log('Server is running on http://localhost:10000');
});