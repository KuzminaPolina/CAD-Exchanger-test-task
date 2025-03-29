import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Express on Versel")
})

app.get("/contacts", (req, res)=>{
    res.send("This is your contacts")
})

app.post('/contacts', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name and email are required!' });
    }    
    return res.status(200).json({ message: `Thank you for your interest, ${name}! Message sent successfully!` });
});

app.listen(port,()=>{
    console.log(`Serving the app on port 3000`)
})

module.exports = app;