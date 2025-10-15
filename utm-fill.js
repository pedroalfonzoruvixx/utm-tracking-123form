(function () {
  console.log('🔍 Script cargado desde URL externa');

  const targetId = '119209168';
  const maxAttempts = 20;
  let attempts = 0;

  function findField() {
    const el = document.getElementById(targetId);

    if (el) {
      console.log(`✅ Elemento con id="${targetId}" encontrado:`, el);

      const input = el.querySelector('input, select, textarea');
      if (input) {
        console.log('📦 Campo dentro del contenedor:', input);
        input.value = 'valor-de-prueba'; // Puedes cambiar esto por cualquier valor
      } else {
        console.warn('⚠️ No se encontró campo dentro del contenedor');
      }
    } else {
      console.warn(`⏳ Intento ${attempts + 1}: el elemento aún no está disponible`);
      if (attempts < maxAttempts) {
        attempts++;
        setTimeout(findField, 300);
      } else {
        console.error('❌ No se encontró el elemento después de varios intentos');
      }
    }
  }

  findField();
})();


