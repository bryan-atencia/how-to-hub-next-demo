let fs = require("fs")
import { path, join } from "path"

export default () => {
  let filePath = "./public/admin/collections/Subcategories"
  let folder = fs.readdirSync(filePath).map(name => join(filePath, name))
  let data = folder.map(x => JSON.parse(fs.readFileSync(x, 'utf-8')))
  return []
}
