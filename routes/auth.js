const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    console.log('')
    res.json({
        ok:'true'
    })
})

module.exports = router