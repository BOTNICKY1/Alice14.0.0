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

async function FFW() {
    try {
        const ress = await axios.get(`https://ff.garena.com/id/weapons/`);
        const $ = cheerio.load(ress.data);
        
        const daftarSenjata = [];
        
        $('.weapon-card').each((index, element) => {
            const namaSenjata = $(element).find('.title-wrap span').text().trim();
            const damage = $(element).find('.damage-level').text().trim();
            const deskripsi = $(element).find('.abstract').text().trim();
            const tags = [];
            
            $(element).find('.tags-wrap .weapon-tag').each((i, tagElement) => {
                tags.push($(tagElement).text().trim());
            });

            daftarSenjata.push({
                name: namaSenjata,
                damage: damage,
                description: deskripsi,
                tags: tags,
            });
        });

        return daftarSenjata;
    } catch (error) {
        console.error("Kesalahan saat mengambil informasi senjata:", error);
        return `Error: ${error.message}`;
    }
}

module.exports = FFW;