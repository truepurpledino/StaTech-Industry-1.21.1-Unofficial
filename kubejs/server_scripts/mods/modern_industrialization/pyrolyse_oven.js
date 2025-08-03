// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/pyrolyse_oven/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let io = (id) => `industrialization_overdrive:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const REMOVED_RECIPE = [    
        io('pyrolyse_oven/charcoal_from_logs')
    ];
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));    

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let pyrolyseOven = (id, eu, duration, item_inputs, item_outputs, fluid_outputs) => {
        let newRecipe = {
            type: 'industrialization_overdrive:pyrolyse_oven',
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe).id(id);
    }

    // -- LOGS TO CHARCOAL + WOOD TAR -- //
    pyrolyseOven(
        st('charcoal_cresote_from_logs'),
        8,
        300,
        [ { amount: 4, tag: mc('logs') } ],
        [ { amount: 6, item: mc('charcoal') } ],
        [ { amount: 250, fluid: mi('wood_tar') } ]
    );
});