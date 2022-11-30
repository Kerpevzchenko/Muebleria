import { domain } from "./constants.js";

$(document).ready(function () {
  RegistrarUsuario();
  console.log(domain);
});

function RegistrarUsuario() {
  jQuery.ajax("https://pokeapi.co/api/v2/pokemon/ditto", {
    success: function (data) {
      console.log(data);
    },
  });
}
