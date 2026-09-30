# Método de cálculo SUS

Para as posições 1, 3, 5, 7 e 9, subtrair 1 da resposta. Para as posições 2, 4, 6, 8 e 10, subtrair a resposta de 5. Somar as dez contribuições e multiplicar por 2,5. O resultado está entre 0 e 100.

Exemplos de verificação técnica: respostas `[5,1,5,1,5,1,5,1,5,1]` produzem 100; `[1,5,1,5,1,5,1,5,1,5]` produzem 0; dez respostas 3 produzem 50. Respostas ausentes ou fora da escala são rejeitadas por `calculateSUS` em `src/core.ts`.

A média do painel considera somente sessões com dez respostas válidas. A distribuição usa faixas descritivas 0–24,9; 25–49,9; 50–74,9; 75–100. O sistema **não** classifica automaticamente um escore como avaliação positiva. Comparações ou limiares exigem critério e contexto documentados antes da análise de um piloto real.

O SUS é distinto das quatro notas de feedback (geral, facilidade, clareza e utilidade percebida). Dados sintéticos permanecem separados no filtro e nas exportações.
