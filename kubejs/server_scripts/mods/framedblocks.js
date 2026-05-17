// -----------------------------------------
// CREATED BY GRONKDEV FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:framedblocks/${id}`;
    
    // -- WAYSTONES REMOVED RECIPES -- //
    const FRAMEDBLOCKS_REMOVED_RECIPES = [
        fb('framing_saw'),
        fb('powered_framing_saw')
    ];
    FRAMEDBLOCKS_REMOVED_RECIPES.forEach(id => event.remove({id: id}));

       // -- FRAMING SAW -- //
    event.shaped(fb('framing_saw'), [
        ' B ',
        'FFF',
        'III'
    ],
    {
        B: mi('invar_rotary_blade'),
        F: fb('framed_cube'),
        I: mi('iron_plate')

    })
    .id(st('framing_saw'));

    // -- POWERED FRAMING SAW -- //
    event.shaped(fb('powered_framing_saw'), [
        ' S ',
        'AFA',
        'RAR'
    ],
    {
        S: fb('framing_saw'),
        F: fb('framed_cube'),
        A: mi('analog_circuit'),
        R: mi('robot_arm')

    })
    .id(st('powered_framing_saw'));
});