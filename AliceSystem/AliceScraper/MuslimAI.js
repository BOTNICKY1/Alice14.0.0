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

async function muslimai(query) {
    const searchUrl = 'https://www.muslimai.io/api/search'; // Thanks To ShannModerz
    const answerUrl = 'https://www.muslimai.io/api/answer';

    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const searchResponse = await axios.post(searchUrl, { query }, { headers });

        if (!searchResponse.data || searchResponse.data.length === 0) {
            return { error: "Maaf, tidak ditemukan jawaban yang relevan." };
        }

        const sources = searchResponse.data.map(item => ({
            title: item.title || "Tidak ada judul",
            url: item.url || "Tidak ada URL"
        }));

        const passages = searchResponse.data.map(item => item.content).join('\n\n');

        const answerData = {
            prompt: `Gunakan ayat-ayat berikut untuk menjawab pertanyaan dengan sebaik mungkin sebagai ahli Al-Qur'an kelas dunia. Jangan menyebutkan bahwa Anda diberikan referensi ayat dalam jawaban Anda:\n\n${query}\n\n${passages}`
        };

        const answerResponse = await axios.post(answerUrl, answerData, { headers });

        return {
            answer: answerResponse.data,
            sources
        };
    } catch (error) {
        console.error("Error MuslimAI:", error.response ? error.response.data : error.message);
        return { error: "Terjadi kesalahan saat mengambil data dari MuslimAI." };
    }
}

module.exports = { muslimai };