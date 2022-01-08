//overwrite default settings of webpack here

//首先 webpack与其他web tools 不一样的地方在于 他会便利所有文件 自动形成一个
//dependency tree，默认的entry-point是index.html

const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: './src/client/index.js'
}