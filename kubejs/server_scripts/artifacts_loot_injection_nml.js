// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

LootJS.modifiers(event => {

    //----------------------//
    // ------ CHESTS ------ //
    //----------------------//

    // -- DUNGEON GARBAGE -- //
    event
        .addTableModifier("nomansland:chests/dungeon_garbage")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/simple_dungeon"))
    });

    // -- SMALL DUNGEON CORE -- //
    event
        .addTableModifier("nomansland:chests/small_dungeon_core")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/simple_dungeon"))
    });

    // -- DUNGEON KITCHEN -- //
    event
        .addTableModifier("nomansland:chests/dungeon_kitchen")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/ancient_city_ice_box"))
    });

    // -- WATER WELL -- //
    event
        .addTableModifier("nomansland:chests/water_well")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/ruined_portal"))
    });

    // -- SNIFFER MONUMENT -- //
    event
        .addTableModifier("nomansland:chests/sniffer_monument")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/jungle_temple"))
    });

});