// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------
ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:bankstorage/${id}`;
    let bs = (id) => `bankstorage:${id}`;
    let ts = (id) => `tankstorage:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    
 /*    e.remove({ mod: "bankstorage", output: "bank_1" }) */
    e.custom({
        "type": "bankstorage:copy_components_or_assign_uuid",
        "pattern": [
            "NIN",
            "ICI",
            "NIN"
        ],
        "key": {
            "N": {
                "tag": ('c:storage_blocks/coal')
            },
            "I": {
                "tag": ('c:storage_blocks/lignite_coal'),
            },
            "C": {
                "tag": "c:barrels/wooden"
            }
        },
        "result": {
            "id": "bankstorage:bank_1",
            "count": 1
        }
    }).id(st('bank_1'));
    e.remove({ id: "bankstorage:bank_1"})
    // Adapted from Monifactory scripts, see https://github.com/ThePansmith/Monifactory/blob/main/kubejs/server_scripts/mods/Sophisticated_Storage.js

    const bankMaterials = [
        ["_1", null, null],
        ["_2", "bronze", "copper"],
        ["_3", "steel", "iron"],
        ["_4", "aluminum", "diamond"],
        ["_5", "stainless_steel", "annealed_copper"],
        ["_6", "calorite", "platinum"],
        ["_7", "tungstensteel", "iridium"]
    ]
    bankMaterials.forEach((material, index) => {
        if (index == 0) return;

        let outputBank = `bankstorage:bank${material[0]}`
        let inputBank = `bankstorage:bank${bankMaterials[index - 1][0]}`
        e.remove({ mod: "bankstorage", output: outputBank })
        e.custom({
            "type": "bankstorage:copy_components_or_assign_uuid",
            "pattern": [
                "NIN",
                "ICI",
                "NIN"
            ],
            "key": {
                "N": {
                    "tag": (`c:storage_blocks/${material[1]}`)
                },
                "I": {
                    "tag": (`c:storage_blocks/${material[2]}`),
                },
                "C": {
                    "item": inputBank
                }
            },
            "result": {
                "count": 1,
                "id": outputBank
            }
        }).id(st(`${material[0]}upgrade`));
    });
})

