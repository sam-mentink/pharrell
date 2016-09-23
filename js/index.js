import request from 'superagent'
import imageTemplate from '../views/image.hbs'

const showImage = (err, res) => {
  const placeholder = document.getElementById('placeholder')
  placeholder.innerHTML = imageTemplate(res.body)
}

const getImage = () => {
  var url = 'https://api.tumblr.com/v2/tagged?tag=pharrell&limit=1&api_key='
  var apiKey = '7pxuuoc3Y4ogYH99D3f4dAKk94c9oV41EAaSusTdp4NUgndIh3'
  request
    .get(url+apiKey)
    .withCredentials()
    .end((err, res) => {
      var results = JSON.parse(res.text)
      var pharrell = {
        title: results.response[0].summary,
        imageLink: results.response[0].thumbnail_url
      }
      document.getElementById('placeholder').innerHTML=imageTemplate(pharrell)
    })
}

document.addEventListener('DOMContentLoaded', getImage)

// .select()
// .then(function(){
//   res.render(index, {})
// }
