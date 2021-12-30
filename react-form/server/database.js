const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin:admin@cluster0.u7ktp.mongodb.net/react-form';

mongoose
  .connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`🟢 MongoDB 연결에 성공했습니다.`))
  .catch(() => console.error(`🔴 MongoDB 연결에 실패했습니다.`));
