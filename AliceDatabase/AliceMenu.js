//————————————————————————//

/*

Alice Asistent
© XyrooRynzz
2022

Source
WhatsApp Me : 6281543496975
Tele me : t.me/XyrooRynzz
instagram : xyroorynzz
https://chat.whatsapp.com/IJx5bkPvivUCeai7d2ChRC
https://whatsapp.com/channel/0029VamvtL2ADTO7ikBeNe1E

*/

//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
const fs = require('fs')
const { color } = require('./funcalice')
        
global.cpanelmenu = `
┌── •「 *ᴍᴇɴᴜ ᴄᴘᴀɴᴇʟ* 」
${global.emojipick}.cpanel
${global.emojipick}.delpanel
${global.emojipick}.listusr
${global.emojipick}.listsrv
${global.emojipickxx}`

global.animemenu = `
┌── •「 *ᴍᴇɴᴜ ᴀɴɪᴍᴇ* 」
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
${global.emojipick}.Rvo
${global.emojipick}.Req
${global.emojipick}.Report
${global.emojipick}.Jarak
${global.emojipick}.Ping
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
${global.emojipickx}.kalkulator
${global.emojipick}.nulis
${global.emojipick}.nulis2
${global.emojipick}.get
${global.emojipick}.gtts2
${global.emojipick}.tts2
${global.emojipick}.gethtml
${global.emojipick}.phlogo
${global.emojipick}.translate
${global.emojipick}.resize
${global.emojipick}.hytamkan
${global.emojipick}.html
${global.emojipick}.javascript
${global.emojipick}.python
${global.emojipick}.tocode
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
${global.emojipick}.getpastebin
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
${global.emojipick}.duoyindl
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
${global.emojipick}.toreal
${global.emojipick}.toanime
${global.emojipick}.animediff
${global.emojipick}.dalle3
${global.emojipick}.img2video
${global.emojipick}.telegramstalk
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
${global.emojipickxx}`

global.ephotomenu = `
┌── •「 *ᴇᴘʜᴏᴛᴏ 📸* 」
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
${global.emojipickxx}`

global.groupmenu = `
┌── •「 *GROUP* 」
${global.emojipick}.acc
${global.emojipick}.add
${global.emojipick}.kick
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
${global.emojipick}.alicegroup
${global.emojipick}.kickall
${global.emojipick}.addallback
${global.emojipick}.kicklog
${global.emojipick}.clearkicklog
${global.emojipick}.setwelcome
${global.emojipick}.setleft
${global.emojipickxx}`

global.ownermenu = `
┌── •「 OWNER TOOLS 」
${global.emojipick}.alice
${global.emojipick}.uptesti
${global.emojipick}.fix
${global.emojipick}.listerror
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
${global.emojipick}work
${global.emojipick}daily
${global.emojipick}weekly
${global.emojipick}monthly
${global.emojipick}coin
${global.emojipick}goldbar
${global.emojipick}bank
${global.emojipick}deposit
${global.emojipick}withdraw
${global.emojipick}vault
${global.emojipick}limit
${global.emojipick}slot
${global.emojipick}shop
${global.emojipick}buy
${global.emojipick}sell
${global.emojipick}bid
${global.emojipick}auction
${global.emojipick}claimlelang
${global.emojipick}tax
${global.emojipick}inv
${global.emojipick}equip
${global.emojipick}unequip
${global.emojipick}equipment
${global.emojipick}storage
${global.emojipick}bag
${global.emojipick}upgrade
${global.emojipick}repair
${global.emojipick}dismantle
${global.emojipick}fuse
${global.emojipick}rarity
${global.emojipick}duel
${global.emojipick}accept
${global.emojipick}forfeit
${global.emojipick}battle
${global.emojipick}boss
${global.emojipick}raid
${global.emojipick}fight
${global.emojipick}skillatk
${global.emojipick}itematk
${global.emojipick}escape
${global.emojipick}revive
${global.emojipick}level
${global.emojipick}exp
${global.emojipick}profile
${global.emojipick}job
${global.emojipick}skill
${global.emojipick}learn
${global.emojipick}useskill
${global.emojipick}reskill
${global.emojipick}prestige
${global.emojipick}class
${global.emojipick}power
${global.emojipick}quest
${global.emojipick}claimquest
${global.emojipick}story
${global.emojipick}chapter
${global.emojipick}cutscene
${global.emojipick}rumor
${global.emojipick}lore
${global.emojipick}storyquest
${global.emojipick}narrator
${global.emojipick}mine
${global.emojipick}dig
${global.emojipick}farm
${global.emojipick}cook
${global.emojipick}alchemy
${global.emojipick}combine
${global.emojipick}recipe
${global.emojipick}forge
${global.emojipick}brew
${global.emojipick}enchant
${global.emojipick}extract
${global.emojipick}openbox
${global.emojipick}chest
${global.emojipick}key
${global.emojipick}fragment
${global.emojipick}shard
${global.emojipick}rune
${global.emojipick}trade
${global.emojipick}offer
${global.emojipick}accepttrade
${global.emojipick}canceltrade
${global.emojipick}gift
${global.emojipick}donate
${global.emojipick}market
${global.emojipick}price
${global.emojipick}ranking
${global.emojipick}reputasi
${global.emojipick}karma
${global.emojipick}wanted
${global.emojipick}bounty
${global.emojipick}fame
${global.emojipick}title
${global.emojipick}prestigelevel
${global.emojipick}world
${global.emojipick}travel
${global.emojipick}event
${global.emojipick}worldboss
${global.emojipick}dungeon
${global.emojipick}explore
${global.emojipick}treasure
${global.emojipick}portal
${global.emojipick}relic
${global.emojipick}pet
${global.emojipick}summon
${global.emojipick}partner
${global.emojipick}mount
${global.emojipick}essence
${global.emojipick}achievement
${global.emojipick}questboard
${global.emojipick}timetravel
${global.emojipick}reincarnate
${global.emojipick}distortion
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