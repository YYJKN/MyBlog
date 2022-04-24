import {article} from '../request'

export function articleQuery(data) {
  // let sort = {type:data.type}
  // let payLoad = { size: this.size, page, type: "home", sort };
  return article.post('/getPages',data)

}
