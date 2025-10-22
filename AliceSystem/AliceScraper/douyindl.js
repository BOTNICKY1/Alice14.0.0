/*

  Made By kayzuMD
  Base : kayzu
  WhatsApp : wa.me/6289673462138
  Telegram : t.me/kayzuMD
  Youtube : @kayzuhosting

  Channel : https://whatsapp.com/channel/0029VbA0PhgJP20zFljfUS0b

  Copy Code?, Recode?, Rename?, Reupload?, Reseller? Taruh Credit Ya :D

  Mohon Untuk Tidak Menghapus Watermark Di Dalam Kode Ini

*/

const axios = require('axios');
const cheerio = require('cheerio');
const qs = require('qs');

async function douyindl(url) {
  const postData = qs.stringify({
    q: url,
    lang: 'id',
    cftoken: ''
  });

  try {
    const response = await axios.post(
      'https://tikvideo.app/api/ajaxSearch',
      postData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': '*/*',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    );

    if (response.data.status === 'ok') {
      const html = response.data.data;
      const $ = cheerio.load(html);
      const results = [];

      $('.tik-video').each((i, elem) => {
        const title = $(elem).find('.thumbnail .content h3').text().trim();
        const duration = $(elem).find('.thumbnail .content p').first().text().trim();
        const thumbnail = $(elem).find('.thumbnail img').attr('src');

        const downloadLinks = [];
        $(elem).find('.dl-action a').each((j, link) => {
          downloadLinks.push({
            title: $(link).text().trim(),
            url: $(link).attr('href')
          });
        });

        results.push({ title, duration, thumbnail, downloadLinks });
      });

      return results;
    } else {
      throw new Error(`Gagal mendapatkan data: ${response.data}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { douyindl };