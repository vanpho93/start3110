var fs = require('fs');
var pg = require('pg');

// function remove(dir){
//   fs.unlink(dir, err => {
//     if(err) return console.log(JSON.stringify(err));
//     console.log('Thanh cong');
//   });
// }

var config = {
  user: 'postgres',
  password: 'khoapham',
  database: 'USER',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillies: 30000
}

var pool = new pg.Pool(config);

function queryDB(sql, cb){
  pool.connect(function(err, client, done){
    if(err){
      console.log('LOI KET NOI ' + err);
    }else{
      done();
      client.query(sql, cb);
    }
  });
}

queryDB('SELECT * FROM Hotgirl', (err, result) => {
  if(err) return console.log('Loi truy van');
  console.log(result.rows);
})

function remove(dir){
  return new Promise(function(resolve, reject) {
    fs.unlink(dir, err => {
      if(err) return reject(dir);
      resolve(dir);
    })
  })
}

remove('./public/1.jpg')
.then((dir) => console.log('Xoa thanh cong ' + dir))
.catch((dir) => console.log('Xoa that bai ' + dir))

query('SELECT * FROM "User"')
.then((result) => console.log(result.rows))
.catch((err) => console.log(err));
