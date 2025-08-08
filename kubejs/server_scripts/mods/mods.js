// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:mods/${id}`;

    // -- REMOVED RECIPES -- //
    const MODS_DELETED = [
        sm('basicmagnet'),
        sm('advancedmagnet'),
        es('ender_chest'),
        es('ender_pouch'),
        es('ender_tank'),
        hg('reinforced_hang_glider'),
        hg('glider_framework'),
        mr('red_alloy_ingot'),
        an('angel_ring'),
        an('diamond_ring'),
        an('angel_ring'),
        gag('time_sand_pouch'),
        gag('pigment_jar_mixing'),
        gag('pigment_jar_from_dye'),
        gag('pigment_jar_splitting'),
        ec('explorers_compass')
    ];
    MODS_DELETED.forEach(id => event.remove({ id: id }));
    event.remove({ output: gag('pigment_jar') })

    // -- ENDER CHEST -- //
    event.shaped(es('ender_chest'), [
        'BWB',
        'OCO',
        'BEB'
    ],
    {
        B: mc('blaze_rod'),
        W: '#c:wools/white',
        O: mc('obsidian'),
        C: mi('configurable_chest'),
        E: mc('ender_eye')
    })
        .id(st('ender_chest'));

    // -- ENDER TANK -- //
    event.shaped(es('ender_tank'), [
        'BWB',
        'OTO',
        'BEB'
    ],
    {
        B: mc('blaze_rod'),
        W: '#c:wools/white',
        O: mc('obsidian'),
        T: mi('configurable_tank'),
        E: mc('ender_eye')
    })
    .id(st('ender_tank'));

    // -- BASIC MAGNET -- //
    event.shaped(sm('basicmagnet'), [
        'SSR',
        'SE ',
        'SSL'
    ],
    {
        S: mi('bronze_ingot'),
        R: mc('redstone'),
        L: mc('lapis_lazuli'),
        E: mc('ender_pearl')
    })
    .id(st('basicmagnet'));

    // -- ADVANCED MAGNET -- //
    event.shaped(sm('advancedmagnet'), [
        'SSR',
        'SE ',
        'SSL'
    ],
    {
        S: mi('steel_ingot'),
        R: mc('redstone_block'),
        L: mc('lapis_block'),
        E: sm('basicmagnet')
    })
    .id(st('advancedmagnet'));

    // -- REINFORCED HANG GLIDER -- //
    event.shaped(hg('glider_framework'), [
        ' R ',
        'R R',
        'RRR'
    ],
    {
        R: mi('bronze_rod')
    })
    .id(st('glider_framework'));

    // -- GLIDER FRAMWORK -- //
    event.shaped(hg('reinforced_hang_glider'), [
        'SGS'
    ],
    {
        S: mi('steel_plate'),
        G: hg('hang_glider')
    })
    .id(st('reinforced_hang_glider'));

    // -- EXPLORER'S COMPASS -- //
    event.shaped(ec('explorerscompass'), [
        'WSW',
        'SCS',
        'WSW'
    ],
    {
        S: mi('steel_plate'),
        C: mc('compass'),
        W: mc('cobweb')
    })
    .id(st('explorerscompass'));
});

