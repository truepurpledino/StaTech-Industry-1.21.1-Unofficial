// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:gag/${id}`;

    // Remove the default Time in a Bottle recipe
    const GAG_REMOVED_RECIPES = [
        gag('time_sand_pouch'),
        gag('pigment_jar_mixing'),
        gag('pigment_jar_from_dye'),
        gag('pigment_jar_splitting')
    ];
    GAG_REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));
    event.remove({ output: gag('pigment_jar') });

    // -- TIME IN A BOTTLE -- // 
    event.custom({
        type: sp('pedestal'),
        time: 400,
        tier: 'simple',
        colors: {
            "spectrum:cyan": 0,
            "spectrum:magenta": 4,
            "spectrum:yellow": 0,
            "spectrum:black": 0,
            "spectrum:white": 0
        },
        experience: 5.0,
        pattern: [
            'GGG',
            'DCD',
            'ABA'
        ],
        key: {
            G: { item: mi('gold_curved_plate') },
            D: { item: mc('diamond') },
            C: { item: mc('clock') },
            A: { item: sp('amethyst_powder') },
            B: { item: mc('glass_bottle') }
        },
        result: {
            id: gag('time_sand_pouch'),
            count: 1
        },
        required_advancement: sp('build_basic_pedestal_structure')
    }).id(st('time_sand_pouch')); 
}); 