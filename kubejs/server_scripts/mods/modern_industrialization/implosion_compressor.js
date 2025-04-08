// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/implosion_compressor/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    // let tr = (id) => `techreborn:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- IMPLOSION COMPRESSOR REMOVED RECIPES -- //
    const REMOVED_RECIPE = [
        mi('electric_age/component/implosion_compressor/singularity'),
        mi('vanilla_recipes/implosion_compressor/nether_star')
    ]
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let implosionCompressor = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('implosion_compressor'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)   
            newRecipe['item_outputs'] = item_outputs;
    
        e.custom(newRecipe).id(id);
    }

    // -- ULTRADENSE METAL BALL -- //
    implosionCompressor(
        st('ultradense_metal_ball'),
        512,
        600,
        [
            { amount: 64, item: mi('tungstensteel_large_plate') },
            { amount: 64, tag: 'c:enderium_plates' },
            { amount: 64, item: kj('core_fragment') },
            { amount: 8, item: mi('nuke') }
        ],
        [ { amount: 1, item: mi('ultradense_metal_ball') } ]
    );

    // -- IRIDIUM ALLOY PLATE -- //
    // implosionCompressor(
        // st('iridum_alloy_plate'),
        // 64,
        // 10,
        // [
            // { amount: 1, item: tr('iridium_alloy_ingot') },
            // { amount: 4, item: mi('industrial_tnt') }
        // ],
        // [ { amount: 1, item: tr('iridium_alloy_plate') } ]
    // );

   
});