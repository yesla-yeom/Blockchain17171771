const fs = require("fs");

const writeStream = fs.createWriteStream("./file3.txt");
writeStream.on("finish", () => {
  console.log("finished!");
});

writeStream.write("hello!");
writeStream.write("world!");
writeStream.end();

// https://cafe.naver.com/bookfactory/100172?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6ImJvb2tmYWN0b3J5IiwiYXJ0aWNsZUlkIjoxMDAxNzIsImlzc3VlZEF0IjoxNjY3Mzk1NTkyODg0fQ.FzVCrAZJpEN7GtgJp3_67768_xe4sfNcnfh-AsvNydE
