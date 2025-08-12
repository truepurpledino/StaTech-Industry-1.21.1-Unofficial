// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', event => {
    event.create('space_probe')
        .displayName('Space Probe');
    
    event.create('statech_logo')
        .displayName('StaTech Logo');

    event.create('voice_chat')
        .displayName('Voice Chat');

    event.create('bartman')
        .displayName('Jon Bartman');

    event.create('withered_soc')
        .displayName('Withered SoC');

    event.create('magic_diamond')
        .displayName('Magic Diamond')
        .rarity('Epic')
        .tooltip('§dYour ticket to the Twilight Forest');
        
    event.create('core_fragment')
        .displayName('Core Fragment')
        .rarity('Rare');
      
    event.create('steel_fuel_tank')
        .displayName('Steel Fuel Tank')
    
    event.create('desh_fuel_tank')
        .displayName('Desh Fuel Tank')
    
    event.create('ostrum_fuel_tank')
        .displayName('Ostrum Fuel Tank')
    
    event.create('calorite_fuel_tank')
        .displayName('Calorite Fuel Tank')
    
    event.create('engine_framebox')
        .displayName('Engine Framebox')
    
    event.create('rocket_propeller')
        .displayName('Rocket Propeller')

    event.create('rocket_cone')
        .displayName('Rocket Cone')
        
    event.create('rocket_fin')
        .displayName('Rocket Fin')
    
    event.create('steel_engine')
        .displayName('Steel Engine')
    
    event.create('desh_engine')
        .displayName('Desh Engine')
    
    event.create('ostrum_engine')
        .displayName('Ostrum Engine')
    
    event.create('calorite_engine')
        .displayName('Calorite Engine')
    
    event.create('basic_space_probe')
        .displayName('Basic Space Probe')
    
    event.create('advanced_space_probe')
        .displayName('Advanced Space Probe')
    
    event.create('highly_advanced_space_probe')
        .displayName('Highly Advanced Space Probe')
    
    event.create('boron_quartz_blend')
        .displayName('Boron-Quartz Blend')
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