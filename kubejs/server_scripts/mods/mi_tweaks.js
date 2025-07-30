// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mit = (id) => `mi_tweaks:${id}`;
    let ei = (id) => `extended_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    // let tr = (id) => `techreborn:${id}`;
    // let ad = (id) => `ad_astra:${id}`;
    let cr = (id) => `create:${id}`;
    let ae = (id) => `ae2:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- EXTENDED INDUSTRIALIZATION REMOVED RECIPES -- //
/*     const MI_TWEAKS_DELETED_ITEMS = [
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
        ei('machines/processing_array/assembler')
    ];
    MI_TWEAKS_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
 */
    // -- LARGE CHEMICAL REACTOR -- //
    e.shaped(mit('large_chemical_reactor'), [
        'PRP',
        'UHU',
        'PCP'
    ],
    {
        P: mi('polytetrafluoroethylene_plate'),
        R: mi('chemical_reactor'),
        U: mi('advanced_motor'),
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit')
    })
    .id(st('large_chemical_reactor'));

    // -- PYROLYSE OVEN -- //
    // e.shaped(mi('pyrolyse_oven'), [
        // 'HIH',
        // 'ICI',
        // 'HAH'
    // ],
    // {
        // H: mi('cupronickel_coil'),
        // I: mi('inductor'),
        // C: mi('basic_machine_hull'),
        // A: mi('analog_circuit')
    // })
    // .id(st('pyrolyse_oven'));

});