// ALL MONGO SPECIFIC CODE WILL BE HANDLED IN ITS OWN MODULE
// const mongoose = require('mongoose')

// // node mongo.js parameters
// const password = process.argv[2]
// const tempName = process.argv[3]
// const tempNumber = process.argv[4]

// const url =
//   `mongodb+srv://fullstack:${password}@cluster0-ukl7e.mongodb.net/phonebook-app?retryWrites=true&w=majority`

// mongoose.connect(url, { useNewUrlParser: true })

// const personSchema = new mongoose.Schema({
//     name: String,
//     number: String,
// })

// const Person = mongoose.model('Person', personSchema)

// const person = new Person({
//     name: tempName,
//     number: tempNumber,
// })

// if ( process.argv.length < 3) {
//     console.log('Give password as argument')
//     process.exit(1)
// } 
// else if (process.argv.length === 3){
// // When executed, program prints all people stored in the database
// Person.find({}).then(result => {
//     result.forEach(person => {
//       console.log(person.name, person.number)
//     })
//     mongoose.connection.close()
//   })
// }
// else if ( process.argv.length === 4) {
//     console.log('Please supply both name and phone number.')
//     process.exit(1)
// } 
// else if (process.argv.length === 5){
// // Saves an added person to database
//     person.save().then(res=>{
//     console.log('Person saved!')
//     mongoose.connection.close()
//     })
// }
// else if (process.argv.length > 5){
//     console.log('Too many arguments. Person not saved.')
//     process.exit(1)
// }