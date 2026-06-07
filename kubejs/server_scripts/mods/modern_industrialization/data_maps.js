// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

// Adapted from Team AOE's Data maps script for Craftoria (https://github.com/TeamAOF/Craftoria/blob/4b045109f126f27a0cc584cdb0b3c1edbed11c8e/kubejs/server_scripts/Mods/ModernIndustrialization/DataMaps.js#L4)

    // -- LARGE ELECTRIC FURNACE TIERS -- //
ServerEvents.generateData('after_mods', event => {
    event.json('extended_industrialization:data_maps/block/large_electric_furnace_tier', {
        values: {
            'modern_industrialization:tungstensteel_coil': {
                batch_size: 64,
                eu_cost_multiplier: 0.75,
            },
        },
    });

    // -- PYROLYSE OVEN TIERS -- //
    event.json('industrialization_overdrive:data_maps/block/pyrolyse_oven_tier', {
        values: {
            'modern_industrialization:tungstensteel_coil': {
                batch_size: 64,
                eu_cost_multiplier: 0.75,
            },
        },
    });

    // -- LIQUID FUELS -- //
    event.json('modern_industrialization:data_maps/fluid/fluid_fuels', {
        values: {
            'modern_industrialization:benzene': {
                eu_per_mb: 100
            }
        }
    });
});
