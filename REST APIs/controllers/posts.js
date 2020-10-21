exports.getPosts = (req, res, next) => {
  //JSON data
  res.json({
    posts: [
      {
        title: "My First Post",
        desc: "This is an interesting topic",
        date: new Date(),
      },
      {
        title: "Baba Ka Dhaba",
        desc: "This is  trending ",
        date: new Date(),
      },
    ],
  });
};

//ToDO Task: Post the data into a json file-15 min
exports.addPost = (req, res, next) => {
  console.log(req.body);
  res.send("<h1>" + req.body.title + "</h1>");
};
