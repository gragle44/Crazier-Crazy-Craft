 onEvent('recipes', e => {
 e.shaped('1x cyclic:wireless_energy', [
     'BSB',
     'RDR',
     'BSB'
   ], {
    B: 'minecraft:iron_bars',
 	S: 'minecraft:nether_brick',
 	R: 'minecraft:comparator',
 	D: 'minecraft:ender_eye'
   }).id('cyclic:wireless_energy')
 e.shaped('1x cyclic:wireless_item', [
      'BSB',
      'RDR',
      'BSB'
    ], {
   B: 'minecraft:iron_bars',
   S: 'minecraft:diamond',
   R: 'minecraft:comparator',
   D: 'minecraft:ender_eye'
    }).id('cyclic:wireless_item')
 e.shaped('1x cyclic:wireless_fluid', [
       'BSB',
       'RDR',
       'BSB'
     ], {
    B: 'minecraft:iron_bars',
    S: 'minecraft:bucket',
    R: 'minecraft:comparator',
    D: 'minecraft:ender_eye'
     }).id('cyclic:wireless_fluid')
 })
