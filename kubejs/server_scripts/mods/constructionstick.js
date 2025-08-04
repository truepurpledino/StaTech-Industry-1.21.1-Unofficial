// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:cognition/${id}`;
    let cs = (id) => `constructionstick:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    
    // -- COSNTRUCTION STICKS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        cs('template_battery'),
        // cs('template_angel'),
        cs('template_destruction'),
        // cs('template_replacement'),
        cs('template_unbreakable')
    ]; 
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    // -- BATTERY TEMPLATE -- // 
    e.shaped(cs('template_battery'), [
        ' GR',
        'GBG',
        'RG '
    ],
    {
        G: '#c:glass_blocks',
        R: '#c:dusts/redstone',
        B: mi('redstone_battery')
    })
    .id(st('template_battery')); 

    // -- UNBREAKABLE TEMPLATE -- // 
    e.shaped(cs('template_unbreakable'), [
        ' GT',
        'GNG',
        'TG '
    ],
    {
        G: '#c:glass_blocks',
        T: '#c:plates/tungstensteel',
        N: mc('nether_star')
    })
    .id(st('template_unbreakable'));
});