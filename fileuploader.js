var express = require('express')
var app = express()
var fs = require('fs');
var formidable = require('formidable');


const port = 3000

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
})


app.post('/fileupload', (req, res) => {  
  var form = new formidable.IncomingForm();
  console.log(form);
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/Nam.A/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})