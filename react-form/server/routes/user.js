const express = require('express');
const router = express.Router();
const User = require('../models/users');

/* 회원가입 --------------------------------------------------------------------- */
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    newUser.save();
    res.send(`🟢 "${email}" 이메일 가입에 성공했습니다.`);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

/* 로그인 ---------------------------------------------------------------------- */
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: `🔴 ${email} 메일로 가입된 정보가 없습니다.` });
    }

    if (user.password !== password) {
      return res
        .status(400)
        .json(
          `🔴 ${email} 메일로 가입된 비밀번호와 입력된 비밀번호가 같지 않습니다.`
        );
    }

    res.send(user);
  } catch (error) {
    return res.status(400).json({ message: `🔴 오류 발생! ${error.message}` });
  }
});

module.exports = router;
