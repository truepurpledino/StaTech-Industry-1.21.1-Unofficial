// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', e => {
    e.create('space_probe').displayName('Space Probe');
    
    e.create('statech_logo').displayName('StaTech Logo');

    e.create('voice_chat').displayName('Voice Chat');

    e.create('bartman').displayName('Jon Bartman');

    e.create('withered_soc').displayName('Withered SoC');

    e.create('magic_diamond')
        .displayName('Magic Diamond')
        .rarity('Epic')
        .tooltip('§dYour ticket to the Twilight Forest');
        
    e.create('core_fragment')
        .displayName('Core Fragment')
        .rarity('Rare');
      
    e.create('steel_fuel_tank')
        .displayName('Steel Fuel Tank')
    
    e.create('desh_fuel_tank')
        .displayName('Desh Fuel Tank')
    
    e.create('ostrum_fuel_tank')
        .displayName('Ostrum Fuel Tank')
    
    e.create('calorite_fuel_tank')
        .displayName('Calorite Fuel Tank')
    
    e.create('engine_framebox')
        .displayName('Engine Framebox')
    
    e.create('rocket_propeller')
        .displayName('Rocket Propeller')

    e.create('rocket_cone')
        .displayName('Rocket Cone')
        
    e.create('rocket_fin')
        .displayName('Rocket Fin')
    
    e.create('steel_engine')
        .displayName('Steel Engine')
    
    e.create('desh_engine')
        .displayName('Desh Engine')
    
    e.create('ostrum_engine')
        .displayName('Ostrum Engine')
    
    e.create('calorite_engine')
        .displayName('Calorite Engine')
});

ItemEvents.modification(event => {
  event.modify('usefulslime:slime_sling', item => {
    item.maxDamage = 1588;
  });
});

/* BlockEvents.modification(event => {
  const glowingPillars = [
    'modern_industrialization:glowing_calorite_pillar',
    'modern_industrialization:glowing_desh_pillar',
    'modern_industrialization:glowing_ostrum_pillar',
    'modern_industrialization:glowing_steel_pillar'
  ];

  glowingPillars.forEach(id => {
    event.modify(id, block => {
      block.lightLevel = 15; 
    });
  });
}); */