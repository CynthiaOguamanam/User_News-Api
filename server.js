require('./config/db')
const express =  require ('express');
const router = require('./Router/UserRoute')
// const newsRoute = require ('./Router/UserRoute')
const port = 2003;
const app = express();


app.use(express.json());
app.get('/api', (req, res)=>{
    res.send('Hello and welcome to UserNews Api')
});
app.use('/api', router)
// app.use('/api', newsRoute)

app.listen(port, ()=> {
    console.log(`app is listening to ${port}`)
})