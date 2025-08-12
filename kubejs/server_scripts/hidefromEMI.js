RecipeViewerEvents.removeEntriesCompletely('item', event => {

    const CREATE_CRUSHED = [
        cr('crushed_raw_platinum'),
        cr('crushed_raw_iron'),
        cr('crushed_raw_gold'),
        cr('crushed_raw_copper'),
        cr('crushed_raw_zinc'),
        cr('crushed_raw_tin'),
        cr('crushed_raw_lead'),
        cr('crushed_raw_nickel'),
        cr('crushed_raw_uranium')
    ];
    CREATE_CRUSHED.forEach(id => event.remove(id)); 

    const LIMITED_BARRELS = [
        ss('limited_gold_barrel_1'),
        ss('limited_gold_barrel_2'),
        ss('limited_gold_barrel_3'),
        ss('limited_gold_barrel_4'),
        ss('limited_copper_barrel_1'),
        ss('limited_copper_barrel_2'),
        ss('limited_copper_barrel_3'),
        ss('limited_copper_barrel_4'),
        ss('limited_diamond_barrel_1'),
        ss('limited_diamond_barrel_2'),
        ss('limited_diamond_barrel_3'),
        ss('limited_diamond_barrel_4'),
        ss('limited_netherite_barrel_1'),
        ss('limited_netherite_barrel_2'),
        ss('limited_netherite_barrel_3'),
        ss('limited_netherite_barrel_4'),
        ss('limited_iron_barrel_1'),
        ss('limited_iron_barrel_2'),
        ss('limited_iron_barrel_3'),
        ss('limited_iron_barrel_4')
    ];
    LIMITED_BARRELS.forEach(id => event.remove(id)); 
    
    const FAKE_MATERIALS = [
        mi('raw_corundum'),
        mi('raw_corundum_block'),
        mi('raw_sapphire'),
        mi('raw_sapphire_block'),
        mi('raw_peridot'),
        mi('raw_peridot_block'),
        mi('raw_kernite'),
        mi('raw_kernite_block')
    ];
    FAKE_MATERIALS.forEach(id => event.remove(id)); 
});