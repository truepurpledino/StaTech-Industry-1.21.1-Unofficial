// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:mods/${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mg = (id) => `simplemagnets:${id}`;
    let es = (id) => `enderstorage:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let hg = (id) => `hangglider:${id}`;

    // -- REMOVED RECIPES -- //
    const MODS_DELETED = [
        mg('basicmagnet'),
        mg('advancedmagnet'),
        es('ender_chest'),
        es('ender_pouch'),
        es('ender_tank'),
        hg('reinforced_hang_glider'),
        hg('glider_framework')
    ];
    MODS_DELETED.forEach(id => e.remove({ id: id }));


    // -- ENDER CHEST -- //
    e.shaped(es('ender_chest'), [
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
    e.shaped(es('ender_tank'), [
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
    e.shaped(mg('basicmagnet'), [
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
    e.shaped(mg('advancedmagnet'), [
        'SSR',
        'SE ',
        'SSL'
    ],
    {
        S: mi('steel_ingot'),
        R: mc('redstone_block'),
        L: mc('lapis_block'),
        E: mg('basicmagnet')
    })
    .id(st('advancedmagnet'));

    // -- REINFORCED HANG GLIDER -- //
    e.shaped(hg('glider_framework'), [
        ' R ',
        'R R',
        'RRR'
    ],
    {
        R: mi('bronze_rod')
    })
    .id(st('glider_framework'));

    // -- GLIDER FRAMWORK -- //
    e.shaped(hg('reinforced_hang_glider'), [
        'SGS'
    ],
    {
        S: mi('steel_plate'),
        G: hg('hang_glider')
    })
    .id(st('reinforced_hang_glider'));
});

