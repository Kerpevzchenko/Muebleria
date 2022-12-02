import { domain } from "../constants.js";

$(document).ready(function () {
  btnLogin = $("#btnLogin")[0];
  btnReg = $("#btnReg")[0];
});

$("#btnLogin").click(function () {
  let correo = $("#correoIniciar").val();
  let contraseña = $("#contrasena").val();

  $.ajax(`${domain}/LogIn?correo=${correo}&contraseña=${contraseña}`, {
    dataType: "json",
    success: function (data, status, req) {
      console.log(data);
    },
    error: function (req, status, e) {
      console.log(status);
    },
  });
});

$("#btnReg").click(function () {
  let correo = $("#correoCrear").val();
  let contraseña = $("#contrasena1").val();
  let nombre = $("#nombre").val();
  let rol = 1;

  let data = { correo, contraseña, nombre, rol };
  //console.log(data);

  $.ajax(`${domain}/CreateUser`, {
    method: "POST",
    data,
    dataType: "json",
    success: function (data, status, req) {
      console.log(data);
    },
    error: function (req, status, e) {
      console.log(req);
    },
  });
});
