// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:sophisticatedbackpacks/${id}`;
    

    const SOPH_DELETED = [
        sb('stack_upgrade_omega_tier'),
        sb('compacting_upgrade'),
        sb('advanced_compacting_upgrade'),
        sb('pump_upgrade'),
        sb('battery_upgrade'),
        sb('magnet_upgrade'),
        sb('advanced_magnet_upgrade'),
        sb('advanced_pump_upgrade'),
        sb('feeding_upgrade'),
        sb('upgrade_base')
    ];
    SOPH_DELETED.forEach(id => event.remove({ id: id })); 

    // -- UPGRADE BASE -- //
    event.shaped(sb('upgrade_base'), [
        'SIS',
        'ILI',
        'SIS'
    ],
    {
        S: mc('string'),
        I: '#c:plates/bronze',
        L: mc('leather')
    })
    .id(st('upgrade_base')); 

    // -- FEEDING UPGRADE -- //
    event.shaped(sb('feeding_upgrade'), [
        ' C ',
        'ABM',
        ' F '
    ],
    {
        C: mc('golden_carrot'),
        D: sb('upgrade_base'),
        M: mc('glistering_melon_slice'),
        G: mc('golden_apple'),
        F: ei('robot_auto_feeder')
    })
    .id(st('feeding_upgrade')); 

    // -- MAGNET UPGRADE -- //
    event.shaped(sb('magnet_upgrade'), [
        'D',
        'M'
    ],
    {
        D: sb('pickup_upgrade'),
        M: sm('basicmagnet')
    })
    .id(st('magnet_upgrade')); 

    // -- ADVANCED MAGNET UPGRADE -- //
    event.shaped(sb('advanced_magnet_upgrade'), [
        'D',
        'M'
    ],
    {
        D: sb('magnet_upgrade'),
        M: sm('advancedmagnet')
    })
    .id(st('advanced_magnet_upgrade')); 

    // Adapted from Monifactory scripts, see https://github.com/ThePansmith/Monifactory/blob/main/kubejs/server_scripts/mods/Sophisticated_Storagevent.js

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
        event.remove({ mod: "sophisticatedbackpacks", output: outputBackpack })
        event.custom({
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

