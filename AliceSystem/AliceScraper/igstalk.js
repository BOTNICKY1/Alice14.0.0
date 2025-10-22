const ress = require("axios");
const fs = require("fs")
const FormDatas = require("form-data");

const instagramStalker = async (usn) => {
  try {
    let s = new FormDatas();
    s.append("url", usn);

    let headers = {
      ...s.getHeaders(),
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "Origin": "https://bitchipdigital.com",
      "Referer": "https://bitchipdigital.com/",
      "Host": "app.mailcamplly.com",
      "Connection": "keep-alive",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "DNT": "1",
      "Upgrade-Insecure-Requests": "1",
    };

    let { data } = await ress.post("https://app.mailcamplly.com/api/instagram-profile", s, { headers });

    return {
      ...data
    };
  } catch (e) {
    return {
      msg: "Error Terjadi",
      errMessage: e.message
    };
  }
};

module.exports = { instagramStalker }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})