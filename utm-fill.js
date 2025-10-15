function getReferrer() {
  setTimeout(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    var utmSource = urlParams.get('utm_source');
    var utmMedium = urlParams.get('utm_medium');
    var utmCampaign = urlParams.get('utm_campaign');

    try {
      loader.engine.document.getElementById(119209168).setValue({ value: utmSource });
      loader.engine.document.getElementById(119209170).setValue({ value: utmMedium });
      loader.engine.document.getElementById(119209171).setValue({ value: utmCampaign });

      console.log('✅ UTM valores asignados correctamente');
    } catch (e) {
      console.error('❌ Error al asignar valores con loader.engine:', e);
    }
  }, 1000);
}

window.onclick = getReferrer;


