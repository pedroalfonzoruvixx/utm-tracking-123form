(function () {
  const controls = loader.getEngine().getDocument().getControlsList();

  const targetIds = [119209168, 119209170, 119209171];

  targetIds.forEach(id => {
    const control = controls.find(c => c.id === id);
    if (control) {
      control.setValue({ value: `valor para ${id}` });
      console.log(`✅ Campo ${id} modificado`);
    } else {
      console.warn(`⚠️ Campo ${id} no encontrado`);
    }
  });
})();


