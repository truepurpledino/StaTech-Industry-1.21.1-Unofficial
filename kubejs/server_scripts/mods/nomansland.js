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
        fd('cooking/mushroom_rice'),
        nm('integration/farmersdelight/pancake'),
        su('integration/pancake_fd'),
        nm('food/salmon_and_pesto_gnocchi')
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

    // -- PANCAKE -- //
    event.shapeless(
    Item.of(su('pancake'), 2),
    [
        '#c:drinks/milk',
        '#c:foods/dough',
        mc('egg'),
        '#supplementaries:syrup'
    ])
    .id(st('pancake'));

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
            "item": mc('potato')
            },
            {
            "item": mc('carrot')
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

    // -- SALMON AND PESTO GNOCCHI -- //
    event.custom({
    "type": fd('cooking'),
    "container": {
        "count": 1,
        "id": "minecraft:bowl"
    },
    "experience": 1.0,
    "ingredients": [
        {
        "item": nm('pesto_bottle')
        },
        {
        "item": mc('potato')
        },
        {
        "tag": 'c:foods/dough'
        },
        {
        "item": fd('salmon_slice')
        }
    ],
    "recipe_book_tab": "meals",
    "result": {
        "count": 1,
        "id": nm('salmon_and_pesto_gnocchi')
    }
    })
    .id(st('salmon_and_pesto_gnocchi'));

});