const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// const port = process.env.PORT || 3000; we can use any 4digit no port
const port = 5000;

app.get('/', (req, res) => {
    res.send('WOW! I am excited to learn node and express nodemon automatic restart');
})

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Shuchorita', email: 'Shuchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Sushmita', email: 'Sushmita@gmail.com', phone: '01788888888' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter 
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});
// app.METHOD 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post ', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yumy tok marka fazli aam');
})

app.listen(port, () => {
    console.log('listening to port ', port);
})