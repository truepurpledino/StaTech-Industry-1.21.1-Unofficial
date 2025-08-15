// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------
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