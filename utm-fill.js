(function () {
  const UTM_KEYS = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_id'];
  const params = new URLSearchParams(window.location.search);

  UTM_KEYS.forEach(key => {
    const value = params.get(key);
    if (value) {
      const input = document.querySelector(`input[name*="${key}"]`);
      if (input) input.value = value;
    }
  });
})();
