
/* Switch between tabs */
document.addEventListener("DOMContentLoaded", function () {

  window.openCity = function (evt, cityName) {
    let i;
    let tabcontent = document.getElementsByClassName("tabcontent");
    let tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }

    const activeTab = document.getElementById(cityName);
    if (activeTab) {
      activeTab.style.display = "block";
    }

    evt.currentTarget.classList.add("active");
  };

  // Auto-open default tab if present
  const defaultTab = document.getElementById("defaultOpen");
  if (defaultTab) {
    defaultTab.click();
  }

});
