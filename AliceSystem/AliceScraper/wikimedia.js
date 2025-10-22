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

  async function WikiMedia(title) {
    return new Promise((resolve, reject) => {
      axios.get(`https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(title)}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
          const $ = cheerio.load(res.data);
          let hasil = [];

          $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
            hasil.push({
              title: $(b).find('img').attr('alt'),
              source: 'https://commons.wikimedia.org' + $(b).attr('href'),
              image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src'),
            });
          });

          resolve(hasil);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

module.exports = WikiMedia;