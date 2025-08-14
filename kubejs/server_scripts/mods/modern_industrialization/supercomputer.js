// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/supercomputer/${id}`;

    // -- TEST RECIPE -- //
    supercomputer(
        event,
        st('test'),
        10,
        200,
        [ { amount: 1, item: mc('dirt') } ],
        [ { amount: 1, item: mc('diamond') } ],
        [ { amount: 100, fluid: mi('cryofluid') } ]
    );
});