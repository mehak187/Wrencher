$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".left").toggle();
  });
});
document.getElementById("Upload").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("preview").src = "/img/Avatar.svg";
});
