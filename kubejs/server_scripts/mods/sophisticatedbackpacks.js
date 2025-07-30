// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------
ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:sophisticatedbackpacks/${id}`;
    let sb = (id) => `sophisticatedbackpacks:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    
    // -- SOPHISTICATED BACKPACKS REMOVED RECIPES -- //
/*      const SOPHBACKPACKS_DELETED_RECIPES = [
        sb('copper_backpack'),
        sb('iron_backpack'),
        sb('iron_backpack_from_copper'),
        sb('gold_backpack'),
        sb('diamond_backpack'),
        sb('netherite_backpack')
    ];
    SOPHBACKPACKS_DELETED_RECIPES.forEach(id => e.remove({ id: id })); 
    e.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
         "neoforge:conditions": [
            {
                "type": "sophisticatedcore:item_enabled",
                "itemRegistryName": "sophisticatedbackpacks:copper_backpack"
            } 
        ],
        "key": {
            "N": {
                "tag": "c:plates/bronze"
            },
            "I": {
                "tag": "c:plates/copper"
            },
            "C": {
                "item": "sophisticatedbackpacks:backpack"
            }
        },
        "pattern": [
            "NIN",
            "ICI",
            "NIN"
        ],
        "result": {
            "count": 1,
            "id": "sophisticatedbackpacks:copper_backpack"
        }
    }).id(st('copper_backpack_upgrade'))*/

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

        // shamelessly adapted from Monifactory scrips
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

