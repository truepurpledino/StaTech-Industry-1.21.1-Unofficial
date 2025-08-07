
MoreJS.structureLoad((event) => {
    if (event.id.startsWith("minecraft:trial_chambers")) {
        event.forEachPalettes((palette) => {
            palette.forEach((blockInfo) => {
                if (blockInfo.id === "minecraft:waxed_copper_block") {
                blockInfo.setBlock("kubejs:decorative_waxed_copper_block");
                } 
                else if (blockInfo.id === "minecraft:waxed_oxidized_copper") {
                blockInfo.setBlock("kubejs:decorative_waxed_oxidized_copper");
                }
                else if (blockInfo.id === "minecraft:copper_block") {
                blockInfo.setBlock("kubejs:decorative_waxed_copper_block");
                }
            });
        });
    }
});