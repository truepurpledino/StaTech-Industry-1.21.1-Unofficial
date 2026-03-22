// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------
ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let stBank = (id) => `statech:bankstorage/${id}`;
    let stTank = (id) => `statech:tankstorage/${id}`;
    
    event.remove({ id: "bankstorage:bank_1"})
    event.shaped(
        Item.of('bankstorage:bank_1', 1),
        [
            'NIN',
            'ICI',
            'NIN'
        ],
        {
            N: '#c:storage_blocks/coal',
            I: '#c:storage_blocks/lignite_coal',
            C: '#c:barrels/wooden'
        }
    );
    event.remove({ id: "tankstorage:tank_1"})
    event.shaped(
        Item.of('tankstorage:tank_1', 1),
        [
            'NIN',
            'LCL',
            'NIN'
        ],
        {
            N: '#c:storage_blocks/coal',
            I: '#c:glass_blocks',
            C: 'minecraft:bucket',
            L: '#c:storage_blocks/lignite_coal'
        }
    );
    // Adapted from Monifactory scripts, see https://github.com/ThePansmith/Monifactory/blob/main/kubejs/server_scripts/mods/Sophisticated_Storagevent.js

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
        
        let outputTank = `tankstorage:tank${material[0]}`
        let inputTank = `tankstorage:tank${bankMaterials[index - 1][0]}`
        
        event.remove({ id: outputBank })
        event.shaped(
            Item.of(outputBank, 1),
            [
                'NIN',
                'ICI',
                'NIN'
            ],
            {
                N: `#c:storage_blocks/${material[1]}`,
                I: `#c:storage_blocks/${material[2]}`,
                C: inputBank
            }
        );
        
        event.remove({ id: outputTank })
        event.shaped(
            Item.of(outputTank, 1),
            [
                'NIN',
                'ICI',
                'NIN'
            ],
            {
                N: `#c:storage_blocks/${material[1]}`,
                I: `#c:storage_blocks/${material[2]}`,
                C: inputTank
            }
        );
    });
})

