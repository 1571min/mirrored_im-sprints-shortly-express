const { users } = require('../../models');
var crypto = require('crypto');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    users
      .findOne({
        where: {
          email: req.body.email,
        },
      })
      .then((data) => {
        if (data) {
          let secret = data.salt;
          const hashed = crypto.createHmac('sha256', secret)
            .update(req.body.password)
            .digest('hex');
          if (hashed === data.password) {
            req.session.user = data;
            return res.status(200).json({ id: req.session.user.id });
          } else {
            return res.status(404).send('unvalid user');
          }
        }
        return res.status(404).send('unvalid user');
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
