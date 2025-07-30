// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    // let tr = (id) => `techreborn:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let st = (id) => `statech:modern_industrialization/electrolyzer/${id}`;

    // -- ELECTROLYZER REMOVED RECIPES -- //
    const DELETED_RECIPE = [
        mi('materials/electrolyzer/salt_electrolysis')
    ];
    DELETED_RECIPE.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let electrolyzer = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('electrolyzer'),
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

    // -- BRINE -- //
    electrolyzer(
        st('brine'),
        32,
        400,
        null,
        null,
        [ { amount: 8000, fluid: mi('brine') } ],
        [ 
            { amount: 2000, fluid: mi('chlorine') },
            { amount: 2000, fluid: mi('hydrogen') },
            { amount: 3000, fluid: mi('sodium_hydroxide') },
            { amount: 1000, fluid: mi('lithium') }
        ]
    );

    // -- CLAY -- //
    electrolyzer(
        st('clay_dust'),
        32,
        1200,
        [ { amount: 32, item: mi('clay_dust') } ],
        [
            { amount: 1, item: mi('aluminum_dust') },
            { amount: 2, item: mi('sodium_dust') },
            { amount: 1, item: mi('silicon_dust') }
        ],
        null,
        [ { amount: 1000, fluid: mi('lithium') } ]
    );

    // -- SALT -- //
    electrolyzer(
        st('salt_dust'),
        16,
        400,
        [ { amount: 2, tag: 'c:salt_dusts' } ],
        [ { amount: 1, item: mi('sodium_dust') } ],
        [ { amount: 100, fluid: mc('water') } ],
        [ { amount: 125, fluid: mi('chlorine') } ]
    );

    // -- HYDROCHLORIC ACID -- //
    electrolyzer(
        st('hydrochloric_acid'),
        16,
        400,
        null,
        null,
        [ { amount: 1000, fluid: mi('hydrochloric_acid') } ],
        [
            { amount: 500, fluid: mi('hydrogen') },
            { amount: 500, fluid: mi('chlorine') }
        ]
    );

    // -- CHLOROFORM -- //
    electrolyzer(
        st('chloroform'),
        16,
        400,
        null,
        null,
        [ { amount: 1000, fluid: mi('chloroform') } ],
        [
            { amount: 300, fluid: mi('hydrogen') },
            { amount: 600, fluid: mi('chlorine') }
        ]
    );
});