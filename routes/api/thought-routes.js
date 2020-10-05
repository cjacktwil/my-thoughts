const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

  // /api/thoughts
  router.route('/')
  .get(getAllThoughts);

// /api/thoughts/<userId>
router.route('/:userId')
.post(createThought);


// /api/thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

  router.route('/:thoughtId/reactions')
  .put(addReaction)

  router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;