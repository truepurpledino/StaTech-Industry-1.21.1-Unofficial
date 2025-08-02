// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

/* MIRecipeEvents.customCondition(event => {
    event.register("block_2back_2up", (ctx, recipe) => {
        // Get machine block entity
        const be = ctx.blockEntity;

        // Compute target block position: 2 back from front face, then +1 Y
        const targetPos = be.blockPos['relative(net.minecraft.core.Direction,int)'](
            be.orientation.facingDirection.opposite,
            2
        ).above(2);

        // Get the block state at that position
        const state = ctx.level.getBlockState(targetPos);

        // Compare with the block ID you want (replace with your desired block)
        return state.id === 'minecraft:diamond_block'; // <- Your target block
    },
    Text.of("Requires Diamond Block 2 blocks behind and 2 block above"));
}); */

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/space_probe_launcher/${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
     let spl = (id, eu, duration, item_inputs, item_outputs, adjacentBlock) => {
        let newRecipe = {
            type: mi('space_probe_launcher'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (adjacentBlock) 
            newRecipe['process_conditions'] = [
                {
                    type: "modern_industrialization:adjacent_block",
                    block: adjacentBlock,
                    position: "below"
                }
            ];
        
        e.custom(newRecipe).id(id);
    } 

    // -- SPACE PROBE -- //
    spl(
        st('basic_space_probe'),
        32,
        600,
        [ { amount: 1, item: kj('basic_space_probe'), probability: 0.10 } ],
        [ 
            { amount: 1, item: mi('desh_ore'), probability: 0.25  },
            { amount: 1, item: mi('moon_ice_ore'), probability: 0.1 }
         ],
        "kubejs:mki_probe_computer"
    ); 
    spl(
        st('advanced_space_probe'),
        48,
        600,
        [ { amount: 1, item: kj('advanced_space_probe'), probability: 0.10 } ],
        [ 
            { amount: 1, item: mi('ostrum_ore'), probability: 0.25  }
         ],
        "kubejs:mkii_probe_computer"
    ); 
    spl(
        st('highly_advanced_space_probe'),
        64,
        600,
        [ { amount: 1, item: kj('highly_advanced_space_probe'), probability: 0.10 } ],
        [ 
            { amount: 1, item: mi('calorite_ore'), probability: 0.25  }
         ],
        "kubejs:mkiii_probe_computer"
    ); 
});