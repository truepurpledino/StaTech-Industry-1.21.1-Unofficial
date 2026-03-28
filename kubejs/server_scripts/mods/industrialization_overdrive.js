// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;

    // -- EXTENDED INDUSTRIALIZATION REMOVED RECIPES -- //
    const IO_DELETED_ITEMS = [
        io('machines/multi_processing_array/assembler'),
        io('shaped/craft/terminal'),
        io('shaped/craft/terminal/assembler')
    ];
    IO_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));
    
    const IO_ITEMS_MODIFICATION = [{
        id : 'multi_processing_array',
        recipe:[
            'TQT',
            'GAG',
            'TMT'
        ],
        recipeInfo: {
            T: mi('solid_titanium_machine_casing'),
            G: '#c:glass_blocks',
            A: ei('processing_array'),
            Q: mi('quantum_upgrade'),
            M: mi('large_advanced_motor')
        },
        guideBookId: 'machines/multi_processing_array/craft'
    },
    {
        id : 'pyrolyse_oven',
        recipe: [
            'MAM',
            'CHC',
            'BAB'
        ],
        recipeInfo: {
            M: mi('cupronickel_wire_magnetic'),
            B: mi('bronze_plated_bricks'),
            H: mi('basic_machine_hull'),
            A: mi('analog_circuit'),
            C: mi('coke_oven')
        },
        guideBookId: 'machines/pyrolyse_oven/craft'
    }];
    
    IO_ITEMS_MODIFICATION.forEach(data => {
        event.remove( {id: io(data.id)} );
        event.shaped(io(data.id), data.recipe, data.recipeInfo).id(st(data.id));
        //guide book
        event.remove( {id: io(data.guideBookId)} );
        event.shaped(io(data.id), data.recipe, data.recipeInfo).id(io(data.guideBookId));
    });
    
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
