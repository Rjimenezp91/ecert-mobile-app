# EcertMobileApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

# Antes de usar

Por motivos de tiempo no la alcancé a hacer responsive, por lo que idealmente hay que ajustar el visualizador en modo dispositivo (tamaño usado como referencia el iphone 12)

# Login

Tiene un validador de rut, a nivel de formulario que lo valida con una expresion regular y con una función, aplicando la lógica del modulo 11 para calcular los RUT chilenos y la contraseña tiene que ser mayor a 5 caracteres para autorizar al usuario.

# Mis Documentos

Tabla con mis documentos que consume la data de un array dummy en el codigo, permite eliminar item de la tabla, descargar pdf, visualizarlo en un modal con la opcion de cambiar de pagina y hacer zoom

# Auth

la autorización es ficticia, pero aplica la logica de restriccion de acceso a las rutas por el Guard, si el usuario está autorizado 
