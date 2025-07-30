// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:ae2/${id}`;
    let ste = (id) => `statech:extendedae/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let ae = (id) => `ae2:${id}`;
    let eae = (id) => `extendedae:${id}`;
    let wt = (id) => `ae2wtlib:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- AE2 REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        ae('network/blocks/inscribers'),
        ae('transform/fluix_crystals'),
        ae('transform/fluix_crystal'),
        ae('transform/certus_quartz_crystals'),
        ae('network/blocks/controller'),
        ae('network/blocks/crystal_processing_charger'),
        ae('network/blocks/energy_vibration_chamber'),
        ae('network/crafting/patterns_blank'),
        ae('misc/tank_sky_stone'),
        ae('network/blocks/quantum_ring'),
        ae('network/blocks/spatial_io_port'),
        ae('network/blocks/storage_drive'),
        ae('network/blocks/storage_chest'),
        ae('network/blocks/interfaces_interface'),
        ae('network/blocks/cell_workbench'),
        ae('network/blocks/io_port'),
        ae('network/blocks/io_condenser'),
        ae('network/blocks/energy_energy_acceptor'),
        ae('network/blocks/crystal_processing_growth_accelerator'),
        ae('network/crafting/cpu_crafting_unit'),
        ae('network/blocks/pattern_providers_interface'),
        ae('network/crafting/molecular_assembler'),
        ae('network/blocks/spatial_anchor'),
        ae('tools/misctools_entropy_manipulator'),
        ae('tools/misctools_charged_staff'),
        ae('tools/network_color_applicator'),
        ae('tools/matter_cannon'),
        ae('tools/network_memory_card'),
        ae('materials/basiccard'),
        ae('materials/advancedcard'),
        ae('network/cells/item_cell_housing'),
        ae('network/cells/fluid_cell_housing'),
        ae('network/wireless_part'),
        ae('network/wireless_booster'),
        ae('network/cells/view_cell'),
        ae('network/cells/item_storage_cell_1k'),
        ae('network/cells/item_storage_cell_4k'),
        ae('network/cells/item_storage_cell_16k'),
        ae('network/cells/item_storage_cell_64k'),
        ae('network/cells/item_storage_cell_256k'),
        ae('network/cells/fuid_cell_housing'),
        ae('network/cells/fluid_storage_cell_1k'),
        ae('network/cells/fluid_storage_cell_4k'),
        ae('network/cells/fluid_storage_cell_16k'),
        ae('network/cells/fluid_storage_cell_64k'),
        ae('network/cells/fluid_storage_cell_256k'),
        ae('network/cells/spatial_storage_cell_2_cubed'),
        ae('network/cells/spatial_storage_cell_16_cubed'),
        ae('network/cells/spatial_storage_cell_128_cubed'),
        ae('network/parts/panels_semi_dark_monitor'),
        ae('network/parts/import_bus'),
        ae('network/parts/annihilation_plane_alt2'),
        ae('network/parts/annihilation_plane_alt'),
        ae('network/parts/formation_plane_alt'),
        ae('network/parts/formation_plane'),
        ae('network/parts/tunnels_me'),
        ae('network/parts/export_bus'),
        wt('magnet_card'),
        ae('network/crystal_resonance_generator'),
        ae('network/blocks/energy_dense_energy_cell'),
        eae('infinity_water_cell'),
        eae('infinity_cobblestone_cell')
    ];
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    // -- REMOVE ALL INSCRIBER RECIPES -- // 
    e.remove({ type: ae('inscriber') });

    // -- CONTROLLER -- //
    e.shaped(ae('controller'), [
        'EFE',
        'CHC',
        'LFP'
    ],
    {
        E: ae('engineering_processor'),
        F: ae('fluix_crystal'),
        C: mi('analog_circuit'),
        H: mi('basic_machine_hull'),
        L: ae('logic_processor'),
        P: ae('calculation_processor')
    })
    .id(st('controller'));

    // -- CHARGER -- //
     e.shaped(ae('charger'), [
        'SCS',
        'B  ',
        'SCS'
    ],
    {
        S: mi('steel_large_plate'),
        C: mi('copper_wire'),
        B: mi('redstone_battery')
    })
    .id(st('charger')); 

    // -- BLANK PATTERN -- //
    e.shaped(ae('blank_pattern'), [
        'QGQ',
        'GCG',
        'SSS'
    ],
    {
        Q: ae('quartz_glass'),
        G: '#c:dusts/glowstone',
        C: '#c:gems/certus_quartz',
        S: '#c:plates/aluminum'
    })
    .id(st('blank_pattern'));

/*     // -- ME SECURITY TERMINAL -- //
    e.shaped(ae('security_station'), [
        'SCS',
        'FOF',
        'SES'
    ],
    {
        S: '#c:plates/steel',
        C: ae('chest'),
        F: ae('fluix_glass_cable'),
        O: ae('cell_component_16k'),
        E: ae('engineering_processor')
    })
    .id(st('security_station'));
 */
    // -- ME QUANTUM RING -- //
    e.shaped(ae('quantum_ring'), [
        'SLS',
        'ECF',
        'SLS'
    ],
    {
        S: '#c:plates/aluminum',
        L: ae('logic_processor'),
        E: ae('engineering_processor'),
        C: ae('energy_cell'),
        F: '#ae2:smart_dense_cable',
    })
    .id(st('quantum_ring'));

    // -- SPATIAL IO PORT -- //
    e.shaped(ae('spatial_io_port'), [
        'GGG',
        'FIF',
        'SES'
    ],
    {
        S: '#c:plates/steel',
        G: '#c:glass_blocks',
        F: ae('fluix_glass_cable'),
        I: ae('io_port'),
        E: ae('engineering_processor')
    })
    .id(st('spatial_io_port'));

    // -- ME DRIVE -- // 
    e.shaped(ae('drive'), [
        'SES',
        'FHF',
        'SES'
    ],
    {
        S: mi('steel_large_plate'),
        H: mi('basic_machine_hull'),
        E: ae('engineering_processor'),
        F: ae('fluix_glass_cable')
    })
    .id(st('drive'));
    
    // -- ME CHEST -- //
    e.shaped(ae('chest'), [
        'GTG',
        'F F',
        'SCS'
    ],
    {
        G: '#c:glass_blocks',
        T: ae('terminal'),
        F: ae('fluix_glass_cable'),
        S: '#c:plates/steel',
        C: '#c:plates/copper'
    })
    .id(st('chest'));

    // -- ME INTERFACE -- //
    e.shaped(ae('interface'), [
        'SGS',
        'A F',
        'SGS'
    ],
    {
        S: '#c:plates/steel',
        G: '#c:glass_blocks',
        A: ae('annihilation_core'),
        F: ae('formation_core')
    })
    .id(st('interface'));

    // -- CELL WORKBENCH -- //
    e.shaped(ae('cell_workbench'), [
        'WCW',
        'SHS',
        'SSS'
    ],
    {
        W: '#minecraft:wool',
        C: ae('calculation_processor'),
        S: '#c:plates/steel',
        H: '#c:chests/wooden'
    })
    .id(st('cell_workbench'));

    // -- ME IO PORT -- //
    e.shaped(ae('io_port'), [
        'GGG',
        'DFD',
        'SLS'
    ],
    {
        G: '#c:glass_blocks',
        D: ae('drive'),
        F: ae('fluix_glass_cable'),
        S: '#c:plates/steel',
        L: ae('logic_processor')
    })
    .id(st('io_port'));

    // -- MATTER CONDENSER -- //
    e.shaped(ae('condenser'), [
        'SGS',
        'GFG',
        'SGS'
    ],
    {
        S: '#c:plates/aluminum',
        G: '#c:glass_blocks',
        F: ae('fluix_dust')
    })
    .id(st('condenser'));

    // -- ENERGY ACCEPTOR -- //
    e.shaped(ae('energy_acceptor'), [
        'SGS',
        'GCG',
        'SGS'
    ],
    {
        S: '#c:plates/steel',
        G: ae('quartz_glass'),
        C: '#c:plates/copper'
    })
    .id(st('energy_acceptor'));

    // -- CRYSTAL GROWTH ACCELERATOR -- // 
    e.shaped(ae('growth_accelerator'), [
        'SFS',
        'GBG',
        'SFS'
    ],
    {
        S: '#c:plates/steel',
        F: ae('fluix_glass_cable'),
        G: ae('quartz_glass'),
        B: ae('fluix_block')
    })
    .id(st('growth_accelerator'));

    // -- CRAFTING UNIT -- //
    e.shaped(ae('crafting_unit'), [
        'SCS',
        'FLF',
        'SCS'
    ],
    {
        S: '#c:plates/aluminum',
        C: ae('calculation_processor'),
        F: ae('fluix_glass_cable'),
        L: ae('logic_processor')
    })
    .id(st('crafting_unit'));

    // -- ME PATTERN PROVIDER -- //
    e.shaped(ae('pattern_provider'), [
        'SCS',
        'A F',
        'SCS'
    ],
    {
        S: '#c:plates/aluminum',
        C: '#c:player_workstations/crafting_tables',
        A: ae('annihilation_core'),
        F: ae('formation_core')
    })
    .id(st('pattern_provider'));

    // -- MOLECULAR ASSEMBLER -- //
    e.shaped(ae('molecular_assembler'), [
        'SGS',
        'AWF',
        'SGS'
    ],
    {
        S: '#c:plates/aluminum',
        G: ae('quartz_glass'),
        A: ae('annihilation_core'),
        W: mi('advanced_machine_hull'),
        F: ae('formation_core')
    })
    .id(st('molecular_assembler'));

    // -- SPATIAL ANCHOR -- //
    e.shaped(ae('spatial_anchor'), [
        'PPP',
        'FCF',
        'SES'
    ],
    {
        P: ae('spatial_pylon'),
        F: ae('fluix_glass_cable'),
        C: ae('spatial_cell_component_128'),
        S: '#c:plates/steel',
        E: ae('engineering_processor')
    })
    .id(st('spatial_anchor'));

    // -- ENTROPY MANIPULATOR -- //
    e.shaped(ae('entropy_manipulator'), [
        'FC ',
        'ES ',
        '  S'
    ],
    {
        F: ae('fluix_crystal'),
        C: ae('energy_cell'),
        E: ae('engineering_processor'),
        S: '#c:plates/aluminum'
    })
    .id(st('entropy_manipulator'));

    // -- CHARGED STAFF -- //
    e.shaped(ae('charged_staff'), [
        'C  ',
        ' S ',
        '  S'
    ],
    {
        C: ae('charged_certus_quartz_crystal'),
        S: '#c:plates/aluminum'
    })
    .id(st('charged_staff'));

    // -- COLOR APPLICATOR -- //
    e.shaped(ae('color_applicator'), [
        'FS ',
        'SC ',
        '  E'
    ],
    {
        F: ae('formation_core'),
        S: '#c:plates/aluminum',
        C: ae('cell_component_4k'),
        E: ae('energy_cell')
    })
    .id(st('color_applicator'));

    // -- MATTER CANNON -- //
    e.shaped(ae('matter_cannon'), [
        'SSF',
        'CE ',
        'S  '
    ],
    {
        S: '#c:plates/aluminum',
        F: ae('formation_core'),
        C: ae('cell_component_4k'),
        E: ae('energy_cell')
    })
    .id(st('matter_cannon'));

    // -- MEMORY CARD -- // 
    e.shaped(ae('memory_card'), [
        'CSS',
        'GRG'
    ],
    {
        C: ae('calculation_processor'),
        S: '#c:plates/iron',
        G: '#c:plates/gold',
        R: '#c:dusts/redstone'
    })
    .id(st('memory_card'));

    // -- BASIC CARD -- //
    e.shaped('2x ' + ae('basic_card'), [
        'GS ',
        'RCS',
        'GS '
    ],
    {
        G: '#c:ingots/gold',
        S: '#c:plates/steel',
        R: '#c:dusts/redstone',
        C: ae('calculation_processor')
    })
    .id(st('basic_card'));

    // -- ADVANCED CARD -- //
    e.shaped('2x ' + ae('advanced_card'), [
        'DS ',
        'RCS',
        'DS '
    ],
    {
        D: '#c:gems/diamond',
        S: '#c:plates/steel',
        R: '#c:dusts/redstone',
        C: ae('calculation_processor')
    })
    .id(st('advanced_card'));

    // -- ME ITEM CELL HOUSING -- //
    e.shaped(ae('item_cell_housing'), [
        'GRG',
        'R R',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        S: '#c:plates/steel'
    })
    .id(st('item_cell_housing'));

    // -- WIRELESS RECEIVER -- // 
    e.shaped(ae('wireless_receiver'), [
        ' F ',
        'SQS',
        ' S '
    ],
    {
        F: ae('fluix_pearl'),
        S: '#c:plates/aluminum',
        Q: ae('quartz_fiber')
    })
    .id(st('wireless_receiver'));

    // -- WIRELESS BOOSTER -- // 
    e.shaped('2x ' + ae('wireless_booster'), [
        'FQE',
        'SSS'
    ],
    {
        F: ae('fluix_dust'),
        Q: '#c:gems/certus_quartz',
        E: ae('ender_dust'),
        S: '#c:plates/aluminum'
    })
    .id(st('wireless_booster'));

    // -- VIEW CELL -- //
    e.shaped(ae('view_cell'), [
        'GRG',
        'RQR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        Q: '#c:gems/certus_quartz',
        S: '#c:plates/steel'
    })
    .id(st('view_cell'));

    // -- 1K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_1k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('cell_component_1k'),
        S: '#c:plates/steel'
    })
    .id(st('item_storage_cell_1k'));

    // -- 4K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_4k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('cell_component_4k'),
        S: '#c:plates/steel'
    })
    .id(st('item_storage_cell_4k'));

    // -- 16K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_16k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('cell_component_16k'),
        S: '#c:plates/steel'
    })
    .id(st('item_storage_cell_16k'));

    // -- 64K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_64k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('cell_component_64k'),
        S: '#c:plates/steel'
    })
    .id(st('item_storage_cell_64k'));

    // -- 256K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_256k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('cell_component_256k'),
        S: '#c:plates/steel'
    })
    .id(st('item_storage_cell_256k'));

    // -- ME FLUID CELL HOUSING -- //
    e.shaped(ae('fluid_cell_housing'), [
        'GRG',
        'R R',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        S: '#c:plates/copper'
    })
    .id(st('fluid_cell_housing'));

    // -- 1K ME FLUID STORAGE CELL -- //
    e.shaped(ae('fluid_storage_cell_1k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('cell_component_1k'),
        S: '#c:plates/copper'
    })
    .id(st('fluid_storage_cell_1k'));

    // -- 4K ME FLUID STORAGE CELL -- //
    e.shaped(ae('fluid_storage_cell_4k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('cell_component_4k'),
        S: '#c:plates/copper'
    })
    .id(st('fluid_storage_cell_4k'));

    // -- 16K ME FLUID STORAGE CELL -- //
    e.shaped(ae('fluid_storage_cell_16k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('cell_component_16k'),
        S: '#c:plates/copper'
    })
    .id(st('fluid_storage_cell_16k'));

    // -- 64K ME FLUID STORAGE CELL -- //
    e.shaped(ae('fluid_storage_cell_64k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('cell_component_64k'),
        S: '#c:plates/copper'
    })
    .id(st('fluid_storage_cell_64k'));

    // -- 256K ME FLUID STORAGE CELL -- //
    e.shaped(ae('fluid_storage_cell_256k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('cell_component_256k'),
        S: '#c:plates/copper'
    })
    .id(st('fluid_storage_cell_256k'));

    // -- 2^3 SPATIAL STORAGE CELL -- //
    e.shaped(ae('spatial_storage_cell_2'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('spatial_cell_component_2'),
        S: '#c:plates/steel'
    })
    .id(st('spatial_storage_cell_2'));

    // -- 16^3 SPATIAL STORAGE CELL -- //
    e.shaped(ae('spatial_storage_cell_16'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('spatial_cell_component_16'),
        S: '#c:plates/steel'
    })
    .id(st('spatial_storage_cell_16'));

    // -- 128^3 SPATIAL STORAGE CELL -- //
    e.shaped(ae('spatial_storage_cell_128'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:dusts/redstone',
        C: ae('spatial_cell_component_128'),
        S: '#c:plates/steel'
    })
    .id(st('spatial_storage_cell_128'));

    // -- ILLUMINATED PANEL -- //
    e.shaped(ae('semi_dark_monitor'), [
        ' GQ',
        'SRQ',
        ' GQ'
    ],
    {
        G: '#c:dusts/glowstone',
        Q: ae('quartz_glass'),
        S: '#c:plates/steel',
        R: '#c:dusts/redstone'
    })
    .id(st('semi_dark_monitor'));

    // -- ANNIHILATION PLANE -- //
    e.shaped(ae('annihilation_plane'), [
        'SF',
        'AF',
        'SF'
    ],
    {
        S: '#c:plates/steel',
        F: ae('fluix_crystal'),
        A: ae('annihilation_core'),
    })
    .id(st('annihilation_plane'));

    e.shaped(ae('annihilation_plane'), [
        'FFF',
        'SAS'
    ],
    {
        S: '#c:plates/steel',
        F: ae('fluix_crystal'),
        A: ae('annihilation_core'),
    })
    .id(st('annihilation_plane_alt'));

    // -- FORMATION PLANE -- //
    e.shaped(ae('formation_plane'), [
        'SF',
        'AF',
        'SF'
    ],
    {
        S: '#c:plates/steel',
        F: ae('fluix_crystal'),
        A: ae('formation_core'),
    })
    .id(st('formation_plane'));

    e.shaped(ae('formation_plane'), [
        'FFF',
        'SAS'
    ],
    {
        S: '#c:plates/steel',
        F: ae('fluix_crystal'),
        A: ae('formation_core'),
    })
    .id(st('formation_plane_alt'));

    // -- CRYSTAL RESONANCE GENERATOR -- //
/*     e.shaped(ae('crystal_resonance_generator'), [
        'BAB',
        'BEB',
        'DCD'
    ],
    {
        A: ae('fluix_block'),
        B: '#c:plates/steel',
        C: ae('quartz_block'),
        D: '#c:plates/copper',
        E: mi('analog_circuit')
    })
    .id(st('crystal_resonance_generator'));
 */
    // -- IMPORT BUS -- //
    e.shaped(ae('import_bus'), [
        ' A ',
        'SPS'
    ],
    {
        A: ae('annihilation_core'),
        S: '#c:plates/steel',
        P: mc('sticky_piston')
    })
    .id(st('import_bus'));

    // -- STORAGE BUS -- //
/*     e.shaped(ae('storage_bus'), [
        'ABC'
    ],
    {
        A: mc('sticky_piston'),
        B: ae('interface'),
        C: mc('piston')
    })
    .id(st('storage_bus')); */

    // -- EXPORT BUS -- //
    e.shaped(ae('export_bus'), [
        'SFS',
        ' P '
    ],
    {
        S: '#c:plates/steel',
        F: ae('formation_core'),
        P: mc('piston')
    })
    .id(st('export_bus'));

    // -- ME P2P TUNNEL -- //
    e.shaped(ae('me_p2p_tunnel'), [
        ' S ',
        'SES',
        'FFF'
    ],
    {
        S: '#c:plates/steel',
        E: ae('engineering_processor'),
        F: ae('fluix_crystal')
    })
    .id(st('me_p2p_tunnel'));

    // -- MAGNET CARD -- //
    e.shaped(wt('magnet_card'), [
        'RAL',
        'ICI',
        'III'
    ],
    {
        R: '#c:storage_blocks/redstone',
        L: '#c:storage_blocks/lapis',
        A: ae('annihilation_plane'),
        C: ae('advanced_card'),
        I: '#c:storage_blocks/steel'
    })
    .id(st('magnet_card'));

    // -- DENSE ENERGY CELL -- //
    e.shaped(ae('dense_energy_cell'), [
        'EEE',
        'EHE',
        'EEE'
    ],
    {
        E: ae('energy_cell'),
        H: mi('advanced_machine_hull')
    })
    .id(st('dense_energy_cell'));

    //-------------------//
    // -- EXTENDED AE -- //
    //-------------------//

    // -- ENTRO INFUSED INGOT -- //
    
    /*e.replaceInput(
    { id: eae('transform/entro_ingot') }, 
    mc('gold_ingot'),            
    mi('aluminum_ingot')         
    ) 
     */
    
    e.custom({
        type: 'ae2:transform',
        ingredients: [
            {"tag": "c:dusts/entro"},
            {"tag": "c:ingots/aluminum"},
            {"item": "minecraft:lapis_lazuli"}
        ],
        tool: { tag: 'forge:tools/knives' },
        result: {
            "count": 1,
            "id": "extendedae:entro_ingot"
        }
    })
    .id(ste('entro_ingot_inworld'));
    /* e.replaceInput(
    { id: eae('assembler/entro_ingot_transformation') }, 
    mc('gold_ingot'),            
    mi('aluminum_ingot')         
    )
    .id(ste('entro_ingot_crystal_assembler')); */

    // -- CRYSTAL ASSEMBLER -- //
    
    /* e.shaped(eae('crystal_assembler'), [
        'DCD',
        'PHP',
        'FTF'
    ],
    {
        D: mi('digital_circuit'),
        H: eae('machine_frame'),
        P: ae('logic_processor'),
        F: '#ae2:glass_cable',
        T: mi('steel_tank')
    }) 
    .id(ste('crystal_assembler')); */

});

ServerEvents.tags('item', e=> {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let ae = (id) => `ae2:${id}`;

    // Tag all the crafting storages
    const CRAFTING_STORAGE = [
        ae('1k_crafting_storage'),
        ae('4k_crafting_storage'),
        ae('16k_crafting_storage'),
        ae('64k_crafting_storage'),
        ae('256k_crafting_storage')
    ];
    CRAFTING_STORAGE.forEach(id => e.add('kubejs:crafting_storage', id) );

    // Tag all the budding blocks
    // Doesn't work in KubeJS :l
    const BUDDING_BLOCKS = [
        ae('flawless_budding_quartz'),
        ae('flawed_budding_quartz'),
        ae('chipped_budding_quartz'),
        ae('damaged_budding_quartz')
    ];
    BUDDING_BLOCKS.forEach(id => e.add('kubejs:budding_certus', id) );

})