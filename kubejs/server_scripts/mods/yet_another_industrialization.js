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

ServerEvents.tags('item', event => {

    const MIXED_HATCH_TIER = [
        'bronze',
        'steel',
        'advanced',
        'turbo',
        'highly_advanced'
    ];
    MIXED_HATCH_TIER.forEach(id => {
        event.add('kubejs:mixed_input_hatch', yai(`${id}_mixed_input_hatch`))
        event.add('kubejs:mixed_output_hatch', yai(`${id}_mixed_output_hatch`))
    });
});