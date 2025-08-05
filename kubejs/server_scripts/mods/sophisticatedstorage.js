// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------
ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:sophisticatedstorage${id}`;
    
    // Adapted from Monifactory scripts, see https://github.com/ThePansmith/Monifactory/blob/main/kubejs/server_scripts/mods/Sophisticated_Storagevent.js

    // Remove Limited barrels
    event.remove({ id: /^sophisticatedstorage:.*limited.+barrel.+$/ })
    event.remove({ output: /^sophisticatedstorage:limited_barrel.+$/ })
    
    const sophStorageMaterials = [
        ["", null, null],
        ["copper_", "copper"],
        ["iron_", "iron"],
        ["gold_", "gold"],
        ["diamond_", "diamond"]
    ]

    const storageContainers = [
        "chest",
        "barrel",
        "shulker_box"
    ]

    sophStorageMaterials.forEach((material, index) => {
        if (index == 0) return;

        storageContainers.forEach(container => {
            let outputStorage = `sophisticatedstorage:${material[0]}${container}`
            let inputStorage = `sophisticatedstorage:${sophStorageMaterials[index - 1][0]}${container}`
            event.remove({ mod: "sophisticatedstorage", output: outputStorage })
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "key": {
                    "N": {
                        "tag": (`c:plates/${material[1]}`)
                    },
                    "C": {
                        "item": inputStorage
                    }
                },
                "pattern": [
                    "NNN",
                    "NCN",
                    "NNN"
                ],
                "result": {
                    "count": 1,
                    "id": outputStorage
                }
            }).id(st(`${material[0]}${container}_upgrade`));
        });
    });

})


