// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:waystones/${id}`;
    
    // -- WAYSTONES REMOVED RECIPES -- //
    const WAYSTONE_REMOVED_RECIPES = [
        wy('warp_stone'),
        wy('return_scroll'),
        wy('bound_scroll'),
        wy('warp_scroll'),
        wy('warp_dust'),
        wy('warp_plate')
    ];
    WAYSTONE_REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- WARP STONE -- //
    event.custom({
        type: pa('fusion_shrine'),
        time: 400,
        experience: 30.0,
        ingredients: [
            { item: wy('warp_dust'), count: 4 },
            { item: mc('ender_pearl'), count: 4 }
        ],
        result: {
            id: wy('warp_stone')
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
    event.custom({
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
            W: { item: wy('warp_dust') },
            F: { item: mc('flint') },
            S: { item: mc('stone_bricks') }
        },
        result: {
            id: wy('warp_plate'),
            count: 2
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('warp_plate'));

    // -- RETURN SCROLL -- //
    event.custom({
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
            D: { item: wy('warp_dust') },
            P: { item: mc('paper') }
        },
        result: {
            id: wy('return_scroll'),
            count: 1
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('return_scroll'));

    // -- BOUND SCROLL -- //
    event.custom({
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
            D: { item: wy('warp_dust') },
            G: { tag: 'c:ingots/gold' },
            E: { item: mc('ender_pearl') },
            P: { item: mc('paper') }
        },
        result: {
            id: wy('bound_scroll'),
            count: 1
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('bound_scroll'));

    // -- WARP SCROLL -- //
    event.custom({
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
            D: { item: wy('warp_dust') },
            P: { item: mc('paper') },
            E: { item: mc('ender_pearl') }
        },
        result: {
            id: wy('warp_scroll'),
            count: 1
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('warp_scroll'));

    // -- WARP DUST -- //
    event.custom({
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
            id: wy('warp_dust'),
            count: 4
        },
        required_advancement: pa('build_basic_pedestal_structure')
    })
    .id(st('warp_dust'));
});