let fs = require("fs")
import { path, join } from "path"
import getSteps from "./getSteps.js"

export default () => {
  let filePath = "./public/admin/collections/Subcategories"
  let folder = fs.readdirSync(filePath).map(name => join(filePath, name))
  let data = folder.map(x => JSON.parse(fs.readFileSync(x, 'utf-8')))
  let steps = getSteps()
  let newData = []

  for(let x = 0;x < data.length; x++ ) {
      data[x]['steps'] = data[x]['steps'].map(y => {
          return steps.filter(z => {
            return z['title'] == y
          })[0]
        })
      newData.push(data[x])
  }
  return newData
}
