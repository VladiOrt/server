const router = require('express').Router();
const routesUser = require('./user.routes')
const routesRoles = require('./roles.routes')
const routesInfo = require('./studio.routes')

router.get('/', (req, res) => res.status(200).json({ msg:"Welcome to the app" }) );
router.use('/users', routesUser)
router.use('/roles', routesRoles)
router.use('/Info', routesInfo)

module.exports = router;