// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:yet_another_industrialization/${id}`;

    // -- YET ANOTHER INDUSTRIALIZATION REMOVED REICPES -- //
    const YET_ANOTHER_INDUSTRIALIZATION = [
        yai('assembler/arboreous_greenhouse'),
        yai('craft/arboreous_greenhouse'),
        yai('mixer/elytra_duplication'),
        yai('assembler/pulse_detonation_generator'),
        yai('craft/pulse_detonation_generator'),
        yai('centrifuge/nutrient_rich_water'),
        yai('centrifuge/nutrient_rich_lava'),
        yai('cryogenic_precipitator/blue_ice_nutrient'),
        yai('cryogenic_precipitator/ice_nutrient'),
        yai('cryogenic_precipitator/packed_ice_nutrient'),
        yai('cryogenic_precipitator/powder_snow_bucket_nutrient'),
        yai('cryogenic_precipitator/snow_block_nutrient'),
        yai('cryogenic_precipitator/snow_nutrient'),
        yai('cryogenic_precipitator/snowball_nutrient'),
    ];
    YET_ANOTHER_INDUSTRIALIZATION.forEach(id => event.remove( {id: id} ));

    // -- ARBOREOUS GREENHOUSE REMOVAL -- //
    event.remove({ type: yai('arboreous_greenhouse') })

    // -- BLUE ICE NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('blue_ice_nutrient'),
        8,
        30,
        null,
        [ { amount: 2, item: mc('blue_ice') } ],
        [
            { amount: 4000, fluid: mi('nutrient_rich_water') },
            { amount: 64, fluid: mi('cryofluid') }
        ],
        [
            { amount: 41, fluid: mi('argon') },
            { amount: 41, fluid: mi('helium') }
        ]
    );

    // -- ICE NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('ice_nutrient'),
        8,
        30,
        null,
        [ { amount: 2, item: mc('ice') } ],
        [
            { amount: 1000, fluid: mi('nutrient_rich_water') },
            { amount: 1, fluid: mi('cryofluid') }
        ],
    );

    // -- PACKED ICE NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('packed_ice_nutrient'),
        8,
        30,
        null,
        [ { amount: 2, item: mc('packed_ice') } ],
        [
            { amount: 4000, fluid: mi('nutrient_rich_water') },
            { amount: 8, fluid: mi('cryofluid') }
        ],
        [
            { amount: 5, fluid: mi('argon') },
            { amount: 5, fluid: mi('helium') }
        ]
    );

    // -- POWDER SNOW BUCKET NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('powdered_snow_nutrient'),
        8,
        30,
        [ { amount: 2, item: mc('bucket') } ],
        [ 
            { amount: 1, item: mc('powder_snow_bucket') },
            { amount: 1, item: mc('powder_snow_bucket') }
        ],
        [
            { amount: 1000, fluid: mi('nutrient_rich_water') },
            { amount: 4, fluid: mi('cryofluid') }
        ],
        [ { amount: 2, fluid: mi('argon') } ]
    );

    // -- SNOW BLOCK NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('snow_block_nutrient'),
        8,
        30,
        null,
        [ { amount: 8, item: mc('snow_block') } ],
        [
            { amount: 1000, fluid: mi('nutrient_rich_water') },
            { amount: 8, fluid: mi('cryofluid') }
        ],
        [
            { amount: 5, fluid: mi('argon') },
            { amount: 5, fluid: mi('helium') }
        ]
    );

    // -- SNOW NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('snow_nutrient'),
        8,
        30,
        null,
        [ { amount: 12, item: mc('snow') } ],
        [
            { amount: 1000, fluid: mi('nutrient_rich_water') },
            { amount: 2, fluid: mi('cryofluid') }
        ],
        [ { amount: 1, fluid: mi('argon') } ]
    );
    
    // -- SNOWBALL NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('snowball_nutrient'),
        8,
        30,
        null,
        [ { amount: 8, item: mc('snowball') } ],
        [
            { amount: 400, fluid: mi('nutrient_rich_water') },
            { amount: 2, fluid: mi('cryofluid') }
        ],
        [ { amount: 1, fluid: mi('argon') } ]
    );
});

ServerEvents.tags('item', event => {

    const MIXED_HATCH_TIER = [
        'bronze',
        'steel',
        'advanced',
        'turbo',
        'highly_advanced'
    ];
    MIXED_HATCH_TIER.forEach(id => {
        event.add('kubejs:mixed_input_hatch', yai(`${id}_mixed_input_hatch`))
        event.add('kubejs:mixed_output_hatch', yai(`${id}_mixed_output_hatch`))
    });
});