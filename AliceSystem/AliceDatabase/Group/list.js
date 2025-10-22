//————————————————————————//

/*

Base XyrooRynzz
Powered By Alice Assistent
© XyrooRynzz 2022 - 2026

Source
WhatsApp : https://wa.me/6281543496975
Tele me : https://t.me/XyrooRynzz
instagram : https://instagram.com/biionlyyone
WhatsApp: https://whatsapp.com/channel/0029VaagYHwCnA82hDK7l31D

*/

//————————————————————————//
const axios = require('axios')
const chalk = require('chalk')
const cheerio = require("cheerio")
const FormData = require('form-data')
const fs = require('fs')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')

function addResponList(groupID, key, response, isImage, image_url, _db) {
  var obj_add = {
    id: groupID,
    key: key,
    response: response,
    isImage: isImage,
    image_url: image_url
  }
  _db.push(obj_add)
  fs.writeFileSync('./AliceSystem/AliceDatabase/Group/list-message.json', JSON.stringify(_db, null, 3))
}

function getDataResponList(groupID, key, _db) {
  let position = null
  Object.keys(_db).forEach((x) => {
    if (_db[x].id === groupID && _db[x].key === key) {
      position = x
    }
  })
  if (position !== null) {
    return _db[position]
  }
}

function isAlreadyResponList(groupID, key, _db) {
  let found = false
  Object.keys(_db).forEach((x) => {
    if (_db[x].id === groupID && _db[x].key === key) {
      found = true
    }
  })
  return found
}

function sendResponList(groupId, key, _dir) {
  let position = null
  Object.keys(_dir).forEach((x) => {
    if (_dir[x].id === groupId && _dir[x].key === key) {
      position = x
    }
  })
  if (position !== null) {
    return _dir[position].response
  }
}

function isAlreadyResponListGroup(groupID, _db) {
  let found = false
  Object.keys(_db).forEach((x) => {
    if (_db[x].id === groupID) {
      found = true
    }
  })
  return found
}

function delResponList(groupID, key, _db) {
  let position = null
  Object.keys(_db).forEach((x) => {
    if (_db[x].id === groupID && _db[x].key === key) {
      position = x
    }
  })

  if (position !== null) {
    _db.splice(position, 1)
    fs.writeFileSync('./AliceSystem/AliceDatabase/Group/list-message.json', JSON.stringify(_db, null, 3))
  }
}

function updateResponList(groupID, key, response, isImage, image_url, _db) {
  let position = null
  Object.keys(_db).forEach((x) => {
    if (_db[x].id === groupID && _db[x].key === key) {
      position = x
    }
  })
  if (position !== null) {
    _db[position].response = response
    _db[position].isImage = isImage
    _db[position].image_url = image_url
    fs.writeFileSync('./AliceSystem/AliceDatabase/Group/list-message.json', JSON.stringify(_db, null, 3))
  }
}

module.exports = {
  addResponList,
  getDataResponList,
  isAlreadyResponList,
  sendResponList,
  isAlreadyResponListGroup,
  delResponList,
  updateResponList
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})