const Notes = require('../Model/noteModel');

const notes = {
    getNotes: async(req,res)=>{
        try{
            const notes = await Notes.find({user_id:req.user.id});
            res.json(notes);

        }catch(err){
            res.status(500).json({msg: err.message});
        }

    },
    createNotes: async (req,res)=>{
        try{

            const {title, content, date} = req.body;

            const userContent = {
                title,
                content,
                date,
                user_id: req.user.id,
                name:req.user.username
            }

            const data = Notes(userContent);
            data.save();

            res.json({msg: 'Created a Note'})

        }catch(err){
            res.status(500).json({msg: err.message});
        }
    },
    deleteNote: async (req,res)=>{
        try{

            await Notes.findByIdAndDelete(req.params.id);
            res.json({msg:'Delete a Note'});

        }catch(err){
            res.status(400).json({msg: err.message});
        }
    },
    updateNote:async (req,res)=>{
        try{
            const {title, content, date}= req.body;
            await Notes.findOneAndUpdate({_id:req.params.id},{
                title,
                content,
                date
            })
            res.json({msg: 'Update a note'});
        }catch(err){
            res.status(400).json({msg: err.message});
        }
    },
    getNote:async (req,res)=>{
        try{

            const note = await Notes.findById({_id:req.params.id});
            res.json(note);

        }catch(err){
            res.status(400).json({msg: err.message});
        }
    }

}

module.exports = notes;

