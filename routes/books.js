const router = require('express').Router()
const Books = require('../models/books')

//Get
router.post('/book', async(req, res) => {
    const newBook = new Books({
        title:req.body.title,
        author:req.body.author,
        ISBN:req.body.ISBN,
        pages:req.body.pages,
        price:req.body.price,
        description:req.body.description,
        imageUrl:req.body.imageUrl
    });
    try {
        const saveBook = await newBook.save();
        res.status(200).json(saveBook)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.get('/books', async(req, res) => {
    try{
        const getAllBooks = await Books.find();
        res.status(200).json(getAllBooks)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.get('/:id', async(req, res) => {
    try{
        const book = await Books.findById(req.params.id)
        res.status(200).json(book)
    }catch(err){
        res.status(500).json(err)
    }
})

router.put('/:id', async(req,res) => {
    const query = {_id:req.params.id}
    try{
        const updatedBook = await Books.findOneAndUpdate(query, {
            $set:req.body
        }, {
            new:true
        })
        res.status(200).json(updatedBook)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const query = {_id:req.params.id}
        await Books.findByIdAndDelete(query)
        res.status(200).json('The book has been deleted!')
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;

