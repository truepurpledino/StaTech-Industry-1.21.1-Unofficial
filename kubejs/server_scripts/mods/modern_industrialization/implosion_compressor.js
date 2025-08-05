// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/implosion_compressor/${id}`;

    // -- IMPLOSION COMPRESSOR REMOVED RECIPES -- //
    const REMOVED_RECIPE = [
        mi('electric_age/component/implosion_compressor/singularity'),
        mi('vanilla_recipes/implosion_compressor/nether_star')
    ]
    REMOVED_RECIPE.forEach(id => event.remove({id: id}));

    // -- ULTRADENSE METAL BALL -- //
    implosionCompressor(
        event,
        st('ultradense_metal_ball'),
        512,
        600,
        [
            { amount: 64, item: mi('tungstensteel_large_plate') },
            { amount: 64, item: mi('enderium_plate') },
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