var express = require('express')
var app = express()
var fs = require('fs');
var formidable = require('formidable');


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
      console.log(fields.mail_content);
 });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})