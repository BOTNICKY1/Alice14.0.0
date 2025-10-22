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
const cheerio = require('cheerio')
const FormData = require('form-data')
const fs = require('fs')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const { exec } = require('child_process')

const {
  createCanvas,
  registerFont,
  loadImage
} = require('canvas');

async function Smeme(awal = '', akhir = '', imageUrl) {
  let img = await loadImage(imageUrl)
  let canvas = createCanvas(img.width, img.height)
  let ctx = canvas.getContext('2d')

  ctx.drawImage(img, 0, 0, img.width, img.height)

  function tulisTeks(teks, x, y) {
    teks = teks.toUpperCase()
    let fontSize = Math.floor(img.width / 12)
    ctx.font = `bold ${fontSize}px Impact`
    ctx.textAlign = 'center'
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = fontSize / 6

    let maxWidth = img.width * 0.85
    let lineHeight = fontSize * 1.1
    let lines = []
    let words = teks.split(' ')
    let line = ''

    for (let word of words) {
      let testLine = line + word + ' '
      let metrics = ctx.measureText(testLine)
      if (metrics.width > maxWidth && line !== '') {
        lines.push(line.trim())
        line = word + ' '
      } else {
        line = testLine
      }
    }
    lines.push(line.trim())

    let totalHeight = lines.length * lineHeight
    let startY
    if (y === 'top') {
      startY = lines.length === 1 ? fontSize * 1.2 : totalHeight * 0.8
    } else {
      startY = img.height - (lines.length === 1 ? fontSize * 0.5 : totalHeight * 0.8)
    }

    lines.forEach((line, index) => {
      let lineY = startY + index * lineHeight
      ctx.strokeText(line, x, lineY)
      ctx.fillText(line, x, lineY)
    })
  }

  if (awal) tulisTeks(awal, img.width / 2, 'top')
  if (akhir) tulisTeks(akhir, img.width / 2, 'bottom')

  let buffer = canvas.toBuffer()
  return buffer
}

module.exports = { Smeme }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})