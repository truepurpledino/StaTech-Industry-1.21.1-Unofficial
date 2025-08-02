// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(e => {

        // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:space_age/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let ae = (id) => `ae2:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let kj = (id) => `kubejs:${id}`;
    
    // -- PROBE COMPUTERS -- //
    e.shaped(kj('mki_probe_computer'), [
        'SCS',
        'THD',
        'SES'
    ],
    {
        S: '#c:large_plates/stainless_steel',
        C: kj('rocket_cone'),
        E: kj('steel_engine'),
        H: mi('advanced_machine_hull'),
        T: mi('transistor'),
        D: mi('diode')
    })
    .id(st('mki_probe_computer'));

    e.shaped(kj('mkii_probe_computer'), [
        'SCS',
        'THD',
        'SES'
    ],
    {
        S: '#c:large_plates/stainless_steel',
        C: kj('rocket_cone'),
        E: kj('desh_engine'),
        H: mi('turbo_machine_hull'),
        T: mi('and_gate'),
        D: mi('or_gate')
    })
    .id(st('mkii_probe_computer'));

    e.shaped(kj('mkiii_probe_computer'), [
        'SCS',
        'THD',
        'SES'
    ],
    {
        S: '#c:large_plates/stainless_steel',
        C: kj('rocket_cone'),
        E: kj('ostrum_engine'),
        H: mi('highly_advanced_machine_hull'),
        T: mi('arithmetic_logic_unit'),
        D: mi('memory_management_unit')
    })
    .id(st('mkiii_probe_computer'));

    // -- TIERED SPACE PROBES -- //
    e.shaped("4x " + kj('basic_space_probe'), [
        'GCD',
        'FTC',
        'IFG'
    ],
    {
        G: '#c:gears/steel',
        C: mi('electrum_cable'),
        T: kj('steel_fuel_tank'),
        F: kj('rocket_fin'),
        D: mi('aluminum_drill'),
        I: '#modern_industrialization:item_pipes'
    })
    .id(st('basic_space_probe'));

    e.shaped("4x " + kj('advanced_space_probe'), [
        'GCD',
        'FTC',
        'IFG'
    ],
    {
        G: '#c:gears/desh',
        C: mi('aluminum_cable'),
        T: kj('desh_fuel_tank'),
        F: kj('rocket_fin'),
        D: mi('stainless_steel_drill'),
        I: '#modern_industrialization:item_pipes'
    })
    .id(st('advanced_space_probe'));
    
    e.shaped("4x " + kj('highly_advanced_space_probe'), [
        'GCD',
        'FTC',
        'IFG'
    ],
    {
        G: '#c:gears/ostrum',
        C: mi('annealed_copper_cable'),
        T: kj('ostrum_fuel_tank'),
        F: kj('rocket_fin'),
        D: mi('titanium_drill'),
        I: '#modern_industrialization:item_pipes'
    })
    .id(st('highly_advanced_space_probe'));

})