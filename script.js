document.addEventListener("DOMContentLoaded", function () {

  const profilePhoto = document.getElementById("profilePhoto");

  if (!profilePhoto) {
    return;
  }


  /*
    Elsődleges kép:
    /profile.png

    Ha valamiért nem töltődik be,
    automatikusan megpróbálja:
    /images/profile.png
  */

  profilePhoto.addEventListener("error", function () {

    const currentSrc = profilePhoto.getAttribute("src");

    if (
      currentSrc &&
      currentSrc.includes("images/profile.png")
    ) {
      return;
    }

    profilePhoto.src =
      "./images/profile.png?v=20261101-4";

  });

});