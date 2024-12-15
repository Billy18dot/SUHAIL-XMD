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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.imgur.com/4Js8Iki.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Mr-JONES" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263781526148";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27781242411";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || "3"  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_15_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDQzLFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDksXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3LFxuICAgICAgICA0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NixcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDQxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4ei96WHNjbExuZkx5VUdNb295U3dic2l0VlpoSERjVkpEaFg5R1p1Z0lvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwY2pJTUtSbFQtQ1hkVHNaS2t3LTdRXCIsXG4gIFwicGhvbmVJZFwiOiBcImFmNjU1N2YwLThlNjEtNDE0Ny1iNTIzLTY0YTUyZjllYWNhMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAxODAsXG4gICAgICAyMDcsXG4gICAgICAyMjcsXG4gICAgICAxNDQsXG4gICAgICAxNTUsXG4gICAgICA4OCxcbiAgICAgIDE5MSxcbiAgICAgIDU2LFxuICAgICAgMjUsXG4gICAgICAxNjgsXG4gICAgICA4NyxcbiAgICAgIDY2LFxuICAgICAgMTg2LFxuICAgICAgNSxcbiAgICAgIDk3LFxuICAgICAgODgsXG4gICAgICAyMTMsXG4gICAgICA5MSxcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxNTYsXG4gICAgICAxODYsXG4gICAgICAyMjcsXG4gICAgICAxNjgsXG4gICAgICA5NixcbiAgICAgIDIxMixcbiAgICAgIDE4MixcbiAgICAgIDIzNyxcbiAgICAgIDE3OSxcbiAgICAgIDE0MyxcbiAgICAgIDIxNyxcbiAgICAgIDE1OCxcbiAgICAgIDcxLFxuICAgICAgMTYyLFxuICAgICAgMTc4LFxuICAgICAgNjAsXG4gICAgICAxMDksXG4gICAgICAyNDgsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlZDUEY1U1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4MTUyNjE0ODo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkZvcsOqaWduw6pyXCIsXG4gICAgXCJsaWRcIjogXCIyMDQxOTE2ODc1MTIxODE6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTERVckNnUWlZSDh1Z1lZRENBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUc09NdVVQakttbzd4V0VHV2xLcVgxVmRYdWJXOHp6VWVqcm4rcHovS2c0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFYOTZiV01nMlg1RmhpUWtDSm13Vnp6WHZKUkoxdDhPVHlqSkRUZ1JZS0RpY3BRUHM3QmNZaTRTM01DK0ZWdFFpRHdTSWhBVnN2UWViRkFnbEgyaENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInYvQmhaNE5aQzBYc0pKTHBjdGk5SmFtekFTU3NIVG9FUzFyQjJYRXJUV1pNQ1d2THdOWGF4U1ZqZkQ1RGdacmtIaTF0cHJqY2FVTW82V1VkNks1S0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4MTUyNjE0ODo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQyNzkzMTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUk1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZSTS5qc29uIjogIntcImtleURhdGFcIjpcInhzWU1OcUdYQmVWZnJoVi96RTNXaEk3YXNCOUU5cXAzdTI0UThiME94VDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQ2MTc3NzYsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "®",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "thanks to Mr-Jones" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "mrjones",
  packname: process.env.PACK_NAME || "forêignêr",
  botname : process.env.BOT_NAME  || "FORÊIGNÊR-MD",
  ownername:process.env.OWNER_NAME|| "Mr-JONES",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
