const Post = require('../models/post');
const slugify = require('slugify');


exports.create = (req, res) => {
    const {num, content, fee, from, user}= req.body
    const slug =slugify(num)

    switch(true){
        case !num:
            return res.status(400).json({error: 'Vehicle Number is Required'});
            break;
        case !content:
            return res.status(400).json({error: 'Type of vehicle is Required'});
            break;
        case !fee:
            return res.status(400).json({error: 'Type of vehicle is Required'});
            break;
        case !from:
            return res.status(400).json({error: 'Vehicle Came from is Required'});
            break;
    }
    Post.create({num, content, fee, from, user, slug}, (err,post)=>{
        if(err){
            res.status(400).json({error: 'Duplicate Vehicle Number. Please Delete the previous record of Vehicle number from database to repark the vehicle'})
        }
        res.json(post);
    });
    // res.json({message: 'See your server console'});
};

exports.list= (req, res) =>{
    Post.find({})
        .limit(10)
        .sort({createdAt: -1})
        .exec((err, posts)=>{
            if(err){
                console.log(err);
            }
        res.json(posts);
    })
};

exports.read= (req, res) =>{
    const {slug}=req.params
    Post.findOne({slug})
        .exec((err, posts)=>{
            if(err){
                console.log(err);
            }
        res.json(posts);
    })
};

exports.update = (req, res) => {
    const { slug } = req.params;
    const { num, content, fee, from, user } = req.body;
    Post.findOneAndUpdate({ slug }, { num, fee, content, from, user }, { new: true }).exec((err, post) => {
        if (err) console.log(err);
        res.json(post);
    });
};

exports.remove= (req, res) =>{
    const {slug}=req.params
    Post.findOneAndRemove({slug})
        .exec((err, posts)=>{
            if(err){
                console.log(err);
            }
        res.json({
            message: 'Data Deleted'
        });
    })
};

exports.count =(req, res) =>{
    const {slug} =req.params
    Post.count({slug})
        .exec((err, posts)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json(post);
            }
        })
};