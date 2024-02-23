const Todo = require("./Todoschema");


exports.addPostFile = async (req, res) => {
  try {
    const PostFile = await Todo.create(req.body);
    res.status(200).json(PostFile);
    console.log(PostFile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, err: err.message });
  }
};