onEvent('item.modification', event => {
  event.modify('chaosawakens:ruby_sword', item => {
    tier = tierOptions => {
        item.attackDamageBonus = 10
    }
  })
})