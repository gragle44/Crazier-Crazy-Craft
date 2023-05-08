onEvent('recipes', event => {

event.remove({id: 'chaosawakens:titanium_nugget'})

/*event.custom(
    {
    "type": "mysticalagriculture:infusion",

    "input": {
    "type": "mysticalagriculture:crop_component",
    "component": "seed",
    "crop": "mysticalagriculture:aluminum"
    },
    "ingredients": [
    {
      "type": "mysticalagriculture:crop_component",
      "component": "material",
      "crop": "mysticalagriculture:aluminum"
    },
    {
      "type": "mysticalagriculture:crop_component",
      "component": "essence",
      "crop": "mysticalagriculture:aluminum"
    },
    {
      "type": "mysticalagriculture:crop_component",
      "component": "material",
      "crop": "mysticalagriculture:aluminum"
    },
    {
      "type": "mysticalagriculture:crop_component",
      "component": "essence",
      "crop": "mysticalagriculture:aluminum"
    },
    {
      "type": "mysticalagriculture:crop_component",
      "component": "material",
      "crop": "mysticalagriculture:aluminum"
    },
    {
      "type": "mysticalagriculture:crop_component",
      "component": "essence",
      "crop": "mysticalagriculture:aluminum"
    },
    {
      "type": "mysticalagriculture:crop_component",
      "component": "material",
      "crop": "mysticalagriculture:aluminum"
    },
    {
      "type": "mysticalagriculture:crop_component",
      "component": "essence",
      "crop": "mysticalagriculture:aluminum"
    }
    ],
    "result": {
    "item": "mysticalagriculture:aluminum_seeds"
    }
    }) */

})
onEvent('item.tags', event => {
event.get('forge:ingots/aluminum').add('chaosawakens:aluminum_ingot')

})