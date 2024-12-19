
    // Pesos para os ajustes
    const weights = {
      chest: 2, // Peso 2 para tórax
      waist: 1,
      hip: 1,
    };

    const sizeMapping = [
      { min: 4, max: 6, size: 'PP' },
      { min: 7, max: 8, size: 'P' },
      { min: 9, max: 12, size: 'M' },
      { min: 13, max: 14, size: 'G' },
      { min: 14, max: 16, size: 'GG' },
      { min: 17, max: 20, size: 'XGG' },
    ];

function calculateRecommendedSize() {
  const chest = parseInt(document.getElementById('chest').value, 10);
  const waist = parseInt(document.getElementById('waist').value, 10);
  const hip = parseInt(document.getElementById('hip').value, 10);

  // Cálculo ponderado
  const weightedScore = chest * weights.chest + waist * weights.waist + hip * weights.hip;
  
  // Determinar o tamanho baseado no range
  let recommendedSize = 'M';
  
  // Verificar em qual intervalo o valor calculado se encaixa
  for (const range of sizeMapping) {
    if (weightedScore >= range.min && weightedScore <= range.max) {
      recommendedSize = range.size;
      break;
    }
  }

  // Exibir o tamanho recomendado
  document.getElementById('recommendedSize').innerText = recommendedSize;
}

document.addEventListener('input', (event) => {
  if (['chest', 'waist', 'hip'].includes(event.target.id)) {
    calculateRecommendedSize();
  }
});

    document.addEventListener('input', (event) => {
      if (['chest', 'waist', 'hip'].includes(event.target.id)) {
        calculateRecommendedSize();
      }
    });

    // Inicializar tamanho recomendado
    calculateRecommendedSize();
  