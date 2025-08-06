// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------
ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:sophisticatedstorage${id}`;
 
    const SOPH_DELETED = [
        ss('stack_upgrade_omega_tier'),
        ss('compression_upgrade'),
        ss('compacting_upgrade'),
        ss('storage_compacting_upgrade_from_backpack_compacting_upgrade'),
        ss('advanced_compacting_upgrade'),
        ss('storage_advanced_compacting_upgrade_from_backpack_advanced_compacting_upgrade'),
        ss('magnet_upgrade'),
        ss('storage_magnet_upgrade_from_backpack_magnet_upgrade'),
        ss('advanced_magnet_upgrade_from_basic'),
        ss('storage_advanced_magnet_upgrade_from_backpack_advanced_magnet_upgrade'),
        ss('pump_upgrade'),
        ss('xp_pump_upgrade'),
        ss('advanced_pump_upgrade'),
        ss('feeding_upgrade')
    ];
    SOPH_DELETED.forEach(id => event.remove({ id: id })); 


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


