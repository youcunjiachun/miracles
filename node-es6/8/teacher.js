const express = require('express')
const path = require('path')
const fs = require('fs')

let router = express.Router()

//所有图书的数据
let bookObj = require(path.resolve(__dirname, '../data/books.json'))

//设计路由

//显示所有图书
router.get('/show', (req, res) => {

    //动作标识
    let act = req.query.act
    if (act == 'shows') { // 获取所有图书数据
        res.send(bookObj)
    } else {
        // res.send('显示所有图书')
        //显示图书列表的静态页面
        res.sendFile(path.resolve(__dirname, '../views/book_index.html'))
    }



})

//显示某一本图书
router.get('/show/:bkid', (req, res) => {

    //某一图书的id
    let curid = req.params.bkid

    let curbooks = bookObj.filter((item) => {
        return item.id == curid
    })

    res.send(curbooks)
})

//显示添加图书界面
router.get('/add', (req, res) => {

    res.sendFile(path.resolve(__dirname, '../views/book_add.html'))
})

//处理添加图书操作【处理添加图书表单】
router.post('/add', (req, res) => {

    //接收post发送过来的数据
    let { bkname, price } = req.body

    //图书id
    let id = bookObj[bookObj.length - 1].id + 1

    //let book = { id, "bkname": "Python开发", "price": 67 }
    let book = { id, bkname, price }
    console.log(book, 77777)
    bookObj.push(book)

    // console.log(bookObj.toString())


    //将json数据转换成json格式的字符串，然后再写入json文件
    let result = JSON.stringify(bookObj)
    fs.writeFile(path.resolve(__dirname, "../data/books.json"), result, (err) => {

        if (err) {
            return res.send(err)
        }

        res.send(book)

    })

    // res.send('处理添加图书操作【处理添加图书表单】')
})


//显示修改图书界面
router.get('/update', (req, res) => {
    res.send('显示修改图书界面')
})

//处理修改图书操作【处理修改图书表单】
router.post('/update', (req, res) => {
    res.send('处理修改图书操作【处理修改图书表单】')
})

//删除图书
router.get('/delete', (req, res) => {
    res.send('删除图书')
})

module.exports = router