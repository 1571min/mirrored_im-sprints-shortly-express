const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    users.findOrCreate({
      where : {email: req.body.email}
    ,
    defaults: {
      username: req.body.username, 
      password: req.body.password
      }
    })
    .spread((data, isCreated) => {
      if (isCreated) {
        return res.status(200).json(data);
      }
      return res.status(409).send('Already exists user');
    })
  }
};
