// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------
ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:sophisticatedstorage${id}`;
 
    const SOPH_DELETED = [
        ss('stack_upgrade_omega_tier'),
        ss('storage_stack_upgrade_omega_tier_from_backpack_stack_upgrade_omega_tier'),
        ss('backpack_stack_upgrade_omega_tier_from_storage_stack_upgrade_omega_tier'),
        ss('compression_upgrade'),
        ss('compacting_upgrade'),
        ss('storage_compacting_upgrade_from_backpack_compacting_upgrade'),
        ss('backpack_compacting_upgrade_from_storage_compacting_upgrade'),
        ss('advanced_compacting_upgrade'),
        ss('storage_advanced_compacting_upgrade_from_backpack_advanced_compacting_upgrade'),
        ss('backpack_advanced_compacting_upgrade_from_storage_advanced_compacting_upgrade'),
        ss('magnet_upgrade'),
        ss('storage_magnet_upgrade_from_backpack_magnet_upgrade'),
        ss('backpack_magnet_upgrade_from_storage_magnet_upgrade'),
        ss('advanced_magnet_upgrade_from_basic'),
        ss('advanced_magnet_upgrade'),
        ss('storage_advanced_magnet_upgrade_from_backpack_advanced_magnet_upgrade'),
        ss('backpack_advanced_magnet_upgrade_from_storage_advanced_magnet_upgrade'),
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
        ['', null, null],
        ['copper_', 'copper'],
        ['iron_', 'iron'],
        ['gold_', 'gold'],
        ['diamond_', 'diamond']
    ]

    const storageContainers = [
        'chest',
        'barrel',
        'shulker_box'
    ]

    sophStorageMaterials.forEach((material, index) => {
        if (index == 0) return;

        storageContainers.forEach(container => {
            let outputStorage = `sophisticatedstorage:${material[0]}${container}`
            let inputStorage = `sophisticatedstorage:${sophStorageMaterials[index - 1][0]}${container}`
            event.remove({ mod: 'sophisticatedstorage', output: outputStorage })
            event.custom({
                'type': 'sophisticatedstorage:storage_tier_upgrade',
                'key': {
                    'N': {
                        'tag': (`c:plates/${material[1]}`)
                    },
                    'C': {
                        'item': inputStorage
                    }
                },
                'pattern': [
                    'NNN',
                    'NCN',
                    'NNN'
                ],
                'result': {
                    'count': 1,
                    'id': outputStorage
                }
            }).id(st(`${material[0]}${container}_upgrade`));
        });
    });

    const containerUpgrades = [
        'basic_tier_upgrade',
        'basic_to_copper_tier_upgrade',
        'basic_to_iron_tier_upgrade',
        'basic_to_gold_tier_upgrade',
        'basic_to_diamond_tier_upgrade',
        'basic_to_netherite_tier_upgrade',
        'copper_to_iron_tier_upgrade',
        'copper_to_gold_tier_upgrade',
        'copper_to_diamond_tier_upgrade',
        'copper_to_netherite_tier_upgrade',
        'iron_to_gold_tier_upgrade',
        'iron_to_diamond_tier_upgrade',
        'iron_to_netherite_tier_upgrade',
        'gold_to_diamond_tier_upgrade',
        'gold_to_netherite_tier_upgrade',
        'diamond_to_netherite_tier_upgrade'
    ]

    const upgradeMaterials = [
        'copper',
        'iron',
        'gold',
        'diamond'
    ]

    containerUpgrades.forEach(upgradeId => {
        upgradeMaterials.forEach(material => {
            const inputItem = material === 'diamond' 
                ? 'minecraft:diamond'
                : mc(`${material}_ingot`)

            const outputItem = mi(`${material}_plate`)

            event.replaceInput(
                { output: ss(upgradeId) },
                inputItem,
                outputItem
            )
        });
    });
})


