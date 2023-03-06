const fs = require('fs')
const chalk = require('chalk')

// Untuk apikey open ai dapatkan di https://beta.openai.com/account/api-keys
// Bikin 2 apikey!, 1 taruk yang di pertama, 1 nya lagi taruk di bawah nya!!
global.keyopenai = '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'
global.keyopenai2 = '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'

global.Prefix = 'Tod'
global.meki = '6283103824111'
global.ownerNumber = '6283103824111'
global.owner2 = '6283103824111'
global.botname = 'FlixBot' 
global.ownername = 'Shirito'
global.owner = ['6283103824111'] 
global.pemilik = ['6283103824111'] 
global.premium = ['6283103824111'] 
global.packname = 'Subscribe' 
global.author = 'FlixBot' 
global.sessionName = 'session'
global.myemail = 'Flixganz@gmail.com'
global.mygroupwa = '-'
global.myinstagram = '-'
global.prefa = ['#','!','/','']
global.mess = {
    success: '▰▰▰▰▰▰▰ 100% Done!!',
    admin: '🚫 Feature Only Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '🚫 Feature Only Owner Bot !',
    group: '🚫 Feature Only Group!',
    private: '🚫 Feature Only Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '▰▰▰▰▰▱▱ 98% 𝚠𝚊𝚒𝚝!!',
    done: '▰▰▰▰▰▰▰ 100% Done!!',
    endLimit: 'Our limit will be reset for 12 Hours⌛',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: '👋 Welcome @user In Groups @subject Dont forget to read the rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: '👋🏻 Good Bye @user In Group @subject Dont forget to read the rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.donatm = `*── 「 GBUTUH 」 ──* 

 _Kalian Bisa Dukung Bot Lewat Donate Ke :_
 _》Dana : -_
 _》Gopay : -_
 _》Pulsa : - ( not detected )_
  
_Donate Kalian Sangat Berarti._

_Contact person Owner:_
_wa.me/0_`
 
global.sewam = `*── 「 GAAD 」 ──*

_Kalian Bisa Dukung Bot Lewat Donate Ke :_
 _》Dana : -_
 _》Gopay : -_
 _》Pulsa : - ( not detected )_
 
_Donate Kalian Sangat Berarti._

_Contact person Owner:_
_wa.me/0_`

global.fakeimage = fs.readFileSync("./media/fake.jpg")
global.thumb = fs.readFileSync('./media/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
