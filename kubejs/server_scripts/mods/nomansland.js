// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:nomansland/${id}`;

    // -- NO MANS LAND REMOVED REICPES -- //
    const NOMANSLAND_REMOVED_RECIPES = [
        mc('mushroom_stew'),
        mc('smoker'),
        fd('cooking/mushroom_stew'),
        fd('cooking/mushroom_rice')
    ];
    NOMANSLAND_REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));


    //-------------------------//
    // --- SHAPED CRAFTING --- //
    //-------------------------//


    // -- SMOKER -- //
    event.shaped(mc('smoker'), [
        ' L ',
        'LFL',
        ' L '
    ],
    {
        F: mc('furnace'),
        L: '#minecraft:logs'
    })
    .id(st('smoker'));


    //----------------------------//
    // --- SHAPELESS CRAFTING --- //
    //----------------------------//


    // -- MUSHROOM STEW -- //
    event.shapeless(
    Item.of(mc('mushroom_stew'), 1),
    [
        '2x #nomansland:edible_mushrooms',
        mc('bowl')
    ])
    .id(st('mushroom_stew_shaped'));

    //---------------------//
    // ----- COOKING ----- //
    //---------------------//


    // -- MUSHROOM RICE -- //
    event.custom({
    "type": fd('cooking'),
    "experience": 1.0,
    "ingredients": [
        {
        "tag": "nomansland:edible_mushrooms"
        },
        {
        "tag": "nomansland:edible_mushrooms"
        },
        {
        "tag": "c:crops/rice"
        },
        {
        "type": "neoforge:compound",
        "children": [
            {
            "item": "minecraft:carrot"
            },
            {
            "item": "minecraft:potato"
            }
        ]
        }
    ],
    "recipe_book_tab": "meals",
    "result": {
        "count": 1,
        "id": fd('mushroom_rice')
    }
    })
    .id(st('mushroom_rice'));

    // -- MUSHROOM STEW ALT -- //
    event.custom({
    "type": fd('cooking'),
    "container": {
        "count": 1,
        "id": "minecraft:bowl"
    },
    "experience": 1.0,
    "ingredients": [
        {
        "tag": "nomansland:edible_mushrooms"
        },
        {
        "tag": "nomansland:edible_mushrooms"
        }
    ],
    "recipe_book_tab": "meals",
    "result": {
        "count": 1,
        "id": mc('mushroom_stew')
    }
    })
    .id(st('mushroom_stew_alt'));

});