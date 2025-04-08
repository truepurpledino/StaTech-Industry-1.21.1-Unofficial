// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/mixer/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    // let xp = (id) => `xps:${id}`;
    let ae = (id) => `ae2:${id}`;
    // let tr = (id) => `techreborn:${id}`;
    let cr = (id) => `create:${id}`;
    let kj = (id) => `kubejs:${id}`;
    // let cd = (id) => `culturaldelights:${id}`;

    // -- MIXER REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        mi('materials/mixer/fire_clay_dust')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let mixer = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('mixer'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;
        
        e.custom(newRecipe).id(id);
    }

    // -- NETHERRACK -- //
    mixer(
        st('netherrack'),
        8,
        200,
        [ { amount: 1, item: mc('cobblestone') } ],
        [ { amount: 1, item: mc('netherrack') } ],
        [ { amount: 100, fluid: mi('blood') } ]
    );

    // -- SALT WATER -- //
    mixer(
        st('salt_water'),
        2,
        200,
        [ { amount: 1, item: mi('salt_dust') } ],
        null,
        [ { amount: 100, fluid: mc('water') } ],
        [ { amount: 150, fluid: mi('salt_water') } ]
    );

    // -- PICKLE -- //
    // mixer(
        // st('pickle'),
        // 2,
        // 600,
        // [
            // { amount: 1, item: cd('cucumber') },
            // { amount: 2, item: mi('salt_dust') }
        // ],
        // [ { amount: 1, item: cd('pickle') } ],
        // [ { amount: 100, fluid: mc('water') } ]
    // );

    // -- NUTRIENT RICH WATER -- //
    mixer(
        st('nutrient_rich_water'),
        8,
        200,
        [ { amount: 1, item: mc('bone_meal') } ],
        null,
        [ { amount: 100, fluid: mc('water') } ],
        [ { amount: 200, fluid: mi('nutrient_rich_water') } ]
    );

    // -- NUTRIENT RICH LIQUID ENDER -- //
    mixer(
        st('nutrient_rich_liquid_ender'),
        8,
        200,
        [ { amount: 1, item: mc('bone_meal') } ],
        null,
        [ { amount: 100, fluid: mi('liquid_ender') } ],
        [ { amount: 200, fluid: mi('nutrient_rich_liquid_ender') } ]
    );

    // -- NUTRIENT RICH BLOOD -- //
    mixer(
        st('nutrient_rich_blood'),
        8,
        200,
        [ { amount: 1, item: mc('bone_meal') } ],
        null,
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 200, fluid: mi('nutrient_rich_blood') } ]
    );

    // -- XP BERRY SEEDS -- //
    // mixer(
        // st('xp_berry_seeds'),
        // 8,
        // 200,
        // [ 
            // { amount: 1, item: xp('soul_copper_nugget') },
            // { amount: 1, item: mc('amethyst_shard') },
            // { amount: 4, tag: 'xps:seeds_list' },
            // { amount: 2, item: mc('nether_wart') }
        // ],
        // [ { amount: 6, item: xp('xp_berries_seeds') } ],
        // [ { amount: 1000, fluid: xp('xp_fluid') } ]
    // );

    // -- LIQUID EXPERIENCE -- //
    // mixer(
        // st('xp_fluid'),
        // 8,
        // 200,
        // [ { amount: 3, item: cr('experience_nugget') } ],
        // null,
        // null,
        // [ { amount: 90, fluid: xp('xp_fluid') } ]
    // );

    // -- STATECH ENERGY -- //
    // mixer(
        // st('statech_energy'),
        // 8,
        // 200,
        // [
            // { amount: 1, item: kj('empty_can') },
            // { amount: 2, item: mi('battery_alloy_dust') }
        // ],
        // [ { amount: 1, item: kj('statech_energy') } ],
        // [ { amount: 100, fluid: mc('water') } ]
    // );

    // -- BEPSI -- //
    // mixer(
        // st('bepsi'),
        // 8,
        // 200,
        // [ { amount: 1, item: kj('empty_can') } ],
        // [ { amount: 1, item: kj('bepsi') } ],
        // [ { amount: 100, fluid: mi('polyethylene') } ]
    // );

    // -- COKE COLA -- //
    // mixer(
        // st('coke_cola'),
        // 8,
        // 200,
        // [ 
            // { amount: 1, item: kj('empty_can') },
            // { amount: 2, tag: 'c:coke_dusts' }
        // ],
        // [ { amount: 1, item: kj('coke_cola') } ],
        // [ { amount: 100, fluid: mc('water') } ]
    // );

    // -- GREG COLA -- //
    // mixer(
        // st('greg_cola'),
        // 8,
        // 200,
        // [
            // { amount: 1, item: kj('empty_can') },
            // { amount: 2, item: mc('clay_ball') }
        // ],
        // [ { amount: 1, item: kj('greg_cola') } ],
        // [ { amount: 100, fluid: mi('polytetrafluoroethylene') } ]
    // );

    // -- SULFURIC ACID BOTTLE -- //
    // mixer(
        // st('sulfuric_acid_bottle'),
        // 8,
        // 200,
        // [ { amount: 1, item: mc('glass_bottle') } ],
        // [ { amount: 1, item: kj('sulfuric_acid_bottle') } ],
        // [ { amount: 100, fluid: mi('sulfuric_acid') } ]
    // );

    // -- URANIUM CEREAL -- //
    // mixer(
        // st('uranium_cereal'),
        // 8,
        // 200,
        // [ 
            // { amount: 1, item: mc('bowl') },
            // { amount: 3, tag: 'c:uranium_nuggets' }
        // ],
        // [ { amount: 1, item: kj('uranium_cereal') } ],
        // [ { amount: 100, fluid: 'milk:still_milk' } ]
    // );

    // -- NUKA COLA -- //
    // mixer(
        // st('nuka_cola'),
        // 8,
        // 200,
        // [ 
            // { amount: 1, item: mc('glass_bottle') },
            // { amount: 4, tag: 'c:uranium_dusts' },
            // { amount: 2, tag: 'c:coke_dusts' }
        // ],
        // [ { amount: 1, item: kj('nuka_cola') } ],
        // [ { amount: 100, fluid: mc('water') } ]
    // );

    // -- CONCRETE PIZZA -- //
    // mixer(
        // st('concrete_pizza'),
        // 8,
        // 200,
        // [ { amount: 1, item: kj('pizza') } ],
        // [ { amount: 1, item: kj('concrete_pizza') } ],
        // [ { amount: 100, fluid: mi('concrete') } ]
    // );

    // -- CONCRETE STEAK WITH CLAY SAUCE -- //
    // mixer(
        // st('concrete_steak_with_clay_sauce'),
        // 8,
        // 200,
        // [
            // { amount: 1, item: mc('cooked_beef') },
            // { amount: 1, item: mc('clay_ball') }
        // ],
        // [ { amount: 1, item: kj('concrete_and_clay_steak') } ],
        // [ { amount: 100, fluid: mi('concrete') } ]
    // );

    // -- DOUGH -- //
    mixer(
        st('dough'),
        2,
        100,
        [ { amount: 1, item: cr('wheat_flour') } ],
        [ { amount: 1, item: cr('dough') } ],
        [ { amount: 1000, fluid: mc('water') } ]
    );

    // -- LIQUID ENDER -- // 
    // mixer(
        // st('liquid_ender'),
        // 8,
        // 200,
        // [ { amount: 2, item: tr('ender_pearl_dust') } ],
        // null,
        // [ { amount: 800, fluid: mc('water') } ],
        // [ { amount: 1000, fluid: mi('liquid_ender') } ]
    // );
    
    // -- SOULCOPPER BLEND -- //
    // mixer(
        // st('soul_copper_blend'),
        // 2,
        // 100,
        // [
            // { amount: 1, item: mc('raw_copper') },
            // { amount: 1, item: mc('soul_sand') }
        // ],
        // [ { amount: 4, item: xp('soul_copper_blend') } ]
    // );    

    // -- CERTUS QUARTS CRYSTAL -- //
    mixer(
        st('certus_quartz_crystal'),
        8,
        100,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('certus_quartz_dust') }
        ],
        [ { amount: 2, item: ae('certus_quartz_crystal') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );

    // -- DAMAGED BUDDING CERTUS QUARTZ -- //
    mixer(
        st('damaged_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('quartz_block') }
        ],
        [ { amount: 1, item: ae('damaged_budding_quartz') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );

    // -- CHIPPED BUDDING CERTUS QUARTZ -- //
    mixer(
        st('chipped_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('damaged_budding_quartz') }
        ],
        [ { amount: 1, item: ae('chipped_budding_quartz') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );

    // -- FLAWED BUDDING CERTUS QUARTZ -- //
    mixer(
        st('flawed_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('chipped_budding_quartz')}
        ],
        [ { amount: 1, item: ae('flawed_budding_quartz') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );
    
    // -- DRILLING FLUID -- //
    mixer(
        st('drilling_fluid'),
        8,
        400,
        [ { amount: 16, item: mi('clay_dust') } ],
        null,
        [
            { amount: 700, fluid: mc('water') },
            { amount: 100, fluid: mi('lubricant') }
        ],
        [ { amount: 1000, fluid: mi('drilling_fluid') } ]
    );

    // -- GRASS BLOCK RECIPE PARITY -- //
    mixer(
        st('grass_block'),
        2,
        100,
        [
            { amount: 1, item: mc('dirt') },
            { amount: 1, item: mc('wheat_seeds') , probability: 0.0 }
        ],
        [ { amount: 1, item: mc('grass_block') } ],
        [ { amount: 1000, fluid: mc('water') } ]
    );

    // -- FIRE CLAY DUST -- //
    mixer(
        st('fire_clay_dust'),
        2,
        100,
        [
            { amount: 2, item: mi('brick_dust') },
            { amount: 2, item: mi('clay_dust') }
        ],
        [ { amount: 4, item: mi('fire_clay_dust') } ]
    );

    // -- LIQUID CONCRETE -- //
    mixer(
        st('liquid_concrete'),
        8,
        200,
        [ 
            { amount: 4, item: mi('clay_dust') },
            { amount: 10, item: mi('stone_dust') }
        ],
        null,
        [ { amount: 100, fluid: mc('water') } ],
        [ { amount: 500, fluid: mi('concrete') } ]
    );

    // -- UTILITY FUNCTION FOR THE FOLLOWING FOREACH -- //
    // let mixerConsumable = (fluid, amount) => {
        // if (amount < 100)
            // amount = 1000;

        // let newFluidInput = {
            // fluid: fluid,
            // amount: amount
        // }

        // return newFluidInput;
    // }
    
    // -- CONVERT ALL NON-CONSUMABLE FLUID RECIPES IN MIXER TO CONSUME FLUID  -- //
    // let toRemove = [];
    // e.forEachRecipe( { type: mi('mixer') }, recipe => {
        // const DONT_REPLACE = [
            // 'modern_industrialization:vanilla_recipes/mixer/lava',
            // 'modern_industrialization:compat/ae2/mixer/fluix'
        // ];
        // const recipeJson = JSON.parse(recipe.json.toString());
        // let eu = recipeJson.eu;
        // let duration = recipeJson.duration;
        // let item_inputs = recipeJson.item_inputs;
        // let item_outputs = recipeJson.item_outputs;
        // let fluid_inputs = recipeJson.fluid_inputs;
        // let fluid_outputs = recipeJson.fluid_outputs;
        // let newFluidInput;

        // if (fluid_inputs && !DONT_REPLACE.includes(recipe.getId())) {
            // if (Array.isArray(fluid_inputs)) {
                // let newFluidArr = [];
                // for (let key in fluid_inputs) {
                    // if (fluid_inputs[key].probability === 0) {
                        // newFluidInput = mixerConsumable(
                            // fluid_inputs[key].fluid,
                            // fluid_inputs[key].amount
                        // );
                        // newFluidArr.push(newFluidInput);
                    // }
                // }
                // if (newFluidArr.length > 0)
                    // newFluidInput = newFluidArr;
            // } else {
                // if (fluid_inputs.probability === 0) {
                    // newFluidInput = mixerConsumable(
                        // fluid_inputs.fluid,
                        // fluid_inputs.amount
                    // );
                // }
            // }
        // }

        // if (newFluidInput) {
            // toRemove.push(recipe.getId());
            // let id = st(recipe.getId().split('mixer/')[1]);
            // mixer(id, eu, duration, item_inputs, item_outputs, newFluidInput, fluid_outputs);
        // }
    // });
    // toRemove.forEach(id => e.remove({ id: id }));
});