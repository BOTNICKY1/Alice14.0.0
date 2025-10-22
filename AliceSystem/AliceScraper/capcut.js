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
const axios = require("axios")

async function capcutDownloader(url) {
  try {
    const headers = {
      "accept": "application/json, text/plain, */*",
      "content-type": "application/json"
    }

    const { data } = await axios.post("https://3bic.com/api/download", { url }, { headers })

    if (!data || !data.originalVideoUrl) {
      return { status: false, msg: "Gagal ambil data" }
    }

    const base64url = data.originalVideoUrl.split("/api/cdn/")[1]
    const video = Buffer.from(base64url, "base64").toString()

    return {
      status: true,
      title: data.title || "",
      author: data.authorName || "",
      thumbnail: data.coverUrl || "",
      video
    }
  } catch (err) {
    return { status: false, msg: err.message }
  }
}

module.exports = capcutDownloader