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

async function SongLyrics(query) {
    try {
        const response = await axios.get(`http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=${query}`);
        const result = response.data;

        if (result.status && result.data) {
            return result.data.map(song => ({
                songId: song.songId,
                artist: song.artist,
                songTitle: song.songTitle,
                songLyricsUrl: song.songLyrics
            }));
        } else {
            return 'No results found';
        }
    } catch (err) {
        throw new Error(`Error: ${err.message}`);
    }
}

module.exports = SongLyrics;
