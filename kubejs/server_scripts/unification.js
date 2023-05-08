onEvent('recipes', event => {
event.replaceOutput('#forge:ingots/titanium', 'threecore:titanium_ingot') 
event.replaceOutput('#forge:dusts/coal', 'threecore:coal_dust')
event.replaceOutput('#forge:ingots/uranium', 'biggerreactors:yellorium_ingot') 
event.replaceOutput('#forge:dusts/uranium', 'biggerreactors:yellorium_dust') 
event.replaceOutput('#forge:storage_blocks/uranium', 'biggerreactors:yellorium_block') 
event.remove({output: 'threecore:uranium_ore'})
event.replaceOutput('#forge:nuggets/uranium', 'threecore:uranium_nugget')
event.remove({output: 'boss_tools:steel_ingot'})
event.replaceOutput('#forge:dusts/iron', 'thermal:iron_dust') 
event.replaceOutput('#forge:plates/iron', 'thermal:iron_plate')

event.replaceInput('chaosawakens:titanium_ingot', '#forge:ingots/titanium')

event.replaceInput('chaosawakens:uranium_ingot', '#forge:ingots/uranium')

event.replaceOutput('#forge:dusts/copper', 'thermal:copper_dust') 
event.replaceOutput('#forge:plates/copper', 'thermal:copper_plate')
event.replaceOutput('#forge:nuggets/copper', 'thermal:copper_nugget')
event.replaceOutput('#forge:ingots/copper', 'thermal:copper_ingot') 
event.replaceOutput('#forge:storage_blocks/copper', 'thermal:copper_block') 
event.replaceOutput('#forge:ores/copper', 'thermal:copper_ore')

event.replaceOutput('#forge:dusts/lead', 'thermal:lead_dust') 
event.replaceOutput('#forge:plates/lead', 'thermal:lead_plate')
event.replaceOutput('#forge:nuggets/lead', 'thermal:lead_nugget')
event.replaceOutput('#forge:ingots/lead', 'thermal:lead_ingot') 
event.replaceOutput('#forge:storage_blocks/lead', 'thermal:lead_block') 
event.replaceOutput('#forge:ores/lead', 'thermal:lead_ore')

event.replaceOutput('#forge:dusts/tin', 'thermal:tin_dust') 
event.replaceOutput('#forge:plates/tin', 'thermal:tin_plate')
event.replaceOutput('#forge:nuggets/tin', 'thermal:tin_nugget')
event.replaceOutput('#forge:ingots/tin', 'thermal:tin_ingot') 
event.replaceOutput('#forge:storage_blocks/tin', 'thermal:tin_block') 
event.replaceOutput('#forge:ores/tin', 'thermal:tin_ore')

event.replaceOutput('#forge:dusts/silver', 'thermal:silver_dust') 
event.replaceOutput('#forge:plates/silver', 'thermal:silver_plate')
event.replaceOutput('#forge:nuggets/silver', 'thermal:silver_nugget')
event.replaceOutput('#forge:ingots/silver', 'thermal:silver_ingot') 
event.replaceOutput('#forge:storage_blocks/silver', 'thermal:silver_block') 
event.replaceOutput('#forge:ores/silver', 'thermal:silver_ore')

event.replaceOutput('#forge:dusts/gold', 'thermal:gold_dust') 
event.replaceOutput('#forge:plates/gold', 'thermal:gold_plate')

event.replaceOutput('#forge:dusts/bronze', 'thermal:bronze_dust') 
event.replaceOutput('#forge:plates/bronze', 'thermal:bronze_plate')
event.replaceOutput('#forge:nuggets/bronze', 'thermal:bronze_nugget')
event.replaceOutput('#forge:ingots/bronze', 'thermal:bronze_ingot') 
event.replaceOutput('#forge:storage_blocks/bronze', 'thermal:bronze_block')
event.replaceOutput('#forge:dusts/ender', 'thermal:ender_pearl_dust')

event.replaceOutput('#forge:salt/salt', 'chaosawakens:salt')
event.replaceInput('#forge:salt/salt', 'chaosawakens:salt')
event.replaceInput('chaosawakens:corn', '#forge:crops/corn')
event.replaceInput('chaosawakens:lettuce', '#forge:crops/lettuce')
event.replaceInput('chaosawakens:tomato', '#forge:crops/tomato')
event.replaceInput('chaosawakens:strawberry', '#forge:crops/strawberry')

event.custom(
{
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "tag": "forge:ingots/iron"
        },
        {
          "tag": "forge:dusts/iron"
        }
      ],
      "count": 1
    },
    {
      "value": [
        {
          "tag": "minecraft:coal"
        },
        {
          "tag": "forge:dusts/coal"
        }
      ],
      "count": 3
    }
  ],
  "result": [
    {
      "item": "threecore:steel_ingot",
      "count": 3
    }
  ],
  "energy": 4200
}
)
})



onEvent('item.tags', event => {
event.get('forge:dusts/ender').add('thermal:ender_pearl_dust')
})