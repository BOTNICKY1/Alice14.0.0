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

const axios = require('axios');
const cheerio = require('cheerio');

async function YahooImg(query) {
  try {
    const url = `https://images.search.yahoo.com/search/images?p=${encodeURIComponent(query)}&ei=UTF-8`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let result = [];

    $("div.sres-cntr ul#sres > li").each((index, element) => {
      const imageData = JSON.parse($(element).attr("data"));
      if (imageData) {
        result.push({
          title: imageData.alt || "No title",
          size: imageData.s,
          width: imageData.w,
          height: imageData.h,
          url: imageData.iurl,
        });
      }
    });

    return result;
  } catch (error) {
    throw new Error(`Error fetching image data: ${error.message}`);
  }
}

module.exports = YahooImg;