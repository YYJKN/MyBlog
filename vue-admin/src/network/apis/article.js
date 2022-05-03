import {article} from '../request'

// 查询所有文章
export function queryArticle(data) {
  return article.post('/getPages',data)
}

// 插件文章
export function createArticle(data) {
  return article.post('/create',data)
}

// 查询单个文章
export function queryArticleOne(id) {
  return article.get('/edit/' + id)
}

// 编辑文章
export function editArticle(id,data) {
  return article.put('/' + id,data)
}

// 删除文章
export function deleteArticle(id) {
  return article.delete('/delete?id=' + id)

}
