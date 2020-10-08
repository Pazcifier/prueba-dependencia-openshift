const fs = require('fs');

const dir = __dirname + '/dependencias';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

for (let i = 0; i < 10; i++) {
    fs.appendFileSync(`${dir}/dependencia${i}.txt`, 'dependencia');
}