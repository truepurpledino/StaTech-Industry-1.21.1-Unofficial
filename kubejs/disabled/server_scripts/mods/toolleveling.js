// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:toolleveling/${id}`;
    let sp = (id) => `spectrum:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tl = (id) => `toolleveling:${id}`;

    // Remove the default Tool Leveing Table recipe
    e.remove({ id: tl('tool_leveling_table') });

    // -- TOOL LEVELING TABLE -- //
    e.custom({
        type: sp('pedestal'),
        time: 1200,
        tier: 'advanced',
        cyan: 16,
        magenta: 16,
        yellow: 16,
        white: 0,
        black: 16,
        experience: 20.0,
        pattern: [
            ' G ',
            'GBG',
            'OEO'
        ],
        key: {
            G: { tag: 'c:gold_ingots' },
            B: { item: sp('bedrock_dust') },
            O: { item: mc('obsidian') },
            E: { item: mc('enchanting_table') }
        },
        result: {
            item: tl('tool_leveling_table'),
            count: 1,
        },
        required_advancement: [
            sp('midgame/break_decayed_bedrock')
        ]
    })
    .id(st('tool_leveling_table'));
});