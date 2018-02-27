// Modal Function


function openModal(linkName) {
  var link = linkName;
  var modal;

  switch (link) {
    case "event__link":
      document.getElementById('event__modal').style.display = "block";
      document.getElementById('accomadation__modal').style.display = "none";
      document.getElementById('location__modal').style.display = "none";
      location.href = "#event__modal";
    break;
    case "accomadation__link":
      document.getElementById('accomadation__modal').style.display = "block";
      document.getElementById('event__modal').style.display = "none";
      document.getElementById('location__modal').style.display = "none";
      location.href = "#accomadation__modal";
    break;
    case "location__link":
      document.getElementById('location__modal').style.display = "block";
      document.getElementById('accomadation__modal').style.display = "none";
      document.getElementById('event__modal').style.display = "none";
      location.href = "#location__modal";
    break;
    default:
  }
  
  
}
