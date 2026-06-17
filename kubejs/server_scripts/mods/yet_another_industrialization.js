// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:yet_another_industrialization/${id}`;

    // -- YET ANOTHER INDUSTRIALIZATION REMOVED REICPES -- //
    const YET_ANOTHER_INDUSTRIALIZATION = [
        yai('assembler/arboreous_greenhouse'),
        yai('craft/arboreous_greenhouse'),
        yai('mixer/elytra_duplication')
    ];
    YET_ANOTHER_INDUSTRIALIZATION.forEach(id => event.remove( {id: id} ));

    // -- ARBOREOUS GREENHOUSE REMOVAL -- //
    event.remove({ type: yai('arboreous_greenhouse') })
});