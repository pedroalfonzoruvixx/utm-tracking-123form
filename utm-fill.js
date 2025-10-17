function getReferrer() {
  setTimeout(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    // Corrección de nombres: source, medium, campaign
    var utmSource = urlParams.get('utm_source');
    var utmMedium = urlParams.get('utm_medium');
    var utmCampaign = urlParams.get('utm_campaign');

    // IDs reales de los campos ocultos en 123FormBuilder
    loader.engine.document.getElementById(119209168).setValue({ value: utmSource });
    loader.engine.document.getElementById(119209170).setValue({ value: utmMedium });
    loader.engine.document.getElementById(119209171).setValue({ value: utmCampaign });
  }, 1000);
}

window.onclick = getReferrer;



