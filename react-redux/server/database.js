const mongoose = require('mongoose');
const URL = process.env.DB_URL;

mongoose
  .connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`🟢 MongoDB 연결에 성공했습니다.`))
  .catch(() => console.error(`🔴 MongoDB 연결에 실패했습니다.`));
