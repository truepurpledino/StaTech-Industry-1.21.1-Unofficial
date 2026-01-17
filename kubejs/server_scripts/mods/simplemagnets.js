// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:simplemagnets/${id}`;

    // -- SIMPLE MAGNETS REMOVED REICPES -- //
    const SIMPLEMAGNETS_REMOVED_RECIPES = [
        sm('advancedmagnet')
    ];
    SIMPLEMAGNETS_REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));
    
    // -- ADVANCED MAGNET -- //
    event.shaped(sm('advancedmagnet'), [
        'SSL',
        'SE ',
        'SSR'
    ],
    {
        S: mi('steel_ingot'),
        R: mc('redstone_block'),
        L: mc('lapis_block'),
        E: sm('basicmagnet')
    })
    .id(st('advancedmagnet'));
});