// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:hangglider/${id}`;

    // -- HANG GLIDER REMOVED RECIPES -- //
    const HANGGLIDER_REMOVED_RECIPES = [
        hg('glider_framework'),
        hg('glider_wing'),
        hg('reinforced_hang_glider')
    ];
    HANGGLIDER_REMOVED_RECIPES.forEach(id => event.remove( {id: id}));

    // -- GLIDER FRAMEWORK -- //
    event.shaped(hg('glider_framework'), [
        ' R ',
        'R R',
        'RRR'
    ],
    {
        R: '#c:rods/iron'
    }).id(st('glider_framework'));

    // -- GLIDER WING -- //
    event.shaped(hg('glider_wing'), [
        '  R',
        ' RL',
        'RLL'
    ],
    {
        R: '#c:rods/iron',
        L: '#c:leathers'
    }).id(st('glider_wing'));
});