// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

event.shaped('6x chaosawakens:ruby', [
    'SSS',
    'S S',
    'SSS'
  ], {
    S: 'mysticalagriculture:ruby_essence'
  })
event.shaped('2x hexblades:hexium_ingot', [
    'LPG',
    'SA ',
    'N  '
  ], {
    L: 'thermal:lead_ingot',
	P: 'eidolon:pewter_ingot',
	G: 'minecraft:gold_ingot',
	S: 'eidolon:soul_shard',
	A: 'eidolon:enchanted_ash',
	N: 'minecraft:quartz'
  })
event.shaped('1x mutantbeasts:chemical_x', [
    ' W ',
    'AGO',
    ' A '
  ], {
    G: 'minecraft:glass_bottle',
	W: 'minecraft:wither_rose',
	O: 'minecraft:obsidian',
	A: 'threecore:coal_dust'
  }) 
  




event.remove({output: 'chaosawakens:titanium_ingot'})
event.remove({output: 'thermal:ruby'})
event.remove({output: 'chaosawakens:amythest'})
event.remove({output: 'bosstools:iron_plate'})
event.remove({id: 'bosstools:iron_plate_rezept'})
event.remove({id: 'hexblades:hexium_ingot'})
event.remove({output: 'cyclic:emerald_sword'})
event.remove({output: 'cyclic:emerald_pickaxe'})
event.remove({output: 'cyclic:emerald_axe'})
event.remove({output: 'cyclic:emerald_hoe'})
event.remove({output: 'cyclic:emerald_shovel'})
event.remove({output: 'cyclic:emerald_boots'})
event.remove({output: 'cyclic:emerald_helmet'})
event.remove({output: 'cyclic:emerald_chestplate'})
event.remove({output: 'cyclic:emerald_leggings'})
event.remove({id: 'cyclic:uncrafter'})
event.remove({id: 'rftoolspower:dimensoinalcell'})
event.remove({id: 'rftoolspower:dimensoinalcell_simple'})
event.remove({id: 'rftoolspower:dimensoinalcell_advanced'})
event.remove({id: 'rftoolspower:powercell_card'})
event.remove({output: '#inventorypets:legendary_pets'})
event.remove({id: 'inventorypets:illuminati_pet'})
})




onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
event.get('forge:gems/ruby').remove('thermal:ruby')
})