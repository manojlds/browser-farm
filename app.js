var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Work in progress';
});

app.listen(3000);
