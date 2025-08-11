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
        .displayName('Simple Stellar Telemtry Data');
});