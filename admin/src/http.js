import axios from 'axios'

const article = axios.create({

  baseURL: process.env.NODE_ENV == 'development' ? '/api/article' : 'http://82.156.249.91:4000/article'
  // baseURL: 'http://82.156.249.91:4000/article'
});

const imgUpload = axios.create({
  // baseURL: '/api/img'
  baseURL: process.env.NODE_ENV == 'development' ? '/api/img' : 'http://82.156.249.91:4000/img'
  // baseURL: 'http://82.156.249.91:5000/'
})



export { article, imgUpload }


