$(document).ready(function () {
  // Manejador de evento al hacer clic en los botones de "Ver Video"
  $('.btn-abrir-modal').on('click', function () {
    // Obtener la URL del video del atributo data-video
    const videoUrl = $(this).attr('data-video');
    
    // Asignar el enlace al iframe dentro de la modal
    $('#iframeVideo').attr('src', videoUrl + '?autoplay=1');
    
    // Abrir el modal usando la API de Bootstrap mediante jQuery
    const modalElement = document.getElementById('videoModal');
    const myModal = new bootstrap.Modal(modalElement);
    myModal.show();
  });

  // Limpiar la URL del iframe al cerrar el modal para que el audio del video se detenga
  $('#videoModal').on('hidden.bs.modal', function () {
    $('#iframeVideo').attr('src', '');
  });
});