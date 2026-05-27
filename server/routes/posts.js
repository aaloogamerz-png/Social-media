const router = require("express").Router();

const Post = require("../models/Post");

const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {

try {

const post = new Post({
userId: req.user.id,
caption: req.body.caption,
mediaUrl: req.body.mediaUrl,
mediaType: req.body.mediaType,
});

await post.save();

res.json(post);

} catch(err) {

res.status(500).json(err);

}

});

router.get("/", async (req, res) => {

try {

const posts = await Post.find()
.sort({ createdAt: -1 });

res.json(posts);

} catch(err) {

res.status(500).json(err);

}

});

router.put("/like/:id", auth, async (req, res) => {

try {

const post = await Post.findById(req.params.id);

if(!post.likes.includes(req.user.id)) {

post.likes.push(req.user.id);

} else {

post.likes =
post.likes.filter(
(id) => id.toString() !== req.user.id
);

}

await post.save();

res.json(post);

} catch(err) {

res.status(500).json(err);

}

});

module.exports = router;
