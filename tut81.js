// INserting data in MOngo Db
Use HarryKart
db.items.insertOne({name:"Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

db.items.insertMany([{name:"moto 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name:"Samsung 30s", price: 28000, rating: 4.1, qty: 2343, sold: 988}, {name:"Samsung 30s", price: 28000, rating: 4.1, qty: 2343, sold: 988, isRealme: true }])