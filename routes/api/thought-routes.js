const router = require('express').Router();
const {
    createThought,
    deleteThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// /api/thoughts/<thoughtId>
router.route('/:thoughtId').post(createThought);

// /api/thoughts/<thoughtId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(deleteThought);

  router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;