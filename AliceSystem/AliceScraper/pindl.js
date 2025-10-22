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

async function PinDL(pinterestUrl) {
    try {
        const apiUrl = `https://pinterestdownloader.io/id/frontendService/DownloaderService?url=${encodeURIComponent(pinterestUrl)}`;
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://pinterestdownloader.io/id'
        }; // Thanks To JazxCode

        const response = await axios.get(apiUrl, { headers });

        if (response.status === 200 && response.data && response.data.medias.length > 0) {
            const media = response.data.medias[0]; // Ambil Media Awal

            return {
                title: response.data.title || "Pinterest Media",
                type: media.extension.includes("mp4") ? "video" : "image",
                url: media.url
            };
        } else {
            return { error: "Gagal mengambil data dari Pinterest!" };
        }
    } catch (error) {
        return { error: error.message || "Terjadi kesalahan saat mengambil data." };
    }
}

module.exports = { PinDL };

