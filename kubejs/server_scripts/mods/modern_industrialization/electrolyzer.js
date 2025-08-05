// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/electrolyzer/${id}`;

    // -- ELECTROLYZER REMOVED RECIPES -- //
    const DELETED_RECIPE = [
        mi('materials/electrolyzer/salt_electrolysis')
    ];
    DELETED_RECIPE.forEach(id => event.remove({id: id}));

    // -- BRINE -- //
    electrolyzer(
        event,
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
        event,
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
        event,
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
        event,
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
        event,
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