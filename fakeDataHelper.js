var fs = require('fs');

var fakeNameList = ['Donald', 'Duck', 'Steve', 'Tim', 'Kanye', 'Jerry', 'Victor', 'Andrew', 'Umi', 'Kevin', 'Steven', 'Steve', 'Ken', 'Clark', 'Angel', 'Kate', 'Rowena', 'Zooey', 'Mara'];
var content = 'INSERT INTO sitterProfile (fb_userId, name, photo, description, comeIn, boarding, price, unit, createdAt, phone, email, address, zipcode, latitude, longitude, rating) VALUES \n';
var fakeSitters = [];

for (var i = 0; i < 500; i++) {
  var fb_userId = Math.floor(Math.random() * 10000);
  var name = fakeNameList[Math.floor(Math.random() * fakeNameList.length)];
  var photo = '00'+ Math.ceil(Math.random() * 9) + '.jpeg';
  var price = Math.floor(Math.random() * 100);
  var address = Math.floor(Math.random() * 1000) + '' + name + ' st';
  var latitude = (37747929 + Math.floor(Math.random() * 59512))/1000000
  var longitude = -1 * (122387327 + Math.floor(Math.random() * 126362))/1000000;
  var rating = Math.floor(Math.random() * 11);
  var entry = `('"${fb_userId}"','${name}','${photo}','awesome', 0, 1, ${price}, 'day', '2017-10-04', '0000000000','${name}@gmail.com','${address}','94102', ${latitude}, ${longitude}, ${rating})`
  fakeSitters.push(entry);
}

content += fakeSitters.join(',\n') + ';';

fs.appendFile('./catbnb.sql', content, function(err) {
  if (err) console.log(err);
  console.log('test data appended');
})
