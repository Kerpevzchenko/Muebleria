import { domain } from "../constants.js";

var alertIniciar;
var alertCrear;

$(document).ready(function () {
  btnLogin = $("#btnLogin")[0];
  btnReg = $("#btnReg")[0];

  alertIniciar = $("#iniciar-alert")[0];
  $(alertIniciar).addClass("collapse");

  alertCrear = $("#crear-alert")[0];
  $(alertCrear).addClass("collapse");
});

$("#btnLogin").click(function () {
  let correo = $("#correoIniciar").val();
  let contraseña = $("#contrasena").val();

  let data = { correo, contraseña };

  $.ajax(`${domain}/LogIn`, {
    method: "POST",
    data,
    dataType: "json",
    success: function (data, status, req) {
      console.log(data);
      window.location = "/";
    },
    error: function (req, status, e) {
      console.log(status);
      $(alertIniciar).removeClass("collapse");
      $(alertIniciar).addClass("alert-danger");
      $(alertIniciar).text("Correo y/o contraseña incorrectos");
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
      //console.log(data);
      $(alertCrear).removeClass("collapse");
      $(alertCrear).addClass("alert-success");
      $(alertCrear).text("Usuario creado exitosamente");

      $("#correoCrear").val("");
      $("#contrasena1").val("");
      $("#nombre").val("");
    },
    error: function (req, status, e) {
      $(alertCrear).removeClass("collapse");
      $(alertCrear).addClass("alert-danger");
      $(alertCrear).text("No se pudo crear el usuario");
    },
  });
});
