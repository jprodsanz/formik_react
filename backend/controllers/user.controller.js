const User = require('../models/user.model');

module.exports.index = (request, response) => {
    response.json({
        message: "User successfully added"
    });
}
          /* The method below is new */
module.exports.createUser = (request, response) => {
    
    // Mongoose's "create" method is run using our Author model to add a new author to our db's author collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    
    User.create(request.body) //This will use whatever the body of the client's request sends over
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err));
}
module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(users => response.json(users))
        .catch(error => response.status(500).json(error))
}

module.exports.getOneUser = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(user => response.json(user))
        .catch(error => response.status(400).json(error))
}

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(user => response.json(user))
        .catch(error => response.status(400).json(error))
}

module.exports.deleteUser = (request, response) => {
    User.findOneAndDelete({ _id: request.params.id })
        .then(confirmation => response.json(confirmation))
        .catch(error => response.status(400).json(error))
}