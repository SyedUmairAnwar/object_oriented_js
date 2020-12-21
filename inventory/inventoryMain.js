let inventory=require("./inventoryBl")
inventory.jsonFile("./inventory.json")
console.log(inventory.display())
inventory.value()