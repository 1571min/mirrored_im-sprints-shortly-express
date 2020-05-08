const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    users.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    .then(data => {
      if (data) {
        // console.log(JSON.stringify(data));
        // console.log(data);
        return res.status(200).json({id: data.id});
      }
      return res.status(404).send('unvalid user');
    })
    .catch(err => {
      console.error(err);
    }) 
  }
};
