onEvent('recipes', e => {

 e.shaped('1x projecte:philosophers_stone', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    B: 'minecraft:redstone',
    A: 'minecraft:glowstone_dust',
    C: 'miniutilities:emerald_opinium_core'
  }).id('projecte:philosophers_stone')

 e.shaped('1x projecte:transmutation_table', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    B: 'minecraft:purpur_block',
    A: 'minecraft:obsidian',
    C: 'projecte:philosophers_stone'
  }).id('projecte:transmutation_table')


 e.shaped('1x projecte:condenser_mk1', [
     'ABA',
     'BCB',
     'ABA'
   ], {
     B: 'miniutilities:diamond_opinium_core',
     A: 'minecraft:obsidian',
     C: 'projecte:alchemical_chest'
   }).id('projecte:condenser_mk1')

 e.remove({id: 'projecte:philosophers_stone_alt'})
})



