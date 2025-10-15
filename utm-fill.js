(function () {
  const UTM_MAP = {
    utm_source: 'lead_source',
    utm_medium: 'lead_medium',
    utm_campaign: 'lead_campaign'
  };

  const params = new URLSearchParams(window.location.search);

  Object.entries(UTM_MAP).forEach(([utmKey, fieldName]) => {
    const value = params.get(utmKey);
    if (value) {
      const input = document.querySelector(`input[name="${fieldName}"]`);
      if (input) input.value = value;
    }
  });
})();
