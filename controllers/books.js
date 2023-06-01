const books = require("../models/book");

exports.getAllBook = async (req, res) => {
      const bookList = await books.find();
      res.send(bookList);
};

exports.insertBook = async (req, res) => {
      try {
            let description = "there is no description for the book";
            let publishedYear = null;
            if (!req.body.title) {
                  return res.json({error: "title required for the body"})
            }
            if (!req.body.author) {
                  return res.json({error: "author required for the body"});
            }

            if (req.body.description) {
                  description = req.body.description;
            }

            if (req.body.publishedYear) {
                  publishedYear = req.body.publishedYear
            }

            const book = new books(
                  {title: req.body.title,
                   author: req.body.author,
                    description: description,
                     publishedYear: publishedYear
                  });
            await book.save();
            res.json({book});

      } catch (error) {
            console.log(error);
      }
};

exports.getSingleBook = async (req, res) => {
      try {
            const book = await books.findOne({_id: req.params.id});
            res.json({book});
      } catch {
            res.status(404);
            res.send(
                  {error: "book doesn't exist!"}
            );
}};

exports.updateBook=async (req, res) => {
      try {
                  const book = await books.findOne({_id: req.params.id});

                  if (req.body.title) {
                        book.title=req.body.title
                  }

                  if (req.body.author) {
                        book.author=req.body.author
                  }

                  if(req.body.description){
                        book.description=req.body.description

                  }
                  if(req.body.publishedYear){
                        book.publishedYear=req.body.publishedYear
                       
                  }


                  await book.save();
                  res.json({book});
            } catch {
                  res.status(404);
                  res.send(
                        {error: "book doesn't exist!"}
                  );
}};

exports.deleteBook=async (req, res) => {
      try {
                  await books.deleteOne({_id: req.params.id});
                  res.send({msg:"book deleted successfully"});
            } catch {
                  res.status(404);
                  res.send(
                        {error: "book doesn't exist!"}
                  );
}};
