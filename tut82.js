// Searching for data in mongo
use harryKart

// This query will return alll the objects with rating = to 4.5
db.items.find({rating:4.5})
db.items.find({rating: {$gte: 4.1}})

db.items.find({rating: {$gt: 4.1}})
// And operator (multiple objects)
db.items.find({rating: {$gt: 4.1}, price: {$gt: 28000}})
db.items.find({rating: {$lt: 4.1}, price: {$gt: 28000}})

//Or operator
db.items.find({ 
    $or: [{rating: {$gt: 4.1}}, {price: {$gt: 28000}}]
})

db.items.find({rating: {$gt: 4.1}}, {rating: 1})
// rating: 1 means it it is only true while others are false i.e. it will only show rating and no other objects in the array
db.items.find({rating: {$gt: 4.1}}, {rating: 1, qty: 1})

// gt = greater than
// gte = greater than equalTo
// lt = less than
// lte = less than equalTo

