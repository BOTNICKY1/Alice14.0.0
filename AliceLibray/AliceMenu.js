//═══════════════════════════════════════════════//
//           🚀 Alice Assistent - Bot WhatsApp Canggih           //
//═══════════════════════════════════════════════//
//
//   🤖 Powered By XyrooRynzz
//   © XyrooRynzz 2022 - 2026
//
//   📌 Source & Official Contact:
//   ➤ WhatsApp : wa.me/6281543496975
//   ➤ Telegram : t.me/XyrooRynzz
//
//   📦 WhatsApp Channels:
//   ➤ Utama : whatsapp.com/channel/0029Vb5wlHOKmCPNLWXge02p
//   ➤ Testi : whatsapp.com/channel/0029VamvtL2ADTO7ikBeNe1E
//
//   ⚡ Fast ${global.emojipick}.Secure ${global.emojipick}.Automated ${global.emojipick}.Stylish ⚡
//
//═══════════════════════════════════════════════//
//
// 📈━━━━━━━━━━━━━━━━━━━ [ © XyrooRynzz ] ━━━━━━━━━━━━━━━━━━━📉//
const fs = require('fs')
const { color } = require('./funcalice')
        
global.cpanelmenu = `
┌── •「 *ᴍᴇɴᴜ ᴄᴘᴀɴᴇʟ* 」
${global.emojipick}.cadp
${global.emojipick}.cpanel
${global.emojipick}.delpanel
${global.emojipick}.listusr
${global.emojipick}.listsrv
${global.emojipickxx}`

global.animemenu = `
┌── •「 *ᴍᴇɴᴜ ᴀɴɪᴍᴇ* 」
${global.emojipick}.animeawoo
${global.emojipick}.animemegumin
${global.emojipick}.animeshinobu
${global.emojipick}.animehandhold
${global.emojipick}.animehighfive
${global.emojipick}.animecringe
${global.emojipick}.animedance
${global.emojipick}.animehappy
${global.emojipick}.animeglomp
${global.emojipick}.animesmug
${global.emojipick}.animeblush
${global.emojipick}.animewave
${global.emojipick}.animesmile
${global.emojipick}.animepoke
${global.emojipick}.animewink
${global.emojipick}.animebonk
${global.emojipick}.animebully
${global.emojipick}.animeyeet
${global.emojipick}.animebite
${global.emojipick}.animelick
${global.emojipick}.animekill
${global.emojipick}.animecry
${global.emojipick}.animewlp
${global.emojipick}.animekiss
${global.emojipick}.animehug
${global.emojipick}.animeneko
${global.emojipick}.animepat
${global.emojipick}.animeslap
${global.emojipick}.animecuddle
${global.emojipick}.animewaifu
${global.emojipick}.animenom
${global.emojipick}.animefoxgirl
${global.emojipick}.animetickle
${global.emojipick}.animegecg
${global.emojipick}.bluearchive
${global.emojipick}.komikusearch
${global.emojipick}.komikudetail
${global.emojipick}.otakudesu
${global.emojipick}.otakudesu-search
${global.emojipick}.otakudesu-detail
${global.emojipickxx}`

global.pushmenu = `
┌── •「 *ᴍᴇɴᴜ ᴘᴜsʜ* 」
${global.emojipick}.jpm
${global.emojipick}.pushkontak
${global.emojipick}.pushkontak2
${global.emojipick}.savekontak
${global.emojipick}.savekontak2
${global.emojipick}.pushkontakbeton
${global.emojipickxx}`

global.mainmenu = `
┌── •「 *ᴍᴇɴᴜ ᴍᴀɪɴ* 」
${global.emojipick}.rvo
${global.emojipick}.rvo2
${global.emojipick}.req
${global.emojipick}.mood
${global.emojipick}.narrate
${global.emojipick}.report
${global.emojipick}.jarak
${global.emojipick}.ping
${global.emojipick}.totalfitur
${global.emojipick}.Limit
${global.emojipick}.Tembak
${global.emojipick}.Terima
${global.emojipick}.Tolak
${global.emojipick}.Cekpacar
${global.emojipick}.Topcmd
${global.emojipick}.Report
${global.emojipick}.cekprem
${global.emojipick}.ceksewa
${global.emojipick}.stupidcheck
${global.emojipick}.handsomecheck
${global.emojipick}.uncleancheck
${global.emojipick}.hotcheck
${global.emojipick}.smartcheck
${global.emojipick}.greatcheck
${global.emojipick}.evilcheck
${global.emojipick}.dogcheck
${global.emojipick}.coolcheck
${global.emojipick}.waifucheck
${global.emojipick}.awesomecheck
${global.emojipick}.gaycheck
${global.emojipick}.cutecheck
${global.emojipick}.lesbiancheck
${global.emojipick}.hornycheck
${global.emojipick}.prettycheck
${global.emojipick}.lovelycheck
${global.emojipick}.uglycheck
${global.emojipickxx}`

global.beritamenu = `
┌── •「 *ᴍᴇɴᴜ ʙᴇʀɪᴛᴀ* 」
${global.emojipick}.nasa
${global.emojipick}.inews
${global.emojipick}.detik
${global.emojipick}.cnbc
${global.emojipick}.cnn
${global.emojipick}.metrotv
${global.emojipick}.kontan
${global.emojipick}.liputan6
${global.emojipick}.indozone
${global.emojipick}.malaymail
${global.emojipick}.merdekanews
${global.emojipick}.vietnamnews
${global.emojipick}.cnn
${global.emojipick}.cnn-detail
${global.emojipick}.vivagoal
${global.emojipick}.vivagoal-detail
${global.emojipickxx}`

global.asupanmenu = `
┌── •「 *ᴍᴇɴᴜ ᴀsᴜᴘᴀɴ* 」
${global.emojipick}.tiktokgirl
${global.emojipick}.tiktoknukthy
${global.emojipick}.tiktokkayes
${global.emojipick}.tiktokpanrika
${global.emojipick}.tiktoknotnot
${global.emojipick}.tiktokghea
${global.emojipick}.tiktoksantuy
${global.emojipick}.tiktokbocil
${global.emojipickxx}`

global.audiomenu = `
┌── •「 *ᴍᴇɴᴜ ᴀᴜᴅɪᴏ* 」
${global.emojipick}.bass
${global.emojipick}.blown
${global.emojipick}.deep
${global.emojipick}.earrape
${global.emojipick}.fast
${global.emojipick}.fat
${global.emojipick}.nightcore
${global.emojipick}.reverse
${global.emojipick}.robot
${global.emojipick}.slow
${global.emojipick}.smooth
${global.emojipick}.tupai
${global.emojipick}.tts
${global.emojipick}.ringtone
${global.emojipick}.voice-alice
${global.emojipick}.voice-michie
${global.emojipick}.voice-tokoh
${global.emojipick}.mangkane1-54
${global.emojipick}.music1-65
${global.emojipickxx}`

global.anonymousmenu = `
┌── •「 *ᴍᴇɴᴜ ᴀɴᴏɴʏᴍᴏᴜs* 」
${global.emojipick}.anonymous
${global.emojipick}.start
${global.emojipick}.mulai
${global.emojipick}.leave
${global.emojipick}.keluar
${global.emojipick}.next
${global.emojipick}.lanjut
${global.emojipick}.confess
${global.emojipick}.menfess
${global.emojipick}.balasmenfess
${global.emojipick}.tolakmenfess
${global.emojipick}.stopmenfess
${global.emojipickxx}`

global.aimenu = `
┌── •「 *ᴍᴇɴᴜ ᴀɪ* 」
${global.emojipick}.ai
${global.emojipick}.zerogpt
${global.emojipick}.chatai
${global.emojipick}.chatgpt
${global.emojipick}.claudeai
${global.emojipick}.veniceai
${global.emojipick}.conciseai
${global.emojipick}.gemini-ai
${global.emojipick}.llama-ai
${global.emojipick}.lumin-ai
${global.emojipick}.typli-ai
${global.emojipick}.poly-ai
${global.emojipick}.quantum-ai
${global.emojipick}.gptturbo
${global.emojipick}.chatevery-where
${global.emojipick}.gemini-pro
${global.emojipick}.gpt-4o
${global.emojipick}.allam-ai
${global.emojipick}.muslimai
${global.emojipickxx}`

global.storemenu = `
┌── •「 *ᴍᴇɴᴜ sᴛᴏʀᴇ 🛒* 」
${global.emojipick}.addproduk
${global.emojipick}.delproduk
${global.emojipick}.listproduk
${global.emojipick}.beliproduk
${global.emojipick}.restok
${global.emojipick}.confirm
${global.emojipick}.cancel
${global.emojipick}.payment
${global.emojipick}.done
${global.emojipick}.proses
${global.emojipick}.tunda
${global.emojipick}.batal
${global.emojipick}.tambah
${global.emojipick}.kurang
${global.emojipick}.bagi
${global.emojipick}.kali
${global.emojipick}.kalkulator
${global.emojipick}.buysewa
${global.emojipick}.buyprem
${global.emojipick}.cancel
${global.emojipick}.status
${global.emojipickxx}`

global.convertmenu = `
┌── •「 *ᴍᴇɴᴜ ᴄᴏɴᴠᴇʀᴛ 📍* 」
${global.emojipick}.hd
${global.emojipick}.attp
${global.emojipick}.attp2
${global.emojipick}.attp3
${global.emojipick}.attp4
${global.emojipick}.ttp
${global.emojipick}.ttp2
${global.emojipick}.ttp3
${global.emojipick}.ttp4
${global.emojipick}.ttp5
${global.emojipick}.temini
${global.emojipick}.sticker
${global.emojipick}.smeme
${global.emojipick}.wm
${global.emojipick}.qc
${global.emojipick}.brat
${global.emojipick}.tovn
${global.emojipick}.toaudio
${global.emojipick}.tomp3
${global.emojipick}.tomp4
${global.emojipick}.togift
${global.emojipick}.toptv
${global.emojipick}.torvo
${global.emojipick}.toimg
${global.emojipick}.tourl
${global.emojipick}.emojimix
${global.emojipick}.img2txt
${global.emojipick}.img2prompt
${global.emojipick}.diffusion
${global.emojipick}.morse
${global.emojipick}.shortlink
${global.emojipick}.quotesimg
${global.emojipick}.iphonechat
${global.emojipick}.faceblur
${global.emojipick}.short-cloudku
${global.emojipickxx}`

global.toolsmenu = `
┌── •「 *ᴛᴏᴏʟs 🔨* 」
${global.emojipick}.kalkulator
${global.emojipick}.nulis
${global.emojipick}.get
${global.emojipick}.gtts2
${global.emojipick}.tts2
${global.emojipick}.gethtml
${global.emojipick}.phlogo
${global.emojipick}.translate
${global.emojipick}.resize
${global.emojipick}.html
${global.emojipick}.javascript
${global.emojipick}.python
${global.emojipick}.tocode
${global.emojipick}.txt2img
${global.emojipick}.img2img
${global.emojipick}.txt2anime
${global.emojipick}.txt2ghibli
${global.emojipick}.txt2pixel
${global.emojipick}.reactch
${global.emojipick}.getinfoch
${global.emojipick}.getinfogc
${global.emojipick}.ccgen
${global.emojipick}.sharetext
${global.emojipick}.codegen
${global.emojipick}.ceklinkgc
${global.emojipick}.wastalk
${global.emojipick}.removebg
${global.emojipick}.faketiktok
${global.emojipick}.texttonote
${global.emojipick}.getpb
${global.emojipick}.getgist
${global.emojipick}.listapi
${global.emojipick}.getapi
${global.emojipick}.npmjs
${global.emojipick}.skiplink
${global.emojipick}.getpastebin
${global.emojipick}.rekap
${global.emojipick}.install-m
${global.emojipick}.uninstall-m
${global.emojipick}.listmodule
${global.emojipick}.updatemodule
${global.emojipickxx}`

global.islamimenu = `
┌── •「 *ɪsʟᴀᴍɪ 🕌* 」
${global.emojipick}.doa
${global.emojipick}.kisahnabi
${global.emojipick}.asmaulhusna
${global.emojipick}.bacaansholat
${global.emojipick}.ayatkursi
${global.emojipick}.doaharian
${global.emojipick}.niatsholat
${global.emojipick}.quotesislami
${global.emojipick}.doatahlil
${global.emojipick}.artisurah
${global.emojipick}.dalamislam
${global.emojipick}.jadwalsholat
${global.emojipick}.tafsirsurah
${global.emojipick}.hadistid
${global.emojipick}.hadistdetail
${global.emojipick}.ayat
${global.emojipick}.murotal
${global.emojipickxx}`

global.downloadermenu = `
┌── •「 *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 📌* 」
${global.emojipick}.fb
${global.emojipick}.aio
${global.emojipick}.ig
${global.emojipick}.cocofun
${global.emojipick}.twitterdl
${global.emojipick}.sfiledl
${global.emojipick}.gitclone
${global.emojipick}.mediafire
${global.emojipick}.capcut
${global.emojipick}.tiktok
${global.emojipick}.ytmp3
${global.emojipick}.ytmp4
${global.emojipick}.videy
${global.emojipick}.pindl
${global.emojipick}.apkdl
${global.emojipick}.douyindl
${global.emojipick}.apkdetail
${global.emojipick}.samehadakudl
${global.emojipick}.samehadakudetail
${global.emojipick}.facebook
${global.emojipick}.shortlink-dl
${global.emojipick}.nontonanime-download
${global.emojipick}.nontonanime-detail
${global.emojipick}.resepdownload
${global.emojipick}.spotify-download
${global.emojipick}.soundcloud-download
${global.emojipickxx}`

global.premiummenu = `
┌── •「 *ᴘʀᴇᴍɪᴜᴍ ⭐* 」
${global.emojipick}.nglspam
${global.emojipick}.enc
${global.emojipick}.reminder
${global.emojipick}.ssweb
${global.emojipick}.hdvid
${global.emojipick}.infogempa
${global.emojipick}.npmstalk
${global.emojipick}.ghstalk
${global.emojipick}.igstalk
${global.emojipick}.ttstalk
${global.emojipick}.mlstalk
${global.emojipick}.ffstalk
${global.emojipick}.chstalk
${global.emojipick}.threads
${global.emojipick}.threadsimg
${global.emojipick}.readmore
${global.emojipick}.xnxxsearch
${global.emojipick}.xnxxdl
${global.emojipick}.animediff
${global.emojipick}.dalle3
${global.emojipick}.img2video
${global.emojipick}.telegramstalk
${global.emojipick}.toanime
${global.emojipick}.tofigure
${global.emojipick}.tobotak
${global.emojipick}.tohitam
${global.emojipick}.editimage
${global.emojipick}.veo3
${global.emojipick}.gimg18+
${global.emojipick}.ultahku
${global.emojipick}.buatlagu
${global.emojipick}.deepfake
${global.emojipickxx}`

global.searchmenu = `
┌── •「 *sᴇᴀʀᴄʜ 🔎* 」
${global.emojipick}.sbook
${global.emojipick}.jkt48
${global.emojipick}.weather
${global.emojipick}.cerpen
${global.emojipick}.gsmarena
${global.emojipick}.play
${global.emojipick}.playvid
${global.emojipick}.playvideo
${global.emojipick}.playap
${global.emojipick}.pin
${global.emojipick}.yts
${global.emojipick}.ttsearch
${global.emojipick}.cekhp
${global.emojipick}.gimage
${global.emojipick}.bingimg
${global.emojipick}.infoanime
${global.emojipick}.zerochan
${global.emojipick}.liriklagu
${global.emojipick}.caribuku
${global.emojipick}.playstore
${global.emojipick}.wikimedia
${global.emojipick}.ffw
${global.emojipick}.spotify
${global.emojipick}.yahooimg
${global.emojipick}.cuaca
${global.emojipick}.kuronime
${global.emojipick}.myanimelist
${global.emojipick}.animexin
${global.emojipick}.resepsearch
${global.emojipick}.jkt48news
${global.emojipick}.alkitab
${global.emojipick}.jadwaltv
${global.emojipick}.hentais
${global.emojipick}.waifu
${global.emojipick}.apksearch
${global.emojipick}.searchduoyin
${global.emojipick}.waktudunia
${global.emojipick}.vivadetail
${global.emojipick}.jadwalbola
${global.emojipick}.douyinsearch
${global.emojipick}.spotify-search
${global.emojipick}.google-search
${global.emojipick}.movie-search
${global.emojipick}.sticker-search
${global.emojipick}.komiku-search
${global.emojipick}.soundcloud-search
${global.emojipick}.soundcloud-play
${global.emojipick}.samehadakusearch
${global.emojipick}.nontonanime-search
${global.emojipick}.nontonanime-upcoming
${global.emojipick}.nontonanime-latest
${global.emojipick}.mediafiresearch
${global.emojipickxx}`

global.ephotomenu = `
┌── •「 *ᴇᴘʜᴏᴛᴏ 📸* 」
${global.emojipick}.cecankorea
${global.emojipick}.glitchtext
${global.emojipick}.writetext
${global.emojipick}.advancedglow
${global.emojipick}.typographytext
${global.emojipick}.pixelglitch
${global.emojipick}.neonglitch
${global.emojipick}.flagtext
${global.emojipick}.flag3dtext
${global.emojipick}.deletingtext
${global.emojipick}.blackpinkstyle
${global.emojipick}.glowingtext
${global.emojipick}.underwatertext
${global.emojipick}.logomaker
${global.emojipick}.cartoonstyle
${global.emojipick}.papercutstyle
${global.emojipick}.watercolortext
${global.emojipick}.effectclouds
${global.emojipick}.blackpinklogo
${global.emojipick}.gradienttext
${global.emojipick}.summerbeach
${global.emojipick}.luxurygold
${global.emojipick}.multicoloredneon
${global.emojipick}.sandsummer
${global.emojipick}.galaxywallpaper
${global.emojipick}.1917style
${global.emojipick}.makingneon
${global.emojipick}.royaltext
${global.emojipick}.freecreate
${global.emojipick}.galaxystyle
${global.emojipick}.lighteffects
${global.emojipickxx}`

global.primbonmenu = `
┌── •「 *ᴘʀɪᴍʙᴏɴ ✉️* 」
${global.emojipick}.artimimpi
${global.emojipick}.artinama
${global.emojipick}.ramaljodoh
${global.emojipick}.ramaljodohbali
${global.emojipick}.suamiistri
${global.emojipick}.ramalcinta
${global.emojipick}.cocoknama
${global.emojipick}.pasangan
${global.emojipick}.jadiannikah
${global.emojipick}.sifatusaha
${global.emojipick}.rezeki
${global.emojipick}.pekerjaan
${global.emojipick}.nasib
${global.emojipick}.penyakit
${global.emojipick}.tarot
${global.emojipick}.fengshui
${global.emojipick}.haribaik
${global.emojipick}.harisangar
${global.emojipick}.harisial
${global.emojipick}.nagahari
${global.emojipick}.arahrezeki
${global.emojipick}.peruntungan
${global.emojipick}.weton
${global.emojipick}.karakter
${global.emojipick}.keberuntungan
${global.emojipick}.memancing
${global.emojipick}.masasubur
${global.emojipick}.cekumur
${global.emojipick}.zodiak
${global.emojipick}.shio
${global.emojipickxx}`

global.randommenu = `
┌── •「 *ʀᴀɴᴅᴏᴍ 🖇* 」
${global.emojipick}.faktaunik
${global.emojipick}.quotesbucin
${global.emojipick}.quotesjawa
${global.emojipick}.quotesanime
${global.emojipick}.quotes
${global.emojipick}.darkjokes
${global.emojipick}.meme
${global.emojipick}.kataanime
${global.emojipick}.neko
${global.emojipick}.shinobu
${global.emojipick}.hubble
${global.emojipick}.hijab
${global.emojipick}.indo
${global.emojipick}.japanese
${global.emojipick}.korean
${global.emojipick}.malay
${global.emojipick}.randomgirl
${global.emojipick}.randomboy
${global.emojipick}.thai
${global.emojipick}.vietnamese
${global.emojipick}.aesthetic
${global.emojipick}.chinese
${global.emojipick}.pubg
${global.emojipick}.antiwork
${global.emojipick}.blackpink2
${global.emojipick}.cosplay
${global.emojipick}.cat
${global.emojipick}.doggo
${global.emojipick}.justina
${global.emojipick}.kayes
${global.emojipick}.bike
${global.emojipick}.boneka
${global.emojipick}.kpop
${global.emojipick}.notnot
${global.emojipick}.car
${global.emojipick}.rose
${global.emojipick}.ryujin
${global.emojipick}.ulzangboy
${global.emojipick}.ulzanggirl
${global.emojipick}.mobilelegend
${global.emojipick}.animequote
${global.emojipickxx}`

global.groupmenu = `
┌── •「 *GROUP* 」
${global.emojipick}.acc
${global.emojipick}.add
${global.emojipick}.kick
${global.emojipick}.tolakacc
${global.emojipick}.linkgc
${global.emojipick}.hidetag
${global.emojipick}.afk
${global.emojipick}.opentime
${global.emojipick}.closetime
${global.emojipick}.gc
${global.emojipick}.absen
${global.emojipick}.listabsen
${global.emojipick}.tagall
${global.emojipick}.delete
${global.emojipick}.editsubjek
${global.emojipick}.editdesk
${global.emojipick}.editinfo
${global.emojipick}.promote
${global.emojipick}.demote
${global.emojipick}.addbadwords
${global.emojipick}.delbadwords
${global.emojipick}.addlist
${global.emojipick}.dellist
${global.emojipick}.updatelist
${global.emojipick}.list
${global.emojipick}.getpp
${global.emojipick}.getppgc
${global.emojipick}.tagme
${global.emojipick}.warn
${global.emojipick}.delwarn
${global.emojipick}.reswarn
${global.emojipick}.setwarn
${global.emojipick}.warninfo
${global.emojipick}.cekasalmember
${global.emojipick}.spamtag
${global.emojipick}.stopspam
${global.emojipick}.totalchat
${global.emojipick}.totalpesan
${global.emojipick}.antilink
${global.emojipick}.kickall
${global.emojipick}.addallback
${global.emojipick}.kicklog
${global.emojipick}.clearkicklog
${global.emojipick}.welcome on/off
${global.emojipick}.left on/off
${global.emojipick}.setwelcome
${global.emojipick}.setleft
${global.emojipick}.onlyadmin
${global.emojipickxx}`

global.ownermenu = `
┌── •「 OWNER TOOLS 」
${global.emojipick}.setbot
${global.emojipick}.uptesti
${global.emojipick}.restart
${global.emojipick}.shutdown

MANAGE USERS & ACCESS
${global.emojipick}.banuser
${global.emojipick}.unbanuser
${global.emojipick}.listbanuser
${global.emojipick}.addprem
${global.emojipick}.delprem
${global.emojipick}.listprem
${global.emojipick}.addowner
${global.emojipick}.delowner

PLUGIN CONTROL
${global.emojipick}.addplugins
${global.emojipick}.editplugins
${global.emojipick}.delplugins
${global.emojipick}.getplugins
${global.emojipick}.sendplug

FILE & CASE MANAGER
${global.emojipick}.addfile
${global.emojipick}.delfile
${global.emojipick}.addfolder
${global.emojipick}.delfolder
${global.emojipick}.addcase
${global.emojipick}.editcase
${global.emojipick}.delcase
${global.emojipick}.listcase
${global.emojipick}.sendfitur

CONTROL SESI & BIOMETRIK
${global.emojipick}.getsession
${global.emojipick}.delsession
${global.emojipick}.autobio
${global.emojipick}.autoread
${global.emojipick}.autotyping
${global.emojipick}.autorecord

SETTING & CONFIG
${global.emojipick}.setprefix
${global.emojipick}.setimgmenu
${global.emojipick}.setppbot
${global.emojipick}.setpppanjang
${global.emojipick}.onlygc
${global.emojipick}.anticall
${global.emojipick}.groupattack
${global.emojipick}.kickall
${global.emojipick}.altag

UPDATE & LOGS
${global.emojipick}.addchangelog
${global.emojipick}.delchangelog
${global.emojipick}.changelog
${global.emojipick}.upch-audio
${global.emojipick}.upsw

PANEL & FUNCTION
${global.emojipick}.addfunction
${global.emojipick}.delfunction
${global.emojipick}.getfunction
${global.emojipick}.kudetpanel

CURL & SCRAPE
${global.emojipick}.addscrape
${global.emojipick}.dellscrape
${global.emojipick}.getscrape

LIMIT & RESTORE
${global.emojipick}.addlimit
${global.emojipick}.dellimit
${global.emojipick}.resetlimit

SEWA MANAGER
${global.emojipick}.addpsewa
${global.emojipick}.delsewa
${global.emojipick}.listsewa
${global.emojipick}.bangroup
${global.emojipick}.out
${global.emojipickxx}`

global.gamemenu = `
┌── •「 GAME 」
${global.emojipick}.dadu
${global.emojipick}.judibola
${global.emojipick}.werewolf
${global.emojipick}.listhadiah
${global.emojipick}.buathadiah
${global.emojipick}.redeemcode
${global.emojipick}.suitbot
${global.emojipick}.patroli
${global.emojipick}.tebakld
${global.emojipick}.gaple

— UNO GAME
${global.emojipick}.uno
${global.emojipick}.uno info
${global.emojipick}.uno join
${global.emojipick}.uno start
${global.emojipick}.uno stop
${global.emojipick}.uno hand
${global.emojipick}.uno card
${global.emojipick}.uno play
${global.emojipick}.uno pass
${global.emojipick}.uno color

— CRYPTO
${global.emojipick}.crypto price
${global.emojipick}.crypto buy
${global.emojipick}.crypto sell
${global.emojipick}.crypto portfolio
${global.emojipick}.crypto alert
${global.emojipick}.crypto watchlist
${global.emojipick}.crypto watchadd
${global.emojipick}.crypto watchdel

— CLAN GAME
${global.emojipick}.clan create
${global.emojipick}.clan join
${global.emojipick}.clan approve
${global.emojipick}.clan war
${global.emojipick}.clan list
${global.emojipick}.clan leave
${global.emojipick}.clan delete
${global.emojipick}.clan member
${global.emojipick}.clan missions
${global.emojipick}.clan task
${global.emojipick}.clan upgrade
${global.emojipick}.clan tournament

— CATUR GAME
${global.emojipick}.catur@tag
${global.emojipick}.caturstatus
${global.emojipick}.caturskip
${global.emojipick}.caturdraw
${global.emojipick}.caturmenyerah
${global.emojipick}.caturhapus
${global.emojipick}.caturnilai
${global.emojipick}.caturrank
${global.emojipick}.caturtop10
${global.emojipick}.caturskorreset
${global.emojipick}.caturnext
${global.emojipick}.caturboard
${global.emojipick}.caturhistory
${global.emojipick}.caturanalisa
${global.emojipick}.caturtimer
${global.emojipick}.caturnotif
${global.emojipick}.caturhelp

— GENSHIN GAME
${global.emojipick}.gens-characters
${global.emojipick}.gens-advrank
${global.emojipick}.gens-animals
${global.emojipick}.gens-area
${global.emojipick}.gens-giartifact
${global.emojipick}.gens-giconstellation
${global.emojipick}.gens-craft
${global.emojipick}.gens-domain
${global.emojipick}.gens-emoji
${global.emojipick}.gens-enemy
${global.emojipick}.gens-food
${global.emojipick}.gens-materials
${global.emojipick}.gens-namacard
${global.emojipick}.gens-nation
${global.emojipick}.gens-outfit
${global.emojipick}.gens-potion
${global.emojipick}.gens-talents
${global.emojipick}.gens-viewpoint
${global.emojipick}.gens-voiceovers
${global.emojipick}.gens-weapons
${global.emojipick}.gens-wildlife

— TEBAK GAME
${global.emojipick}.tebak lagu
${global.emojipick}.tebak film
${global.emojipick}.tebak anime
${global.emojipick}.tebak karakter
${global.emojipick}.tebak bendera
${global.emojipick}.tebak kota
${global.emojipick}.tebak negara
${global.emojipick}.tebak logo
${global.emojipick}.tebak hewan
${global.emojipick}.tebak suara
${global.emojipick}.tebak tokoh
${global.emojipick}.tebak makanan
${global.emojipick}.tebak game
${global.emojipick}.tebak ayat
${global.emojipick}.tebak emoji
${global.emojipick}.tebak kata
${global.emojipick}.tebak artis

— KOBOY
${global.emojipick}.koboy help
${global.emojipick}.koboy helprole
${global.emojipick}.koboy daftar
${global.emojipick}.koboy status
${global.emojipick}.koboy kerja
${global.emojipick}.koboy tembak @
${global.emojipick}.koboy beli [item]
${global.emojipick}.koboy jual [item]
${global.emojipick}.koboy skill
${global.emojipick}.koboy wanted
${global.emojipick}.koboy top
${global.emojipick}.koboy level
${global.emojipick}.koboy leveltop
${global.emojipick}.koboy topkoboy
${global.emojipick}.koboy peran
${global.emojipick}.koboy tangkap @
${global.emojipick}.koboy lepas @
${global.emojipick}.koboy hukum @
${global.emojipick}.koboy misi
${global.emojipick}.koboy kirim [item] @
${global.emojipick}.koboy rank
${global.emojipick}.koboy kota
${global.emojipick}.koboy kota bank
${global.emojipick}.koboy kota saloon
${global.emojipick}.koboy kota toko
${global.emojipick}.koboy kota penjara
${global.emojipick}.koboy kota sheriff
${global.emojipick}.koboy setor [jumlah]
${global.emojipick}.koboy tarik [jumlah]
${global.emojipick}.koboy cekstok
${global.emojipick}.koboy rampok @
${global.emojipick}.koboy equip [item]
${global.emojipick}.koboy daily
${global.emojipick}.koboy minum
${global.emojipick}.koboy kerja_berani
${global.emojipick}.koboy invest [jumlah]
${global.emojipick}.koboy cair
${global.emojipick}.koboy tebak [1-5]
${global.emojipickxx}`

global.rpgmenu = `
┌── •「 *ʀᴘɢ ᴍᴇɴᴜ ᴀʟɪᴄᴇ ⚔️* 」

— Ekonomi & Resource
${global.emojipick}.work        → Bekerja, dapat coin/exp
${global.emojipick}.daily       → Klaim hadiah harian
${global.emojipick}.quest       → Misi harian (kumpulkan item)
${global.emojipick}.hunt        → Berburu, dapat drop + exp
${global.emojipick}.huntwild    → Berburu hewan liar
${global.emojipick}.fish        → Memancing
${global.emojipick}.forage      → Cari tanaman/herba
${global.emojipick}.farm        → Bertani
${global.emojipick}.mine        → Menambang
${global.emojipick}.cook        → Masak makanan
${global.emojipick}.cookbook    → Lihat resep masakan
${global.emojipick}.craft       → Craft armor (tulang+kulit)
${global.emojipick}.alchemy     → Buat ramuan dari bahan

— Market & Trade
${global.emojipick}.shop        → Toko utama
${global.emojipick}.buy         → Beli item (nama item)
${global.emojipick}.sell        → Jual item ke sistem
${global.emojipick}.market      → Jual/beli di pasar
${global.emojipick}.trade       → Kirim item/coin ke player (reply)
${global.emojipick}.exchange    → Tukar item jadi coin
${global.emojipick}.recycle     → Hancurkan item jadi fragmen

— Inventory & Equipment
${global.emojipick}.inv         → Lihat inventory
${global.emojipick}.storage     → Simpan item ke gudang
${global.emojipick}.stash       → Ambil item dari gudang
${global.emojipick}.stashall    → Pindahkan semua ke gudang
${global.emojipick}.equip       → Pakai senjata/armor
${global.emojipick}.unequip     → Lepas senjata/armor
${global.emojipick}.upgrade     → Upgrade equip (butuh coin)
${global.emojipick}.itemuse     → Pakai item (contoh: ramuan)
${global.emojipick}.dailybox    → Ambil kotak harian
${global.emojipick}.treasure    → Buka peti (butuh kunci di inv)
${global.emojipick}.codex       → Info item dasar
${global.emojipick}.codexitem   → Info item tambahan

— Ekonomi & Bank System
${global.emojipick}.bank        → Menu bank (cek, simpan, tarik, transfer, pinjam, bayar, bunga, rampok, polis, log)
${global.emojipick}.atmall      → Lihat top saldo bank (leaderboard)
${global.emojipick}.gbank       → Bank guild (saldo, setor, tarik)
${global.emojipick}.deposit     → Deposit berjangka (buat, cek, cair, batal)
${global.emojipick}.escrow      → Escrow / titipan aman (buat, cek, konfirmasi, batal)

— Battle, Skill & Effect
${global.emojipick}.duel        → Tantang duel (reply/@)
${global.emojipick}.arena       → Info arena PvP
${global.emojipick}.boss        → Lawan boss instan
${global.emojipick}.bossfight   → Boss global (HP bersama)
${global.emojipick}.huntboss    → Boss besar (HP besar)
${global.emojipick}.dragonraid  → Raid naga (HP global)
${global.emojipick}.combo       → Serangan combo (ikut class)
${global.emojipick}.skill       → Lihat/pakai skill (dengan target)
${global.emojipick}.learnskill  → Belajar skill tersedia
${global.emojipick}.skilltree   → Lihat jalur upgrade skill
${global.emojipick}.element     → Pilih elemen (sekali)
${global.emojipick}.elementatk  → Serangan elemen (reply target)
${global.emojipick}.mutate      → Gacha ubah skill
${global.emojipick}.spirit      → Panggil roh (buff sementara)
${global.emojipick}.roleplay    → Aksi RP (teks bebas)
${global.emojipick}.aim         → Serang target cepat (reply)
${global.emojipick}.bet         → Taruhan coin
${global.emojipick}.spy         → Intai target (reply)
${global.emojipick}.scout       → Lacak lokasi musuh (reply)
${global.emojipick}.trap        → Pasang jebakan
${global.emojipick}.trapwild    → Jebakan hewan liar
${global.emojipick}.curse       → Kutuk target (reply)
${global.emojipick}.ward        → Pasang pelindung lokasi
${global.emojipick}.debuff      → Beri efek negatif (reply)
${global.emojipick}.buff        → Tambah status diri
${global.emojipick}.bless       → Berkah acak
${global.emojipick}.blessnpc    → Berkah dari NPC

— Status, Class & Meta Progress
${global.emojipick}.level       → Level, exp, job, skill
${global.emojipick}.stat        → ATK/DEF/SPD ringkas
${global.emojipick}.profilerpg  → Profil lengkap
${global.emojipick}.class       → Pilih class (knight/mage/archer)
${global.emojipick}.jobchange   → Reset class (lvl 10+)
${global.emojipick}.talent      → Talent sesuai class
${global.emojipick}.passive     → Lihat skill pasif
${global.emojipick}.rpgtop      → Top 10 coin
${global.emojipick}.bounty      → Pasang buronan
${global.emojipick}.medal       → Lihat medali
${global.emojipick}.prestige    → Reset level (lvl 50+)
${global.emojipick}.reincarnate → Reset total (lvl 30+)

— Quest, Story & World
${global.emojipick}.storyquest  → Lanjut cerita (nextquest)
${global.emojipick}.questmap    → Peta quest dunia
${global.emojipick}.claimquest  → Klaim hadiah quest
${global.emojipick}.narrator    → Hint narator
${global.emojipick}.lore        → Lore dunia
${global.emojipick}.rumor       → Rumor dunia
${global.emojipick}.riddle      → Teka-teki
${global.emojipick}.puzzle      → Puzzle
${global.emojipick}.map         → Peta dunia
${global.emojipick}.travel      → Pindah lokasi
${global.emojipick}.whereami    → Cek lokasi
${global.emojipick}.worldevent  → Event global acak
${global.emojipick}.season      → Musim saat ini
${global.emojipick}.weather     → Cuaca saat ini
${global.emojipick}.zombieevent → Semua -HP (event)
${global.emojipick}.invasion    → Mulai invasi
${global.emojipick}.finaltrial  → Ujian akhir (lvl 99)

— Sosial, Kingdom & Misc
${global.emojipick}.party       → Kelola party (reply ajak)
${global.emojipick}.guild       → Buat/join guild
${global.emojipick}.build       → Bangun markas
${global.emojipick}.defend      → Perkuat markas (DEF)
${global.emojipick}.fortify     → Tambah DEF markas
${global.emojipick}.kingdom     → Buat kerajaan
${global.emojipick}.savepoint   → Simpan progres
${global.emojipick}.mailbox     → Kotak surat
${global.emojipick}.mount       → Naik kuda
${global.emojipick}.mountfeed   → Kasih makan mount
${global.emojipick}.summon      → Panggil golem
${global.emojipick}.death       → Tewaskan diri
${global.emojipick}.revive      → Hidup kembali (200 coin)
${global.emojipick}.loot        → Ambil loot (reply target mati)
${global.emojipick}.npc         → Bicara dengan NPC
${global.emojipick}.darkmode    → Mode gelap (efek malam)
${global.emojipickxx}`

global.allmenu = `${global.cpanelmenu}\n
${global.animemenu}\n
${global.pushmenu}\n
${global.beritamenu}\n
${global.audiomenu}\n
${global.anonymousmenu}\n
${global.storemenu}\n
${global.mainmenu}\n
${global.aimenu}\n
${global.convertmenu}\n
${global.toolsmenu}\n
${global.islamimenu}\n
${global.downloadermenu}\n
${global.premiummenu}\n
${global.searchmenu}\n
${global.ephotomenu}\n
${global.primbonmenu}\n
${global.randommenu}\n
${global.groupmenu}\n
${global.ownermenu}\n
${global.gamemenu}\n
${global.rpgmenu}`


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})