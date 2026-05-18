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
});