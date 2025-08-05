// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:create/mixing/${id}`;
    
    // Remove the create compat recipe for ae2 mixing
    event.remove( {type: cr('mixing'), output: ae('fluix_crystal') });
    // e.remove( {type: cr('mixing'), output: xp('xp_berries_seeds') });

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let mixing = (id, heat_requirement, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('mixing'),
            heatRequirement: heat_requirement,
        }

        if (item_inputs)
            newRecipe['ingredients'] = item_inputs;
        if (item_outputs)
            newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    }

    // -- XP BERRIES SEEDS FIX -- //
    // mixing(
        // st('xp_berries_seeds'),
        // 'none',
        // [
            // { tag: 'xps:seeds_list' },
            // { tag: 'xps:seeds_list' },
            // { tag: 'xps:seeds_list' },
            // { tag: 'xps:seeds_list' },
            // { item: mc('nether_wart') },
            // { item: mc('nether_wart') },
            // { item: mc('amethyst_shard') },
            // { item: xp('soul_copper_nugget') },
            // { fluid: xp('xp_fluid'), amount: 81000 },

        // ],
        // [ { item: xp('xp_berries_seeds'), count: 6 } ]
    // );

    // -- BRONZE INGOT -- //
    mixing(
        st('bronze_ingot'),
        'heated',
        [
            { tag: 'c:raw_materials/copper' },
            { tag: 'c:raw_materials/copper' },
            { tag: 'c:raw_materials/copper' },
            { tag: 'c:raw_materials/tin' }
        ],
        [ { 'id': mi('bronze_ingot'), count: 2 } ]
    );
	

    // -- BRONZE DUST -- //
    mixing(
        st('bronze_dust'),
        'heated',
        [
            { tag: 'c:dusts/copper' },
            { tag: 'c:dusts/copper' },
            { tag: 'c:dusts/copper' },
            { tag: 'c:dusts/tin' }
        ],
        [ { 'id': mi('bronze_dust'), count: 2 } ]
    );

    // -- FIRE CLAY DUST -- //
    mixing(
        st('fire_clay_dust'),
        'none',
        [
            { item: mi('clay_dust') },
            { item: mi('clay_dust') },
            { tag: 'c:dusts/brick' },
            { tag: 'c:dusts/brick' }
        ],
        [ { 'id': mi('fire_clay_dust'), count: 2 } ]
    );
});