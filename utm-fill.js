(function () {
  console.log('✅ Script UTM cargado desde GitHub');

  const UTM_MAP = {
    utm_source: '119209168',
    utm_medium: '119209170',
    utm_campaign: '119209171'
  };

  const params = new URLSearchParams(window.location.search);
  let attempts = 0;
  const maxAttempts = 20;

  function tryFillFields() {
    let allFound = true;

    Object.entries(UTM_MAP).forEach(([utmKey, fieldId]) => {
      const value = params.get(utmKey);
      const input = document.getElementById(fieldId);

      console.log(`🔍 Buscando campo con id: ${fieldId}`);
      console.log(`🔗 Valor UTM (${utmKey}): ${value}`);
      console.log(`📦 Campo encontrado:`, input);

      if (input && value) {
        input.value = value;
        console.log(`✅ Campo ${fieldId} rellenado con: ${value}`);
      } else {
        console.warn(`⏳ Campo ${fieldId} no disponible aún`);
        allFound = false;
      }
    });

    if (!allFound && attempts < maxAttempts) {
      attempts++;
      setTimeout(tryFillFields, 300);
    } else if (!allFound) {
      console.error('❌ No se pudieron rellenar todos los campos después de varios intentos.');
    }
  }

  tryFillFields();
})();


