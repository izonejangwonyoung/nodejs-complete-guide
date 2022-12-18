const path = require('path')


module.exports = path.dirname(process.mainModule.filename);
///우리 app이 실행될 수 있도록 해주는 파일의 경로를 알려줍니다.