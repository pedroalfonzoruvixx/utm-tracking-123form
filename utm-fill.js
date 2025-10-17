jQuery(document).ready(function() {
  setTimeout(function() {
    var urlParams = new URLSearchParams(window.location.search);

    var utmSource = urlParams.get('utm_source') || '';
    var utmMedium = urlParams.get('utm_medium') || '';
    var utmCampaign = urlParams.get('utm_campaign') || '';
    var utmId = urlParams.get('utm_id') || '';

    // Combinamos todos los UTM en un solo string
    var combinedUTM = `source=${utmSource}&medium=${utmMedium}&campaign=${utmCampaign}&id=${utmId}`;

    // ID del campo oculto donde querés guardar el string combinado
    var targetControl = loader.getEngine().getDocument().getControlsList().find(function(control) {
      return control.id === 119209171; // ← reemplazá con el ID del campo oculto que usarás
    });

    if (targetControl) {
      targetControl.setValue({ value: combinedUTM });
      console.log('UTM combinados asignados:', combinedUTM);
    } else {
      console.warn('No se encontró el control con ID 119209171');
    }
  }, 2000);
});


window.onclick = getReferrer;




