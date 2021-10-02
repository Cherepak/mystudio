const express = require("express");
const app = express();
app.use(express.static("public"));

let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: 'mail',
  port: 465,
  secure: true,
  auth: {
    user: "perec9595@mail.ru",
    pass: "MacTavish",
  }
});

app.get("/buy", (req,res)=> {

  const name = req.query.name;
  const phone = req.query.phone;
  const mail = req.query.mail;
  const type = req.query.type;
  const comunication = req.query.comunication;

  transporter.sendMail({
    from: "perec9595@mail.ru",
    to: "pere9595@mail.ru",
    subject: "Заявка от клиента",
    text: `Клиент: ${name} , Телефон: ${phone} , Мейл: ${mail} , Тип сайта: ${type} Тип связи: ${comunication}`,
  });


  res.send("заявка отправлена");
});

app.get("/consultacia", (req,res) => {

  const name = req.query.name;
  const phone = req.query.phone;
  const mail = req.query.mail;
  transporter.sendMail({
    from: "perec9595@mail.ru",
    to: "pere9595@mail.ru",
    subject: "Заявка от клиента на косультацию",
    text: `Клиент: ${name} , Телефон: ${phone} , Мейл: ${mail}`,
  });


  res.send("заявка отправлена");

})

app.listen(3000);
