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

async function hadist(hadist) {
    const { data: leet } = await axios.get(`https://www.hadits.id/tentang/${hadist}`);
    const $ = cheerio.load(leet);

    let hasil = [];
    $('section').each((i, el) => {
        let judul = $(el).find('a').text().trim();
        let link = `https://www.hadits.id${$(el).find('a').attr('href')}`;
        let perawi = $(el).find('.perawi').text().trim();
        let kitab = $(el).find('cite').text().replace(perawi, '').trim();
        let teks = $(el).find('p').text().trim();

        hasil.push({ judul, link, perawi, kitab, teks });
    });

    return hasil;
}

async function detail(url) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $('article h1').text().trim();
    const breadcrumb = [];
    $('div.breadcrumb-menu ol.breadcrumbs li').each((_, el) => {
        breadcrumb.push($(el).text().trim());
    });

    const haditsArab = $('article p.rtl').text().trim();
    const hadithNumber = $('header .hadits-about h2').text().match(/No. (\d+)/)[1];

    return { title, breadcrumb, haditsArab, hadithNumber };
}

module.exports = { hadist, detail };