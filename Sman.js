module.exports = {
 config: {
 name: "Sman",
 version: "1.0",
 author: "Priyansh Rajput",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body.indexOf("Suleiman")==0 || event.body.indexOf("@Kolawole Suleiman")==0 || event.body.indexOf("Suleiman")==0) {
 return message.reply({
 body: "PLEASE DON'T DISTURB 🥺",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/9979yXA.gif")
 });
 }
 }
}
