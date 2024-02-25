const { createCategory } = require('./categoryController');

router.post('/categories', createCategory);
router.get('/', (req, res) => {
    res.send('Category routes');
  });

module.exports = router;
