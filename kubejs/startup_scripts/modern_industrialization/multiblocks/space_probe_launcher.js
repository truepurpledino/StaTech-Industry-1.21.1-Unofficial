// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let SPACE_PROBE_LAUNCHER;

MIMachineEvents.registerRecipeTypes(e => {
    SPACE_PROBE_LAUNCHER = e.register('space_probe_launcher')
        .withItemInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;

    const stainlessCasing = e.memberOfBlock(mi('clean_stainless_steel_machine_casing'));
    const caloritePipeCasing = e.memberOfBlock(mi('stainless_steel_machine_casing_pipe'));
    const kanthalCoil = e.memberOfBlock(mi('kanthal_coil'));
    const spaceProbeHatch = e.hatchOf('item_input', 'item_output', 'energy_input');

    const spaceProbeBuilder = e.layeredShape('clean_stainless_steel_machine_casing', [
        //y=
        [ '  c  ', '  c  ', '  c  ', '     ', '     ', '     ', '     '],
        [ ' CCC ', ' CPC ', ' CPC ', '  K  ', '  K  ', '  K  ', '  K  '],
        [ 'cCCCc', 'cPPPc', 'cPPPc', ' K K ', ' K K ', ' K K ', ' K K '],
        [ ' CCC ', ' CPC ', ' CPC ', '  K  ', '  K  ', '  K  ', '  K  '],
        [ '     ', '  #  ', '  c  ', '     ', '     ', '     ', '     ']
    ])
        .key('C', stainlessCasing, e.noHatch())
        .key('c', stainlessCasing, spaceProbeHatch)
        .key('P', caloritePipeCasing, e.noHatch())
        .key('K', kanthalCoil, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Space Probe Launcher', // English name
        'space_probe_launcher', // internal name
        SPACE_PROBE_LAUNCHER, // recipe type
        spaceProbeBuilder, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'rocket'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35), 
        itemOutputs => itemOutputs.addSlots(102, 35, 4, 4),
        fluidInputs => {}, 
        fluidOutputs => {},

        /* Model Configuration */ 
        'clean_stainless_steel_machine_casing', // casing of the controller
        'space_probe_launcher', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});