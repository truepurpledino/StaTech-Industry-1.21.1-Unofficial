// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:morered/${id}`;

    // -- MORE RED REMOVED REICPES -- //
    const MORERED_REMOVED_RECIPES = [
        mr('red_alloy_ingot')
    ];
    MORERED_REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));
});