// chatName
// isGroupChat
// users 
// latestMessage
// groupAdmin

const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
    chatName:{
        type: String,
        trim: true,
    },
    isGroupedchat:{
        type: Boolean,
        default: false,
    },
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],
    latestMessage:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },
    groupAdmin:{
        typer:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},
{
    timestamps:true,
});

const Chat = mongoose.model("Chat",chatModel);
module.exports = Chat;