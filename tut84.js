show dbs 
use harryKart
show collections

// To insert another collection
db.anotherCollection.insertOner({a: 89})

db.items.find()
// to update one 
db.items.updateOne({name: "Samsung 30s"}, {$set: {price: 2}})
db.items.find()
db.items.updateMany({name: "moto 30s"}, {$set: {price: 3, rating: 1}})