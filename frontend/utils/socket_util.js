export const socketUtil = (receiveComment, receiveMessage, removeMessage, removeComment) => {
  App.cable.subscriptions.create(
    { channel: "ChatChannel" },
    {
      received: data => {
        switch (data.type) {
          case "comment":
            this.props.receiveComment(data.comment);
            break;
          case "message":
            this.props.receiveMessage(data.message);
            break;
          case "deleteMessage":
            this.props.removeMessage(data.messageId);
            break;
          case "deleteComment":
            this.props.removeComment(data.commentId);
        }
      },
      create: function (data) { return this.perform("create", data) },
      load: function () { return this.perform("load") },
      edit: function (data) { return this.perform("edit", data) },
      destroy: function (data) { return this.perform("destroy", data) }
    }
  );
}