var express = require('express')
var app = express()
var fs = require('fs');
var formidable = require('formidable');
var nodemailer = require('nodemailer');


const port = 3000

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="sendmail" method="post" enctype="multipart/form-data">');
  res.write('<textarea name="mail_content" ></textarea>');
  res.write('<input type="submit" value="Send mail">');
  res.write('</form>');
  return res.end();
})


app.post('/sendmail', (req, res) => {  
  var form = new formidable.IncomingForm(); 
    form.parse(req, function (err, fields, files) {
      //console.log(fields.mail_content);
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'uuuuu@gmail.com',
          pass: 'pppp'
        }
      });
      
      var mailOptions = {
        from: 'uuuuu@gmail.com',
        to: 'fffff@yandex.com',
        subject: 'Sending Email using Node.js',
        text: fields.mail_content
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

 });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})