$(function () {
  $("a").click(function (event) {
    //     Con este if se asegura que this.hash tenga un valor antes de anular el
    // comportamiento predeterminado
    if (this.hash !== "") {
      // Previene el comportamiento de click predeterminado
      event.preventDefault();
      // Guarda el valor del hash en una variable llamada gato
      var gato = this.hash;
      // Usa el método animate para animar el scroll y hacerlo de una forma suave
      // El número opciona (800) especifica el número de milisegundos que se demorará en llegar hasta el área
      $("html, body").animate(
        { scrollTop: $(gato).offset().top },
        800,
        function () {
          // Agrega hash (#) a la URL cuando haya terminado de desplazarse (comportamiento de click predeterminado)
          window.location.hash = gato;
        }
      );
    }
  });
});

var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});
