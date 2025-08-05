// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/cutting_machine/${id}`;

    // -- CUTTING MACHINE VARIABLE CONSTANTS -- //
    const lubricantAmount = 10;
    
    let recipesToRemove = [];
    event.forEachRecipe({ type: mi('cutting_machine') }, recipe => {
        recipesToRemove.push(recipe.getId());
        let recipeJson = recipe.json;
        let inputs = recipeJson.get('fluid_inputs');
        let amount;


        if (inputs.get(0) != null) {
            amount = inputs.get(0).get('amount');
            if (amount == 1) {
                recipeJson.get('fluid_inputs').get(0).add('amount', lubricantAmount);
            }
        } else {
            amount = inputs.get('amount');
            if (amount == 1) {
                recipeJson.get('fluid_inputs').add('amount', lubricantAmount);
            }
        }
        event.custom(recipeJson).id(st(recipe.getPath()));
    }); 

    recipesToRemove.forEach(id => event.remove({id: id}));  

    // -- EMPTY CAN -- //
    cuttingMachine(
        event,
        st('empty_can'),
        2,
        200,
        [ { amount: 1, tag: 'c:plates/tin' } ],
        [ { amount: 4, item: kj('empty_can') } ]
    );

    // -- PIZZA SLICE -- //
    cuttingMachine(
        event,
        st('pizza_slice'),
        2,
        200,
        [ { amount: 1, item: kj('pizza') } ],
        [ { amount: 8, item: kj('pizza_slice') } ]
    );

    // -- CONCRETE PIZZA SLICE -- //
    cuttingMachine(
        event,
        st('concrete_pizza_slice'),
        8,
        200,
        [ { amount: 1, item: kj('concrete_pizza') } ],
        [ { amount: 8, item: kj('concrete_pizza_slice') } ]
    );
});