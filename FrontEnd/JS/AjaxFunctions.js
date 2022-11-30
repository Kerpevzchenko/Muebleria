$(document).ready(function () {
  RegistrarUsuario();
});

function RegistrarUsuario() {
  jQuery.ajax("https://pokeapi.co/api/v2/pokemon/ditto", {
    success: function (data) {
      console.log(data);
    },
  });
}
