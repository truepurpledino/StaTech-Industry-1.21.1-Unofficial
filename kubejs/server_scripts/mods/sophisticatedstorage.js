// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------
ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:sophisticatedstorage${id}`;
    let ss = (id) => `sophisticatedstorage:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    
 
    // Adapted from Monifactory scripts, see https://github.com/ThePansmith/Monifactory/blob/main/kubejs/server_scripts/mods/Sophisticated_Storage.js

    // Remove Limited barrels
    e.remove({ id: /^sophisticatedstorage:.*limited.+barrel.+$/ })
    e.remove({ output: /^sophisticatedstorage:limited_barrel.+$/ })
})


