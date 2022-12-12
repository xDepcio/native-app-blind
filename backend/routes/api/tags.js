const express = require('express')
const asyncHandler = require('express-async-handler')
const { Op } = require('sequelize')
const {Tag} = require('../../db/models')

const router = express.Router()
// Get avalible deliveries
router.get('/', asyncHandler(async (req, res) => {
    const tag = await Tag.findOne({
        where: {
            tagId: req.query.tagId
        }
    })

    res.json(tag)
}))

module.exports = router
