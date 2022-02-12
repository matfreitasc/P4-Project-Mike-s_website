// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Gmaps

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.83447153911941, lng: -84.37803494471282 },
    zoom: 18,
    mapId: "7bfdc35a0d7d9150",
  });
  new google.maps.Marker({
    position: { lat: 33.83447153911941, lng: -84.37803494471282 },
    map,
    tittle: "Hello World!",
  });
}
