// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:morered/${id}`;

    event.remove({type: mr('soldering')})

    // -- MORE RED REMOVED REICPES -- //
    const MORERED_REMOVED_RECIPES = [
        mr('red_alloy_ingot'),
        mr('red_alloy_wire'),
        mr('soldering_table'),
    ];
    MORERED_REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // RED ALLOY WIRE
    wiremill(
        event,
        st('red_alloy_wire'),
        2,
        100,
        [ { amount: 1, item: mr('red_alloy_ingot') } ],
        [ { amount: 2, item: mr('red_alloy_wire') } ],
    );


    //----------------------//
    // ------ PACKER ------ //
    //----------------------//

    const DYE_COLORS = [
        'white',
        'orange',
        'magenta',
        'yellow',
        'cyan',
        'lime',
        'pink',
        'gray',
        'light_blue',
        'light_gray',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]

    DYE_COLORS.forEach(DYE_COLORS => {
        event.remove( {id: mr(`${DYE_COLORS}_network_cable`)} ); 
        packer(
            event,
            st(`${DYE_COLORS}_red_alloy_cable`),
            2,
            200,
            [
                { amount: 8, item: mr('red_alloy_wire') },
                { amount: 1, item: mc(`${DYE_COLORS}_wool`) }
            ],
            [ { amount: 8, item: mr(`${DYE_COLORS}_network_cable`) } ]
        );
    })

    //---------------------//
    // ---- ASSEMBLER ---- //
    //---------------------//
});