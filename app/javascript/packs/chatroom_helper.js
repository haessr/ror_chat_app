const clear_input = function () {
  const input = document.querySelector("#message_body");
  input.value = "";
};

export const scroll_bottom = function () {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
};

export const submit_message = function () {
  const button = document.querySelector(".btnSubmit");

  document
    .querySelector("#message_body")
    .addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        button.click();
        // document.querySelector("#message_body").value = "";
        clear_input();
        // input.value = "";
        // console.log("enter");
      }
    });
};
