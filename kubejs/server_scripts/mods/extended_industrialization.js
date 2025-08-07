// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;

    // -- EXTENDED INDUSTRIALIZATION REMOVED RECIPES -- //
    const EI_DELETED_ITEMS = [
        ei('machines/large_electric_furnace/assembler'),
        ei('machines/large_electric_furnace/craft'),
        ei('machines/bending_machine/assembler/bronze'),
        ei('machines/bending_machine/craft/bronze'),
        ei('machines/bending_machine/assembler/electric'),
        ei('machines/bending_machine/craft/electric'),
        ei('machines/bending_machine/unpacker/downgrade_steel'),
        ei('machines/bending_machine/packer/upgrade_steel'),
        ei('machines/bending_machine/craft/upgrade_steel'),
        ei('machines/alloy_smelter/craft/electric'),
        ei('machines/alloy_smelter/assembler/electric'),
        ei('machines/processing_array/craft'),
        ei('machines/processing_array/assembler'),
        ei('tool/craft/steam_chainsaw')
    ];
    EI_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));

    // -- LARGE CHEMICAL REACTOR -- //
    // event.shaped(mi('large_chemical_reactor'), [
        // 'PRP',
        // 'UHU',
        // 'PCP'
    // ],
    // {
        // P: '#c:plates/polytetrafluoroethylene',
        // R: mi('chemical_reactor'),
        // U: mi('advanced_motor'),
        // H: mi('turbo_machine_hull'),
        // C: mi('digital_circuit')
    // })
    // .id(st('large_chemical_reactor'));

    // -- STEAM CHAINSAW -- //
    event.shaped(ei('steam_chainsaw'), [
        'FDD',
        'PGD',
        'BPF'
    ],
    {
        F: mc('furnace'),
        D: '#c:gems/diamond',
        P: '#c:large_plates/steel',
        G: '#c:gears/copper',
        B: mc('bucket')
    })
    .id(st('steam_chainsaw'));

    // -- ALLOY SMELTER -- //
    event.shaped(ei('electric_alloy_smelter'), [
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

    // -- MEGA SMELTER -- //
    event.shaped(ei('large_electric_furnace'), [
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
    event.shaped(ei('electric_bending_machine'), [
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
    event.shaped(ei('processing_array'), [
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
    // event.add('c:lignite_coal_ores', 'modern_industrialization:lignite_coal_ore')
    // event.add('c:lignite_coal_ores', 'modern_industrialization:deepslate_lignite_coal_ore')
    // event.add('c:antimony_ores', 'modern_industrialization:antimony_ore')
    // event.add('c:antimony_ores', 'modern_industrialization:deepslate_antimony_ore')
    // event.add('c:bauxite_ores', 'modern_industrialization:bauxite_ore')
    // event.add('c:bauxite_ores', 'modern_industrialization:deepslate_bauxite_ore')
    // event.add('c:iridium_ores', 'modern_industrialization:iridium_ore')
    // event.add('c:iridium_ores', 'modern_industrialization:deepslate_iridium_ore')
    // event.add('c:lead_ores', 'modern_industrialization:lead_ore')
    // event.add('c:lead_ores', 'modern_industrialization:deepslate_lead_ore')
    // event.add('c:mozanite_ores', 'modern_industrialization:mozanite_ore')
    // event.add('c:mozanite_ores', 'modern_industrialization:deepslate_mozanite_ore')
    // event.add('c:nickel_ores', 'modern_industrialization:nickel_ore')
    // event.add('c:nickel_ores', 'modern_industrialization:deepslate_nickel_ore')
    // event.add('c:platinum_ores', 'modern_industrialization:platinum_ore')
    // event.add('c:salt_ores', 'modern_industrialization:salt_ore')
    // event.add('c:salt_ores', 'modern_industrialization:deepslate_salt_ore')
    // event.add('c:tin_ores', 'modern_industrialization:tin_ore')
    // event.add('c:tin_ores', 'modern_industrialization:deepslate_tin_ore')
    // event.add('c:titanium_ores', 'modern_industrialization:titanium_ore')
    // event.add('c:tungsten_ores', 'modern_industrialization:tungsten_ore')
    // event.add('c:tungsten_ores', 'modern_industrialization:deepslate_tungsten_ore')
    // event.add('c:uranium_ores', 'modern_industrialization:uranium_ore')
    // event.add('c:uranium_ores', 'modern_industrialization:deepslate_uranium_ore')
//});