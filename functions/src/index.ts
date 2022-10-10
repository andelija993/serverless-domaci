import createComment from "./comments/restful/createComment";
import getAllComments from "./comments/restful/getAllComments";
import updateComment from "./comments/restful/updateComment";
import deleteComment from "./comments/restful/deleteComment";
import onCommentCreated from "./comments/reactive/onCommentCreated"


exports.getAllComments = getAllComments;
exports.createComment = createComment;
exports.oncommentCreated = onCommentCreated;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;