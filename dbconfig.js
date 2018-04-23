const mongoose = require('mongoose');

mongoose.connect('mongodb://matiasmlab:slackmen812@ds239988.mlab.com:39988/mbdev_testing_1');

const Schema = mongoose.Schema;


const personSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String
});

const Person = mongoose.model('Person', personSchema);

const john = new Person({
    firstName: 'John',
    lastName: 'Doe',
    address: '555 Main St.'
});

john.save((err) => {
    if (err) throw err;
    console.log('Person saved!');
});

const jane = new Person({
    firstName: 'Jane',
    lastName: 'Doe',
    address: '555 Main St.'
});

jane.save((err) => {
    if (err) throw err;
    console.log('Person saved!');
});

module.exports = {
    Person: Person
}