const { parse } = require("path");
const path = require("path");
// 운영체제별로 경로 표기법이 달라도 연결될 수 있도록 함

console.log(__dirname);
console.log(__filename);

// POSIX (Unix: Mac, Linux) : 'Users/temp/myfile.html'
// Windows : 'C:\\temp\\myfile.html'

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

// dirname
console.log(path.dirname(__filename));

// extension (확장자)
console.log(path.extname(__filename));

// parse 전체 경로 구분
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

// isAbsolute 절대 경로 T/F
console.log("isAbsolute?", path.isAbsolute(__dirname));
console.log("isAbsolute?", path.isAbsolute("../"));

// normalize 경로가 이상하면 알아서 수정해줌
console.log(path.normalize("./folder///////sub"));

// join 폴더 안에 새로운 폴더 생성
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image"));
// directory에 image라는 폴더를 만들고 연결하겠다
