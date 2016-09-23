import request from 'superagent'
import imageTemplate from '../views/image.hbs'
import jsonp from 'superagent-jsonp'

const showImage = (err, res) => {
  const placeholder = document.getElementById('placeholder')
  placeholder.innerHTML = imageTemplate(res.body)
}

const getImage = () => {
  var url = 'http://api.tumblr.com/v2/tagged?tag=pharrell&limit=1&api_key='
  var apiKey = '7pxuuoc3Y4ogYH99D3f4dAKk94c9oV41EAaSusTdp4NUgndIh3'
  request
    .get(url+apiKey)
    .use(jsonp)
    .end((err, res) => {
      if (!err) {
        console.log(res)
        var data = res.body.response[0]
        var pharrell = {
          title: data.blog_name,
          // imageLink: data.photos[0].original_size.url
          imageLink: data.photos[0].alt_sizes[1].url
        }
        document.getElementById('placeholder').innerHTML=imageTemplate(pharrell)
      }
    })
}

document.addEventListener('DOMContentLoaded', getImage)

// .select()
// .then(function(){
//   res.render(index, {})
// }
