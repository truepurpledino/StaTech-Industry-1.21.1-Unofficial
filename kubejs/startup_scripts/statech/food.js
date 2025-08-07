// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', event => {
    event.create('empty_can')
        .displayName('Empty Can');

    event.create('concrete_bar')
        .displayName('Yummy Concrete Bar')
        .rarity('Uncommon')
        .tooltip('§6A tasty snack for a hard working industrialist')
        .food(f => {
            f
            .nutrition(6)
            .saturation(0.6);
        });
    
    event.create('statech_energy')
        .displayName('StaTech Energy')
        .rarity('Rare')
        .tooltip('§eUnleash the Greg')
        .food(f => {
            f
            .nutrition(6)
            .saturation(0.4)
            .effect('speed', 60 * 20, 0, 1);
        })
        .useAnimation('drink');
    
    event.create('sulfuric_acid_bottle')
        .displayName('Bottle of Sulfuric Acid')
        .food(f => {
            f
            .nutrition(3)
            .saturation(0.2)
            .effect('poison', 200, 0, 1);
        })
        .useAnimation('drink');

    event.create('concrete_and_clay_steak')
        .displayName('Concrete Steak with Clay Sauce')
        .rarity('Epic')
        .tooltip('§3Part of a §obalanced§r§3 diet')
        .food(f => {
            f
            .nutrition(14)
            .saturation(0.5)
            .effect('regeneration', 200, 0, 1);
        });
    

    event.create('uranium_cereal')
        .displayName('Uranium Cereal')
        .rarity('Rare')
        .tooltip('§bTons of calories!')
        .maxStackSize(1)
        .food(f => {
            f
            .nutrition(20)
            .saturation(0.5)
        });

    event.create('pizza_dough')
        .displayName('Pizza Dough')
        .food(f => {
            f
            .nutrition(2)
            .saturation(0.4)
        });
    
    event.create('uncooked_pizza').displayName('Uncooked Pizza');
    event.create('pizza').displayName('Pizza');

    event.create('pizza_slice')
        .displayName('Pizza Slice')
        .food(f => {
            f
            .nutrition(8)
            .saturation(0.6);
        });
    event.create('pineapple_pizza_slice')
        .displayName('Pineapple Pizza Slice')
        .food(f => {
            f
            .nutrition(10)
            .saturation(0.6);
        });
    
    event.create('concrete_pizza').displayName('Concrete Pizza');

    event.create('concrete_pizza_slice')
        .displayName('Concrete Pizza Slice')
        .food(f => {
            f
            .nutrition(12)
            .saturation(0.5);
        });
    event.create('concrete_pineapple_pizza_slice')
        .displayName('Concrete Pineapple Pizza Slice')
        .food(f => {
            f
            .nutrition(16)
            .saturation(0.6);
        });
    
    event.create('bepsi')
        .displayName('Can of Bepsi')
        .food(f => {
            f
            .nutrition(6)
            .saturation(0.4)
        })
        .useAnimation('drink');
    
    event.create('coke_cola')
        .displayName('Coke-a Coal-a')
        .food(f => {
            f
            .nutrition(10)
            .saturation(0.5)
        })
        .useAnimation('drink');
    
    event.create('greg_cola')
        .displayName('Greg Cola')
        .food(f => {
            f
            .nutrition(6)
            .saturation(0.5)
        })
        .useAnimation('drink');
    

    event.create('bottle_cap')
        .displayName('Bottle Cap')
        .rarity('Epic')
        .tooltip('§aSome far-off land might have\nused this as currency');

    event.create('nuka_cola')
        .displayName('Nuka Cola')
        .food(f => {
            f
            .nutrition(16)
            .saturation(0.5)
        })
        .useAnimation('drink');

    event.create('missing_texture_cookie')
        .displayName('Missing Texture Cookie')
        .food(f => {
            f
            .nutrition(30)
            .saturation(0.7)
        });
});