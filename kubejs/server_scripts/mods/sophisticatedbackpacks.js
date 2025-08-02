// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:sophisticatedbackpacks/${id}`;
    let sb = (id) => `sophisticatedbackpacks:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    
 
    // Adapted from Monifactory scripts, see https://github.com/ThePansmith/Monifactory/blob/main/kubejs/server_scripts/mods/Sophisticated_Storage.js

    const sophBackpacksMaterials = [
        ["", null, null],
        ["copper_", "bronze", "copper"],
        ["iron_", "steel", "iron"],
        ["gold_", "aluminum", "diamond"],
        ["diamond_", "stainless_steel", "annealed_copper"],
        ["netherite_", "tungstensteel", "platinum"]
    ]
    sophBackpacksMaterials.forEach((material, index) => {
        if (index == 0) return;

        let outputBackpack = `sophisticatedbackpacks:${material[0]}backpack`
        let inputBackpack = `sophisticatedbackpacks:${sophBackpacksMaterials[index - 1][0]}backpack`
        e.remove({ mod: "sophisticatedbackpacks", output: outputBackpack })
        e.custom({
            "type": "sophisticatedbackpacks:backpack_upgrade",
            "key": {
                "N": {
                    "tag": (`c:plates/${material[1]}`)
                },
                "I": {
                    "tag": (`c:plates/${material[2]}`),
                },
                "C": {
                    "item": inputBackpack
                }
            },
            "pattern": [
                "NIN",
                "ICI",
                "NIN"
            ],
            "result": {
                "count": 1,
                "id": outputBackpack
            }
        }).id(st(`${material[0]}upgrade`));
    });
})

