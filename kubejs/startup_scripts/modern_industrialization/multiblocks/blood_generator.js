// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

MIMachineEvents.registerMachines(event => {
    const steelMachineCasing = event.memberOfBlock(mi('steel_machine_casing'));
    // const steelPillar = event.memberOfBlock(ad('steel_pillar'));
    const steelPipeCasing = event.memberOfBlock(mi('steel_machine_casing_pipe'));
    const experienceBlock = event.memberOfBlock(cr('experience_block'));
    const boneBlock = event.memberOfBlock(mc('bone_block'));
    // const bonePillar = event.memberOfBlock(ap('osseous_pillar'));
    // const boneHead = event.memberOfBlock(ap('lit_osseous_skull'));
    // const boneWall = event.memberOfBlock(ap('osseous_brick_wall'));
    // const redGlazedTerracotta = event.memberOfBlock(bl('red_glazed_terracotta_pillar'));
    const redGlazedTerracotta = event.memberOfBlock(mc('red_glazed_terracotta'));
    const tintedGlass = event.memberOfBlock(mc('tinted_glass'));
    // const fanBlock = event.memberOfBlock(fb('fan_on'));
    // const ventBlock = event.memberOfBlock(fb('vent'));
    // const batteryBlock = event.memberOfBlock(fb('megacell'));
    const generatorHatch = event.hatchOf('fluid_input', 'energy_output');

    const bloodGeneratorShape = event.layeredShape('steel', [
        //y=   0            1            2            3            4            5            6            7            8
        [ 'PPPPPPPPP', 'PCCCCCCCP', 'PFFVAVFFP', 'PFFVAVFFP', 'PFFVAVFFP', 'PIIIIIIIP', 'PIIIIIIIP', 'PIIIIIIIP', 'PIIIIIIIP', 'PPPPPPPPP',],
        [ 'PCCCCCCCP', 'CRRRRRRRC', 'T  EEE  T', 'T  EEE  T', 'T  EEE  T', 'T  EEE  T', 'T  EEE  T', 'T       T', 'C       C', 'PCCCCCCCP' ],
        [ 'PCCCCCCCP', 'CRRRRRRRC', 'T       T', 'T   B   T', 'T   B   T', 'T WWBWW T', 'T   H   T', 'T       T', 'C       C', 'PCCCCCCCP' ],
        [ 'PCCCCCCCP', 'CRRRRRRRC', 'T       T', 'T       T', 'T       T', 'T       T', 'T       T', 'T       T', 'C       C', 'PCCCCCCCP' ],
        [ 'PPPPPPPPP', 'PCCC#CCCP', 'PTTTTTTTP', 'PTTTTTTTP', 'PTTTTTTTP', 'PTTTTTTTP', 'PTTTTTTTP', 'PTTTTTTTP', 'PCCCCCCCP', 'PPPPPPPPP' ]
    ])
        .key('C', steelMachineCasing, generatorHatch)
        // .key('P', steelPillar, event.noHatch())
        .key('P', steelMachineCasing, event.noHatch())
        .key('I', steelPipeCasing, event.noHatch())
        .key('E', experienceBlock, event.noHatch())
        // .key('B', bonePillar, event.noHatch())
        // .key('H', boneHead, event.noHatch())
        // .key('W', boneWall, event.noHatch())
        // .key('R', redGlazedTerracotta, event.noHatch())
        .key('B', boneBlock, event.noHatch())
        .key('H', boneBlock, event.noHatch())
        .key('W', boneBlock, event.noHatch())
        .key('R', redGlazedTerracotta, event.noHatch())
        .key('T', tintedGlass, event.noHatch())
        // .key('F', fanBlock, event.noHatch())
        // .key('V', ventBlock, event.noHatch())
        // .key('A', batteryBlock, event.noHatch())
        .key('F', steelMachineCasing, event.noHatch())
        .key('V', steelMachineCasing, event.noHatch())
        .key('A', steelMachineCasing, event.noHatch())
        .build();

    event.simpleGeneratorMultiBlock(
        "Blood Generator", // The english name
        "blood_generator", // the internal name
        bloodGeneratorShape, // the multiblock shape
        8192, // Maximum energy generation rate (eu/tick)
        builder => { // The builder (same as for a single block generator)
            builder.fluid(mi('blood'), 512);
            builder.fluid(mi('dragons_blood'), 8192)
        },

        // -- Standard model configuration -- //
        'steel', // casing
        'blood_generator',  // model folder
        true, // front overlay?
        false, // top overlay?
        false // side overlay?
    );
});