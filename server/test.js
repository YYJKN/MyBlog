let obj = {
  id:1,
  parent:-1,
  type: 'comment',
  to: 0,
  from: 'Matt',
  content: '今天天气真好啊',
}

let obj2 = {
  parent:1,
  type: 'comment',
  to: 'Matt',
  from: 'zero',
  content: '今天是太阳',
}

let obj3 = {
  parent:1,
  type: 'comment',
  to: 'Matt',
  from: 'Bob',
  content: '我想睡觉',
}

let obj4 = {
  parent:1,
  type: 'comment',
  to: 'Bob',
  from: 'Zika',
  content: '我给你买床',
}

let obj5 = {
  id:4,
  parent:-1,
  type: 'comment',
  to: 0,
  from: 'Caiden',
  content: '今天要上学',
}


let arr = [obj,obj2,obj3,obj4,obj5]

let out = []


arr.forEach((item,index) => {
  // 查询到名字，然后替换
  if(item.parent == -1) {
    item.children = []
    out.push(item)
  } else {
    out.forEach((item2,index)=> {
      if(item2.id == item.parent) {
          item2.children.push(item)
      }
    })
  }
})

console.log(out);