// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;

    // -- EXTENDED INDUSTRIALIZATION REMOVED RECIPES -- //
    const IO_DELETED_ITEMS = [
        io('machines/multi_processing_array/craft'),
        io('machines/multi_processing_array/assembler'),
        io('shaped/craft/terminal'),
        io('shaped/craft/terminal/assembler')
    ];
    IO_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));

    // -- PROCESSING ARRAY -- //
    event.shaped(io('multi_processing_array'), [
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
    event.shaped(io('terminal'), [
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
