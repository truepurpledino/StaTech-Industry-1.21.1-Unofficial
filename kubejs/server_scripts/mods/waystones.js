// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:waystones/${id}`;
    let pa = (id) => `pastel:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ws = (id) => `waystones:${id}`;
    
    // -- WAYSTONES REMOVED RECIPES -- //
    const WAYSTONE_REMOVED_RECIPES = [
        ws('warp_stone'),
        ws('return_scroll'),
        ws('bound_scroll'),
        ws('warp_scroll'),
        ws('warp_dust'),
        ws('warp_plate')
    ];
    WAYSTONE_REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- WARP STONE -- //
    e.custom({
        type: pa('fusion_shrine'),
        time: 400,
        experience: 30.0,
        ingredients: [
            { item: ws('warp_dust'), count: 4 },
            { item: mc('ender_pearl'), count: 4 }
        ],
        result: {
            id: ws('warp_stone')
        },
        required_advancement: pa('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: [
            'visual_explosions_on_shrine',
            'nothing',
            'visual_explosions_on_shrine'
        ],
        finish_crafting_effect: 'lightning_on_shrine'
    })
    .id(st('warp_stone'));

    // -- WARP PLATE -- //
    e.custom({
        type: pa('pedestal'),
        time: 400,
        tier: 'simple',
        colors: {
            "pastel:cyan": 2,
            "pastel:magenta": 2,
            "pastel:yellow": 2,
            "pastel:black": 0,
            "pastel:white": 0
        },
        experience: 10.0,
        pattern: [
            'SWS',
            'WFW',
            'SWS'
        ],
        key: {
            W: { item: ws('warp_dust') },
            F: { item: mc('flint') },
            S: { item: mc('stone_bricks') }
        },
        result: {
            id: ws('warp_plate'),
            count: 2
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('warp_plate'));

    // -- RETURN SCROLL -- //
    e.custom({
        type: pa('pedestal'),
        time: 200,
        tier: 'simple',
        colors: {
            "pastel:cyan": 1,
            "pastel:magenta": 1,
            "pastel:yellow": 1,
            "pastel:black": 0,
            "pastel:white": 0
        },
        experience: 10.0,
        pattern: [
            'GDG',
            'PPP'
        ],
        key: {
            G: { tag: 'c:ingots/gold' },
            D: { item: ws('warp_dust') },
            P: { item: mc('paper') }
        },
        result: {
            id: ws('return_scroll'),
            count: 1
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('return_scroll'));

    // -- BOUND SCROLL -- //
    e.custom({
        type: pa('pedestal'),
        time: 200,
        tier: 'simple',
        colors: {
            "pastel:cyan": 1,
            "pastel:magenta": 1,
            "pastel:yellow": 1,
            "pastel:black": 0,
            "pastel:white": 0
        },
        experience: 10.0,
        pattern: [
            'DDD',
            'GEG',
            'PPP'
        ],
        key: {
            D: { item: ws('warp_dust') },
            G: { tag: 'c:ingots/gold' },
            E: { item: mc('ender_pearl') },
            P: { item: mc('paper') }
        },
        result: {
            id: ws('bound_scroll'),
            count: 1
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('bound_scroll'));

    // -- WARP SCROLL -- //
    e.custom({
        type: pa('pedestal'),
        time: 200,
        tier: 'simple',
        colors: {
            "pastel:cyan": 1,
            "pastel:magenta": 1,
            "pastel:yellow": 1,
            "pastel:black": 0,
            "pastel:white": 0
        },
        experience: 10.0,
        pattern: [
            'GDG',
            'GEG',
            'PPP'
        ],
        key: {
            G: { tag: 'c:ingots/gold' },
            D: { item: ws('warp_dust') },
            P: { item: mc('paper') },
            E: { item: mc('ender_pearl') }
        },
        result: {
            id: ws('warp_scroll'),
            count: 1
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('warp_scroll'));

    // -- WARP DUST -- //
    e.custom({
        type: pa('pedestal'),
        time: 200,
        tier: 'simple',
        colors: {
            "pastel:cyan": 2,
            "pastel:magenta": 2,
            "pastel:yellow": 2,
            "pastel:black": 0,
            "pastel:white": 0
        },
        experience: 10.0,
        pattern: [
            'EA'
        ],
        key: {
            E: { item: 'ae2:ender_dust' },
            A: { item: pa('amethyst_powder') }
        },
        result: {
            id: ws('warp_dust'),
            count: 4
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('warp_dust'));
});