const mongoose =  require('mongoose');
mongoose.connect('mongodb://angular:angular1@ds029466.mlab.com:29466/angular-class', { useNewUrlParser: true }).catch((err)=> {
    console.log(err);
});
mongoose.set('useCreateIndex', true);

const user = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    PhoneNumber: { type: Number }
});

const User = mongoose.model('User', user);

module.exports = User;