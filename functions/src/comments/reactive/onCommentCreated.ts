import * as functions from "firebase-functions";
import { IComment } from "../models/models";

const unapropriateWords:string[] =["fuck", "bad-word2", "bad-word3", "bad-word4"]

const onCommentCreated = functions.firestore
  .document("comments/{commentId}")
  .onCreate((snapshot, context) => {
  var comment = <IComment>snapshot.data();
  var commentDesc:string = comment.desc;

  var star= "";
   unapropriateWords.forEach(word => {
    if(commentDesc.includes(word)){

      for(let i = 0;i<word.length;i++){
        star += "*";
      }
      
      commentDesc= commentDesc.replace(new RegExp(word, "g"),star);
      snapshot.ref.update({desc:commentDesc})
    }
    return null;
   });
    console.log("Created new comment", comment);
    return null;
  });

export default onCommentCreated;
