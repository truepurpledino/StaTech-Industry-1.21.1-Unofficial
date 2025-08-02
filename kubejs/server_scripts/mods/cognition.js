// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:cognition/${id}`;
    let xp = (id) => `cognition:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    
    // -- BUILDING GADGETS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        xp('cognitive_flux')
    ]; 
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    // --  -- // 
/*     e.shaped(bg('template_manager'), [
        'GRG',
        'EFE',
        'GCG'
    ],
    {
        G: '#c:plates/gold',
        R: '#c:dusts/redstone',
        E: '#c:ender_pearls',
        C: mi('electronic_circuit'),
        F: mi('basic_machine_hull')
    })
    .id(st('template_manager')); */
});