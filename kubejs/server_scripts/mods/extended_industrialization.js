// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let ei = (id) => `extended_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    // let tr = (id) => `techreborn:${id}`;
    // let ad = (id) => `ad_astra:${id}`;
    let cr = (id) => `create:${id}`;
    let ae = (id) => `ae2:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- EXTENDED INDUSTRIALIZATION REMOVED RECIPES -- //
    const EI_DELETED_ITEMS = [
        ei('machines/large_electric_furnace/craft'),
        ei('machines/bending_machine/assembler/bronze'),
        ei('machines/bending_machine/assembler/electric'),
        // ei('machines/bending_machine/craft/bronze'),
        ei('machines/bending_machine/craft/electric'),
        ei('machines/bending_machine/unpacker/downgrade_steel'),
        ei('machines/bending_machine/packer/upgrade_steel'),
        // ei('machines/bending_machine/craft/upgrade_steel'),
        ei('machines/alloy_smelter/craft/electric'),
        ei('machines/processing_array/craft'),
        ei('tool/craft/tesla_handheld_receiver')
    ];
    EI_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));

    // -- ALLOY SMELTER -- //
    e.shaped(ei('electric_alloy_smelter'), [
        'MAM',
        'IFI',
        'TAT'
    ],
    {
        M: mi('cupronickel_wire_magnetic'),
        A: mi('analog_circuit'),
        I: mi('inductor'),
        T: mi('tin_cable'),
        F: mi('electric_furnace')
    })
    .id(st('electric_alloy_smelter'));

    // -- TESLA HANDHELD RECEIVER -- //
    e.shaped(ei('tesla_handheld_receiver'), [
        'S  ',
        'CTT',
        'EDD'
    ],
    {
        S: ei('silver_tesla_top_load'),
        E: mi('electronic_circuit'),
        T: mi('transistor'),
        D: mi('diode'),
        C: mi('cupronickel_coil')
    })
    .id(st('tesla_handheld_receiver'));

    // -- MEGA SMELTER -- //
    e.shaped(ei('large_electric_furnace'), [
        'MCM',
        'FHF',
        'MCM'
    ],
    {
        M: mi('cupronickel_wire_magnetic'),
        C: mi('electronic_circuit'),
        F: mi('electric_furnace'),
        H: mi('advanced_machine_hull')
    })
    .id(st('large_electric_furnace'));

    // -- ELECTRIC BENDING MACHINES -- //
    e.shaped(ei('electric_bending_machine'), [
        'MEM',
        'PHP',
        'NCN'
    ],
    {
        M: mi('motor'),
        N: mi('large_motor'),
        C: mi('tin_cable'),
        P: mi('piston'),
        H: mi('basic_machine_hull'),
        E: mi('electronic_circuit')
    })
    .id(st('electric_bending_machine'));

    // -- PROCESSING ARRAY -- //
    e.shaped(ei('processing_array'), [
        'SQS',
        'GAG',
        'SQS'
    ],
    {
        S: mi('clean_stainless_steel_machine_casing'),
        G: '#c:glass_blocks',
        A: mi('assembler'),
        Q: mi('quantum_circuit')
    })
    .id(st('processing_array'));
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