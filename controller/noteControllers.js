import Note from "../model/Note.js";


export const newNote=async(req,res)=>{
    try{
         const {title,content}=req.body;
         const note=await Note.create({title,content});
         res.status(201).send(note);

        

    }
    catch(err){
        console.log(`NEWNOTE ERROR :${err.message}`)
        res.status(400).send("Creating note failed")
    }

}

export const clearDb=async(req,res)=>{


try{
    const note=await Note.destroy({where:{},truncate:true});

    res.status(201).send("cleared notes-",note)

}
  catch(err){
        console.log(`CLEARDB ERROR :${err.message}`)
        res.status(400).send("Cleardb  failed")
    }


}

export const editNote=async(req,res)=>{

    try{
        const {title,content,id}=req.body;
        const note=await Note.findByPk(id);
        if(!note){
            throw new Error("Note not exist in db");
        }

        note.title=title;
        note.content=content;
        await note.save();

        res.status(201).send(note);


    }
     catch(err){
        console.log(`EDIT NOTE ERROR :${err.message}`)
        res.status(400).send("Note edit failed")
    }
}

export const deleteNote=async(req,res)=>{
    try{
        const {id}=req.params;

        const note=await Note.findByPk(id);
        if(!note){
            throw new Error("note doesnt exist in db")
        }

        await note.destroy();

        res.status(201).send("Deleted successfully ",id);
    }
   catch(err){
        console.log(`DELETE NOTE ERROR :${err.message}`)
        res.status(400).send("Note DELETE failed",err.message)
    }
}

export const viewNote=async(req,res)=>{
    try{
        const {id}=req.params;

        const note=await Note.findByPk(id);
        if(!note){
            throw new Error("Note doesnt exist")
        }
        
        res.status(200).send(note);
    }
       catch(err){
        console.log(`View NOTE ERROR :${err.message}`)
        res.status(400).send("Note View failed",err.message)
    }
}

export const viewAllNotes=async(req,res)=>{
        const page=1;

    try{
        const notes=await Note.findAll({offset:((page-1)*10),limit:10,order:[["createdAt","DESC"]]});
        if(notes.length === 0){
            throw new Error("Failed to fetch all notes")
        }
        res.status(200).send(notes);
    }
     catch(err){
        console.log(`View ALL NOTES ERROR :${err.message}`)
        res.status(400).send(`Note ALL View failed ${err.message}`)
    }
}