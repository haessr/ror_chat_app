import consumer from "./consumer";
import { scroll_bottom } from "../packs/chatroom_helper";

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    // console.log(data.new_message);
    // document.getElementById("message-container").append(`${data.new_message}`);
    // document.getElementById("message-container").append(data.new_message);
    // $("#message-container").append(data.partial);

    document
      .querySelector("#message-container")
      .insertAdjacentHTML("beforeend", data.partial);

    scroll_bottom();
  },
});
