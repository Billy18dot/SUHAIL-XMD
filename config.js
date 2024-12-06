const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Mr-JONES" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263781526148";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27781242411";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_23_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzLFxuICAgICAgICAzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgODQsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQyLFxuICAgICAgICA1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1LFxuICAgICAgICA2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN1crK2g4VXFweG9QMXUrOXh0bWVDZVpKNXdWT25ZSWdrZE92THl2RW82cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTzhYYjN3Z2NSb2lHalJPVGFTMEg2d1wiLFxuICBcInBob25lSWRcIjogXCJhNTFjNzBkOS1mZmRlLTQ1NzEtYTNiMC01NTBhZDdkZDI4N2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAxNjAsXG4gICAgICAyNDEsXG4gICAgICAyMTYsXG4gICAgICAxNjAsXG4gICAgICA1OCxcbiAgICAgIDE1NSxcbiAgICAgIDYwLFxuICAgICAgMTI5LFxuICAgICAgMTE4LFxuICAgICAgMTM5LFxuICAgICAgOTQsXG4gICAgICAyMyxcbiAgICAgIDI1MixcbiAgICAgIDM3LFxuICAgICAgMTI4LFxuICAgICAgNTcsXG4gICAgICAyNTEsXG4gICAgICAyMzAsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMTUyLFxuICAgICAgOTQsXG4gICAgICAxNSxcbiAgICAgIDExLFxuICAgICAgMjA3LFxuICAgICAgNDAsXG4gICAgICA1MixcbiAgICAgIDIzOCxcbiAgICAgIDM1LFxuICAgICAgMjI0LFxuICAgICAgMTg4LFxuICAgICAgNTIsXG4gICAgICAyMTIsXG4gICAgICAxOSxcbiAgICAgIDU3LFxuICAgICAgMjU0LFxuICAgICAgMTQxLFxuICAgICAgMjA3LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkRHSlJSNDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4MTUyNjE0ODo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkZvcsOqaWduw6pyXCIsXG4gICAgXCJsaWRcIjogXCIyMDQxOTE2ODc1MTIxODE6NzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTERVckNnUXNmWEx1Z1lZQnlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUc09NdVVQakttbzd4V0VHV2xLcVgxVmRYdWJXOHp6VWVqcm4rcHovS2c0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJQU2NOT0llRmFXRldBOTVnZDFaRnRwOFQ2RWpkTkRZQWsyckMxb0RBTWhzRTRmRGw4SGh5NDM0azMwS0FXOW5oKzU3Qlo3WjZQSlBiUTlOVG4wWUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVvVmZHMDZmUEswc2Z3ODFKS3VRUzV3VmUvU3NiczFIUE5tcURRQ3RxYXlOOW00RWxveEg3bm1WeER3UXgzREt5ejVuMGd4K3FHcGM0aGltaGwzcWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4MTUyNjE0ODo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0OTEzODJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "thanks to Mr-Jones" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "mrjones",
  packname: process.env.PACK_NAME || "forêignêr",
  botname : process.env.BOT_NAME  || "FORÊIGNÊR-MD",
  ownername:process.env.OWNER_NAME|| "Mr-JONES",


  errorChat : process.env.ERROR_CHAT || "27781242411",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
