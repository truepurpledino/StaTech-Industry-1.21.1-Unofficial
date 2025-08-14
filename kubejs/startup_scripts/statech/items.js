// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', event => {
    event.create('personal_space_shield')
        .unstackable()
        .rarity('Rare')
        .displayName('Personal Space Shield')
        .tooltip('§aProvides a personal bubble of safety\n§awhile in low-oxygen environments\n\n§bCan be equipped in a curio slot');

    event.create('short_range_lens')
        .maxStackSize(16)
        .rarity('Uncommon')
        .displayName('Short Range Lens')
        .tooltip('§bFor use in the Space Telescope');

    event.create('simple_stellar_data')
        .rarity('Uncommon')
        .displayName('Simple Stellar Data')
        .tooltip('§aContains very basic data\n§cCan be refined in a Supercomputer');
    
    event.create('planetary_stellar_data')
        .rarity('Uncommon')
        .displayName('Planetary Data')
        .tooltip('§aContains information about a stellar mass\n§cCan be refined in a Supercomputer');

    event.create('star_data')
        .rarity('Uncommon')
        .displayName('Star Data')
        .tooltip('§aContains information about a star\n§cCan be refined in a Supercomputer');
    
    event.create('black_hole_data')
        .rarity('Rare')
        .displayName('Black Hole Data')
        .tooltip('§dContains information about a black hole\n§cCan be refined in a Supercomputer');
    
    event.create('anomalous_stellar_data')
        .rarity('Rare')
        .displayName('Anomalous Stellar Data')
        .tooltip('§dVery rare data of a spatial anomaly\n§cCan be refined in a Supercomputer');

    event.create('research_probe')
        .displayName('Research Probe')
        .tooltip('§bCan be launched in a Space Probe Launcher using telemetry data');

    event.create('star_imploder')
        .rarity('Epic')
        .displayName('Star Imploder')
        .tooltip('§aDeliver using a Research Probe, causes a star to enter supernova');
    
    event.create('dark_matter')
        .displayName('Dark Matter')
        .rarity('Rare');
    
    event.create('antimatter_housing')
        .displayName('Antimatter Housing')
        .tooltip('§aUsed to safely store antimatter\n$cDon\'t drop it...');
    
    event.create('antimatter')
        .displayName('Antimatter')
        .rarity('Epic')
        .tooltip('§4What should not be');
});