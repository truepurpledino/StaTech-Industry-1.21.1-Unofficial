// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:angelring/${id}`;

    // -- ANGEL RING REMOVED REICPES -- //
    const ANGELRING_REMOVED_RECIPES = [
        an('angel_ring'),
        an('diamond_ring')
    ];
    ANGELRING_REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- ANGEL RING -- //
    event.shaped(an('angel_ring'), [
        'FRF',
        'TGT',
        'CTC'
    ],
    {
        F: mc('feather'),
        R: '#c:rods/titanium',
        T: '#c:storage_blocks/titanium',
        C: mi('digital_circuit'),
        G: mi('gravichestplate')
    }).id(st('angel_ring'))
});