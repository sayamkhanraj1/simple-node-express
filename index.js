const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const users = [
         {id: 0, name: 'Shabana', email: 'shabana@gmail.com', phon: '102455466'},
         {id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phon: '102455466'},
         {id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phon: '102455466'},
         {id: 3, name: 'Soniya', email: 'Soniya@gmail.com', phon: '102455466'},
         {id: 4, name: 'Suchorita', email: 'Suchorita@gmail.com', phon: '102455466'},
         {id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phon: '102455466'},
]

app.get('/users', (req, res)=>{
         res.send(users);
});

//app.METHOD
app.post('/users', (req, res) =>{
         const newUser = req.body;
         newUser.id = users.length;
         users.push(newUser);
         console.log('hitting')
         // res.send('post got hited')
         res.json(newUser);
})


app.get('/fruits', (req, res) =>{
         res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangos/fazli', (req, res) =>{
         res.send('Mangos')
})

app.listen(port, () =>{
         console.log('Listening to port', port)
})