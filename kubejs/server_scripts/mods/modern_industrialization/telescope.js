// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/telescope/${id}`;

    // -- SIMPLE STELLAR TELEMETRY DATA -- //
    telescope(
        event,
        st('simple_stellar_data'),
        64,
        600,
        [ { amount: 1, item: kj('short_range_lens') } ],
        [ { amount: 1, item: kj('simple_stellar_data'), probability: 0.1} ],
        [ { amount: 1000, fluid: mc('water') } ]
    );
});