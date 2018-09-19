{
  "name": "setlogchannel",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "XNhEY",
  "actions": [
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "info": "4",
      "infoIndex": "1",
      "storage": "2",
      "varName": "modlogs-channel",
      "name": "Store Command Params"
    },
    {
      "member": "1",
      "varName": "",
      "permission": "ADMINISTRATOR",
      "iftrue": "3",
      "iftrueVal": "4",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Member Permissions"
    },
    {
      "title": "",
      "author": "",
      "color": "#36393F",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "error",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "error",
      "message": ":x: You are not authorized!\nLacking permission: `ADMINISTRATOR`\n\nIf you think this is an error, contact an owner.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "error",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "condition": "2",
      "comparison": "0",
      "value": "1",
      "iftrue": "3",
      "iftrueVal": "4",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "title": "",
      "author": "",
      "color": "#36393F",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "error2",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "error2",
      "message": ":x: You must mention a channel!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "error2",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "2",
      "varName": "modlogs-channel",
      "name": "Save Variable"
    },
    {
      "title": "Setting the logs channel...",
      "author": "",
      "color": "#36393F",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "http://i.imgur.com/3XWjbRV.gif",
      "storage": "1",
      "varName": "swc",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "swc",
      "channel": "0",
      "varName2": "",
      "varName3": "delete",
      "storage3": "1",
      "name": "Send Embed Message MOD"
    },
    {
      "time": "3",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "delete",
      "name": "Delete Message"
    },
    {
      "title": "Sucessfully Changed",
      "author": "",
      "color": "RED",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "https://cdn.discordapp.com/emojis/482184108555108358.png?v=1",
      "storage": "1",
      "varName": "cs",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "cs",
      "message": "Everything related to logswill be posted in ${serverVars(\"mlchannel\")} from now on.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "cs",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "2",
      "varName": "modlogs-channel",
      "name": "Save Variable"
    },
    {
      "server": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "ServerName",
      "name": "Store Server Info"
    }
  ],
  "comType": "0"
}