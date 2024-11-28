/*
██╗    ██╗██╗ ██████╗██╗  ██╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
██║    ██║██║██╔════╝██║ ██╔╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
██║ █╗ ██║██║██║     █████╔╝     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
██║███╗██║██║██║     ██╔═██╗     ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
╚███╔███╔╝██║╚██████╗██║  ██╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
 ╚══╝╚══╝ ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
Copyright (c) 2024 Wick Studio
*/

module.exports = {    
    token: "MTMxMTU5NjY5NzYyMDg0MDUxOA.GhnIBl.dyx0j4mmfOx4XpNnYepqpKourLzPbu5kFjNIh4", // token
    clientId: "1311596697620840518", // bot id
    prefix: "!p", // prefix
    language: "ar", // ar for arabic | en for english
    verbose: true,
    musicCardPath: "./musicard.png",
    enableLogging: true,
    djRoleName: "Wick",
    aliases: {
      play: ["p", "start", "playmusic"],
      pause: ["hold", "stopmusic"],
      resume: ["r", "continue"],
      skip: ["s", "next", "jump"],
      stop: ["end", "terminate"],
      volumeUp: ["vup", "increasevolume"],
      volumeDown: ["vdown", "decreasevolume"],
      repeat: ["loop"],
      queue: ["q"],
      nowplaying: ["np"],
      clear: ["c"],
      remove: ["rm", "delete"]
  }
};
