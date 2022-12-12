const router = require('express').Router();
const tagsRouter = require('./tags')

router.use('/tags', tagsRouter)


module.exports = router;
