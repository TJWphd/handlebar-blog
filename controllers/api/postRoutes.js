const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: make PUT route for updating.
// router.put('/comment/:id', withAuth, async (req, res) => {
//   try {
//     const comment = await Comment.create({
//       ...req.body,
//       user_id: req.session.user_id,
//       post_id: req.params.id,
//     });

//     res.status(200).json(comment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/comment/:id', withAuth, async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: req.params.id,
    });
    console.log(comment);

    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
