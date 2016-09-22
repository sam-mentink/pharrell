import request from 'superagent'
import imageTemplate from '../views/image.hbs'

const showImage = (err, res) => {
  const placeholder = document.getElementById('placeholder')
  placeholder.innerHTML = imageTemplate(res.body)
}

const getImage = () => {
  var url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=pharrell&count=2";
  request
  .get(url)
  .end((err, res) => {
  showImage(null, {
    body: {
      title: res.body.title,
      explanation: res.body.explanation
      }
    })
  })
}

document.addEventListener('DOMContentLoaded', getImage)
