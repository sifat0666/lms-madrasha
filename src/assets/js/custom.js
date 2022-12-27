// //Modal Draggable
// $(".modal-content").on("mousedown", function (downEvt) {
//   var $draggable = $(this);
//   var x = downEvt.pageX - $draggable.offset().left,
//     y = downEvt.pageY - $draggable.offset().top;
//   $("body").on("mousemove.draggable", function (moveEvt) {
//     $draggable.closest(".modal-dialog").offset({
//       left: moveEvt.pageX - x,
//       top: moveEvt.pageY - y,
//     });
//   });
//   $("body").on("mouseup", function () {
//     $("body").off("mousemove.draggable");
//   });
//   $draggable.closest(".modal").one("bs.modal.hide", function () {
//     $("body").off("mousemove.draggable");
//   });
// });

//Password Showing Function

function passwordshowhide() {
  let inputpasword = document.getElementById("password");
  let icon = document.querySelector(".pass-show");
  if (inputpasword.type === "password") {
    inputpasword.type = "text";
    icon.classList.add("bi-eye-slash");
    icon.classList.remove("bi-eye");
  } else {
    inputpasword.type = "password";
    icon.classList.add("bi-eye");
    icon.classList.remove("bi-eye-slash");
  }
}

//All Permisson Select
function allSelect(item) {
  let checkbox = document.getElementsByName("checkbox");
  let n = checkbox.length;
  for (let i = 0; i < n; i++) {
    checkbox[i].checked = item.checked;
  }
}
//Sweet Alert
function presetAttendance() {
  swal({
    title: "Students is Present?",
    icon: "success",
    buttons: ["Cancle", "Yes"],
  });
}
function absentAttendance() {
  swal({
    title: "Students is Absent?",
    icon: "success",
    buttons: ["Cancle", "Yes"],
  });
}

//chosen Education Year
$(".chosen-select").chosen({
  no_results_text: "Oops, nothing found!",
});
