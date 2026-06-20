// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ItemEvents.modifyTooltips(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let mi = (id) => `modern_industrialization:${id}`;
    let mt = (id) => `mi_tweaks:${id}`;
    let yai = (id) => `yet_another_industrialization:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- LIST OF ALL DISABLED MACHINES AND ITEMS -- //
    // const DISABLED_MACHINES_AND_ITEMS = [
    // ];


    // -- LIST OF ALL CUSTOM MACHINES AND ITEMS -- //
    const CUSTOM_MACHINES_AND_ITEMS = [
        mt('bulk_compactor'),
        mt('blast_alloy_smelter'),
        mt('industrial_mixing_machine'),
        mt('large_chemical_reactor'),
        mt('large_scale_assembler'),
        mt('oversized_electrolysis_chamber'),
        mi('laser_engraver'),
        mi('photosynthetic_chamber'),
        mi('rocket_part_assembler'),
        mi('blood_generator'),
        mi('boss_crusher'),
        mi('core_drill'),
        mi('greenhouse'),
        mi('mob_crusher'),
        mi('singularity_forge'),
        mi('space_probe_launcher'),
        mi('quantum_space_probe_launcher'),
        mi('raw_moon_ice'),
        mi('moon_ice_dust'),
        mi('desh_ingot'),
        mi('ostrum_ingot'),
        mi('calorite_ingot')
    ];

    // -- ADD TOOLTIP -- //
    const ADDED_BY_STATECH = Text.gold('Added by StaTech Industry');
    CUSTOM_MACHINES_AND_ITEMS.forEach(item => {
        e.modify(item, tooltip => {
            tooltip.removeExactText(ADDED_BY_STATECH);
            tooltip.add([ADDED_BY_STATECH]);
        });
    });

/*     const CURRENTLY_DISABLED = Text.red('Currently Disabled');
    DISABLED_MACHINES_AND_ITEMS.forEach(item => {
        e.modify(item, tooltip => {
            tooltip.add([CURRENTLY_DISABLED]);
        });
    }); */

});