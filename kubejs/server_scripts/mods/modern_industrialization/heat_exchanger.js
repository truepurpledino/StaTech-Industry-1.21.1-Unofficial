// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    // let tr = (id) => `techreborn:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let st = (id) => `statech:modern_industrialization/heat_exchanger/${id}`;

    const REMOVED_RECIPES = [
        mi('materials/heat_exchanger/lava')
    ];
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let heatExchanger = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('heat_exchanger'),
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

    heatExchanger(
        st('lava_power'),
        8,
        20,
        null,
        [ { amount: 1, item: mc('obsidian'), probability: 0.02 } ],
        [ 
            { amount: 10, fluid: mc('lava') },
            { amount: 125, fluid: mc('water') }
         ],
        [ { amount: 2000, fluid: mi('steam') } ]
    );

    // -- TUNGSTENSTEEL INGOT -- //
    // heatExchanger(
        // st('tungstensteel_ingot'),
        // 8,
        // 10,
        // [ { amount: 1, item: mi('tungstensteel_hot_ingot') } ],
        // [ { amount: 1, item: mi('tungstensteel_ingot') } ],
        // [ { amount: 100, fluid: mi('cryofluid') } ],
        // [
            // { amount: 65, fluid: mi('argon') },
            // { amount: 25, fluid: mi('helium') }
        // ]
    // );
});