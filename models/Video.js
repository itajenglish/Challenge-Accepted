const db = require('../lib/db')

const getAllVideos = (req, res, next) => {
  db.any('SELECT * FROM videos')
  .then((videos) => {
    res.send(videos)
  })
  .catch((err) => {
    console.log(err)
    res.send('OOhh oh something went wrong!')
  })
}

const getVideosByUserId = (req, res, next) => {
  const uid = req.session.user.id;
  console.log(req.session)

  db.many('SELECT * FROM videos WHERE id = $1', [uid])
  .then((videos) => {
    res.send(videos)
  })
  .catch((err) => {
    console.log(err)
    res.send('OOhh oh something went wrong!')
  })
}

module.exports = {
  getAllVideos,
  getVideosByUserId
}
