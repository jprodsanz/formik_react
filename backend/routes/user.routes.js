const userController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Basic form submission ');
    });
    // this first route is to submit the form 
    app.post('/api/user', userController.createUser);
    // this second route is to display all authors
    app.get('/api/users', userController.getAllUsers);
    // this third route is to display one author 
    app.get('/api/user/:id', userController.getOneUser);
    // this fourth route is to update the author
    app.put('/api/user/:id', userController.updateUser);
    // this fifth route is to delete the author
    app.delete('/api/user/:id', userController.deleteUser);
    
}
