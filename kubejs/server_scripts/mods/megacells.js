// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:megacells/${id}`;

    
    // -- EXTENDED AE REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        mg('transform/sky_bronze_ingot'),
        mg('transform/sky_steel_ingot'),
        mg('transform/sky_osmium_ingot'),
        mg('transform/sky_osmium_ingot'),
        mg('crafting/sky_osmium_ingot_from_sky_osmium_block'),
        mg('crafting/sky_osmium_block')
    ];
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));
    
     event.custom({
        type: 'ae2:transform',
        circumstance: {
            "type": "fluid",
            "tag": "minecraft:lava"
        },
        ingredients: [
            {"item": "ae2:charged_certus_quartz_crystal"},
            {"tag": "c:ingots/annealed_copper"},
            {"item": "ae2:sky_stone_block"}
        ],
        result: {
            "count": 2,
            "id": "megacells:sky_bronze_ingot"
        }
    })
    .id(st('sky_bronze_ingot_inworld'));
    
    event.custom({
        type: 'ae2:transform',
        circumstance: {
            "type": "fluid",
            "tag": "minecraft:lava"
        },
        ingredients: [
            {"item": "ae2:charged_certus_quartz_crystal"},
            {"tag": "c:ingots/stainless_steel"},
            {"item": "ae2:sky_stone_block"}
        ],
        result: {
            "count": 2,
            "id": "megacells:sky_steel_ingot"
        }
    })
    .id(st('sky_steel_ingot_inworld'));



})