import express from "express"

import {clearDb, deleteNote, editNote, newNote, viewAllNotes, viewNote} from "../controller/noteControllers.js"

const noteRouter=express.Router();

noteRouter.post("/note/create",newNote);
noteRouter.get("/note/clearAll",clearDb);
noteRouter.patch("/note/edit",editNote);
noteRouter.delete("/note/delete/:id",deleteNote);
noteRouter.get("/note/view/:id",viewNote);
noteRouter.get("/note/viewAll",viewAllNotes);




export default noteRouter