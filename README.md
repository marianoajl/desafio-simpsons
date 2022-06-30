# desafio-simpsons

Como parte de este desafío se pide crear una app/web que actúe como cliente de esta api de pruebas, 
de la cual se tiene esta documentación https://test-simpsons-assistcard.herokuapp.com/api-docs 

Se necesita que la app/web permita consultar, agregar y eliminar personajes de la lista que tiene almacenados.

En el caso de que desee restaurar la lista original de personajes puede usar el método POST resetcharacterslist, 
pero no es necesario que esto forme parte de la app que va a desarrollar.

Aquí se puede ver un prototipo interactivo con el diseño propuesto por el área de UX:
https://www.figma.com/file/mBtXepIRpi5Y5DA7UdDci1/Laboratorio?node-id=3%3A110

Algunos detalles para considerar que no llegan a terminar de auto explicarse con el prototipo interactivo:

•	La pantalla de lista de personajes inicia con una animación de cargando (la que usted desee) que es lo que se muestra hasta que llegue 
la respuesta de la api del método GET characters.

•	Para intentar eliminar un pasajero la acción que debe realizar el usuario es mantener apretado sobre uno de los personajes de la lista. 
  (a diferencia del seleccionar que es solo un tap normal) Si el usuario confirma entonces hay que invocar al DELETE characters.
•	Cuando toque uno de los personajes el paso a la pantalla de personajes debe ser instantáneo mostrando inmediatamente el nombre y apellido del 
  personaje y el resto de la información debe cargarse asincrónicamente con el GET characters enviando el id del personaje seleccionado. 
  Puede utilizar un color o una imagen por defecto en caso de que la url de la imagen esté mal formada o dicha url ya no sea válida.
•	El proceso de crear un nuevo personaje está divido en 2 subpantallas, luego de completar todos los datos de la primera se avanza a la segunda, 
  y luego de completar los datos de la 2da pantalla se envía todo al POST characters (ver documentación de la api)
•	En la 2da pantalla en el input de “Url de imagen” no es necesario verificar si la url apunta a una imagen real o no.
•	Mientras se estén enviando los datos a la api para crear un nuevo personaje por favor bloquear el botón de Grabar para evitar que se creen de más. 
  Y si la respuesta de la api no trae la propiedad result=true mostrar un Toast o un Alert indicando que “Por favor reintente mas tarde”

Por favor tómese todo el tiempo que considere necesario, guarde sus cambios en un repositorio de código y cuando desee realizar la entrega envíe el 
enlace de dicho repositorio.


