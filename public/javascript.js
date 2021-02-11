"use strict";

(function () {
  $(window).on("load", function () {
    $(document).ready(function () {
      $("#modal_nickname").modal({
        keyboard: false,
        focus: true,
        backdrop: "static",
      });
    });
  });

  document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    const form = document.querySelector(".needs-validation");
    const nick = document.getElementById("nickname").value;

    if (!form.checkValidity()) {
      event.stopPropagation();
    }
    form.classList.add("was-validated");

    if (!nick) {
      return;
    }

    $(document).ready(function () {
      $("#modal_nickname").modal("hide");
    });

    socket.emit("user", nick);
  });
})();
