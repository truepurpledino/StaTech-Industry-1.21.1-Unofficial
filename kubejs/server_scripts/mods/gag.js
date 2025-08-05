// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

 ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:gag/${id}`;

    // Remove the default Time in a Bottle recipe
    event.remove({id: gag('time_sand_pouch')});

    // -- TIME IN A BOTTLE -- // 
    event.custom({
        type: pa('pedestal'),
        time: 400,
        tier: 'simple',
        colors: {
            "pastel:cyan": 0,
            "pastel:magenta": 4,
            "pastel:yellow": 0,
            "pastel:black": 0,
            "pastel:white": 0
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
            A: { item: pa('amethyst_powder') },
            B: { item: mc('glass_bottle') }
        },
        result: {
            id: gag('time_sand_pouch'),
            count: 1
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('time_sand_pouch'));
}); 