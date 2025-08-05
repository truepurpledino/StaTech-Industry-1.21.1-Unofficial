// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let ei = (id) => `extended_industrialization:${id}`;
    let io = (id) => `industrialization_overdrive:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let cr = (id) => `create:${id}`;
    let ae = (id) => `ae2:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- EXTENDED INDUSTRIALIZATION REMOVED RECIPES -- //
    const IO_DELETED_ITEMS = [
        io('machines/multi_processing_array/craft'),
        io('shaped/craft/terminal')
    ];
    IO_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));

    // -- PROCESSING ARRAY -- //
    e.shaped(io('multi_processing_array'), [
        'TQT',
        'GAG',
        'TMT'
    ],
    {
        T: mi('solid_titanium_machine_casing'),
        G: '#c:glass_blocks',
        A: ei('processing_array'),
        Q: mi('quantum_upgrade'),
        M: mi('large_advanced_motor')
    })
    .id(st('multi_processing_array'));

    // -- MULTIBLOCK BUILDER (TERMINAL) -- //
    e.shaped(io('terminal'), [
        'AGA',
        'ACA'
    ],
    {
        A: '#c:plates/aluminum',
        G: '#c:glass_panes',
        C: mi('analog_circuit')
    })
    .id(st('terminal'));
});


// Block tagging provided by kevintok
// ServerEvents.tags('block', e => {
    // e.add('c:lignite_coal_ores', 'modern_industrialization:lignite_coal_ore')
    // e.add('c:lignite_coal_ores', 'modern_industrialization:deepslate_lignite_coal_ore')
    // e.add('c:antimony_ores', 'modern_industrialization:antimony_ore')
    // e.add('c:antimony_ores', 'modern_industrialization:deepslate_antimony_ore')
    // e.add('c:bauxite_ores', 'modern_industrialization:bauxite_ore')
    // e.add('c:bauxite_ores', 'modern_industrialization:deepslate_bauxite_ore')
    // e.add('c:iridium_ores', 'modern_industrialization:iridium_ore')
    // e.add('c:iridium_ores', 'modern_industrialization:deepslate_iridium_ore')
    // e.add('c:lead_ores', 'modern_industrialization:lead_ore')
    // e.add('c:lead_ores', 'modern_industrialization:deepslate_lead_ore')
    // e.add('c:mozanite_ores', 'modern_industrialization:mozanite_ore')
    // e.add('c:mozanite_ores', 'modern_industrialization:deepslate_mozanite_ore')
    // e.add('c:nickel_ores', 'modern_industrialization:nickel_ore')
    // e.add('c:nickel_ores', 'modern_industrialization:deepslate_nickel_ore')
    // e.add('c:platinum_ores', 'modern_industrialization:platinum_ore')
    // e.add('c:salt_ores', 'modern_industrialization:salt_ore')
    // e.add('c:salt_ores', 'modern_industrialization:deepslate_salt_ore')
    // e.add('c:tin_ores', 'modern_industrialization:tin_ore')
    // e.add('c:tin_ores', 'modern_industrialization:deepslate_tin_ore')
    // e.add('c:titanium_ores', 'modern_industrialization:titanium_ore')
    // e.add('c:tungsten_ores', 'modern_industrialization:tungsten_ore')
    // e.add('c:tungsten_ores', 'modern_industrialization:deepslate_tungsten_ore')
    // e.add('c:uranium_ores', 'modern_industrialization:uranium_ore')
    // e.add('c:uranium_ores', 'modern_industrialization:deepslate_uranium_ore')
//});