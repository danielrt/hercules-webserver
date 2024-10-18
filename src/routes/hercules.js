const router = require('express-promise-router')();
const basicAuth = require('express-basic-auth');

const authController = require('../controllers/auth');
const herculesController = require('../controllers/hercules');

var challangeAuth = basicAuth( 
    {
        authorizer : authController,
        //authorizeAsync : true,
        unauthorizedResponse : { success : 0 }
    }
);

router.post('/login', challangeAuth, function(req, res) {
    res.status(200).send({ success : 1 });
});

router.get('/executeCommand', herculesController.executeCommand);

router.get('/ping', function(req, res) {
    res.status(200).send({ success : 1 });
});

module.exports = router;