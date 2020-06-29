import fs from "fs"
import { path, join } from "path"
import getSubcategories from "./getSubcategories.js"

export default () => {
  let filePath = "./public/admin/collections/Categories"
  let folder = fs.readdirSync(filePath).map(name => join(filePath, name))
  let data = folder.map(x => JSON.parse(fs.readFileSync(x, 'utf-8')))
  let subData = getSubcategories()
  let newData = []

  for(let x = 0;x< data.length; x++) {
    data[x]['Subcategories'] = data[x]['Subcategories'].map(y => {
        return subData.filter(z => {
          return z['title'] == y
        })[0]
      })
    newData.push(data[x])
  }
  return newData
}
