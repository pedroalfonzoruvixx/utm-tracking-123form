(function () {
  console.log('✅ Script UTM cargado desde GitHub');

  const UTM_MAP = {
    utm_source: 'lead_source',
    utm_medium: 'lead_medium',
    utm_campaign: 'lead_campaign'
  };

  const params = new URLSearchParams(window.location.search);

  function tryFillFields() {
    let allFound = true;

    Object.entries(UTM_MAP).forEach(([utmKey, fieldName]) => {
      const value = params.get(utmKey);
      const input = document.querySelector(`input[name="${fieldName}"]`);

      if (input && value) {
        input.value = value;
        console.log(`✅ Campo ${fieldName} rellenado con: ${value}`);
      } else {
        console.warn(`⏳ Campo ${fieldName} no disponible aún`);
        allFound = false;
      }
    });

    if (!allFound) setTimeout(tryFillFields, 300);
  }

  tryFillFields();
})();

