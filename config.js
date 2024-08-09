//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09TRHpCWXJZTEZJOTh1c2dIM3ZVZlQyak5KbTB4ekM1bm1TWEx6Y0ttaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmxueEQwc0YwVjlQVjVWdXZGM0YydDdIbkZ1MDlYMmJTK2oxZytSMW1IOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSjlTMDRvdHdjTlhFbWR0am5saWhBQnkwUXVleVJIbkg1ZFFBa2FxSDM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1cGt4OFV1SENXZTh0bUEvTkxtZStObi9INkhzNzYvUjJnTXAvZW9reTNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIWGNmQkQweVdGY1cxeVQxcTFGTS9hWlRJbjJVRFZnMzhETFNLRjdkRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVyL1BiZnZIMVcxTHh6RTl4UW5nTE9JREoxZWtSTk42c090cDRxZWxuRWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05UaGV1T2tzUTFQVmowMEozcVBvTko1WjlEM0dzVlEzSGh4amJIMGpYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialpSTjRBWjF3OGo5SDJNRWJoRmZhMDNnak1UNWp2YU02Y2wxSk54b3FWTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imwxei9xU2lDSU94bEpPcmR3SXZkVWRlREJXNWdQdy9xY3JWRnVaNW5ueGNrZHJLdEhMYmJSZWhuSjZZTTQxT1VkYXB3SzFnMTJ3YUJ6MU9GYnhrY2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6Ik5pNWpKcDVGUnA1WkZjaUhnUlYxQWdmd2Y4TldUaFBaWmpBeU16dnpWQms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNjU3MjU1NjkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBFRURDMDBDNjc0OTBGMzExMTkyNDA3RUNDNzU3NjYzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI5ODc1OTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkJKbWI2dFQ3UnhTSWgyY1BmVDZuNmciLCJwaG9uZUlkIjoiMmNjNWExMjQtYWY3NS00NTk5LWJjMDEtOTljY2U4OWY3MTc5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE2eXB2NzdIVHMrcXBSZUhnMWt3Z2tuYkRyST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuK2VLWitsNk81TjlNM2c5THBGYnNHcUJrOGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWFJHNVdCRVEiLCJtZSI6eyJpZCI6IjIxMjY1NzI1NTY5MToxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJkYW5zIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQRy9sSThIRUxmb3lyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5NTFYNHZvZ25FaGRST2svMDZ5UmdEWm9ydGltbFZHZm1CWlNtS1BNR1VBPSIsImFjY291bnRTaWduYXR1cmUiOiJ3RldLK0xpdm80MndpcE82VEZydVM2MnoweCtMYnZWcFlDdzFUaGVoRTZ6eTVBVTZpWnFoeTVVaW1HRHY3QWJVVUt4MG0yejJ4ZUN6dkFra3VRTFJDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVytKbkVMWUdocTNud0FFYlNTK3VJbEdtbXBFRFJXVkk5Z0RoSk9DZE5pdGVON1lVY1ArUGlwamIwMGNxNVBEZkU3TUFNN0RLcTUzeTUycXdrbmpKamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMTI2NTcyNTU2OTE6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3VkVitMNklKeElYVVRwUDlPc2tZQTJhSzdZcHBWUm41Z1dVcGlqekJsQSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjk4NzU4OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIbWgifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
