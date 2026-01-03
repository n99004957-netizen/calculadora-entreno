function calcular() {
  const peso = Number(document.getElementById("peso").value);
  const minutos = Number(document.getElementById("minutos").value);
  const deporte = document.getElementById("deporte").value;

  let factor = 0;
  if (deporte === "correr") factor = 0.12;
  if (deporte === "ciclismo") factor = 0.09;
  if (deporte === "natacion") factor = 0.11;

  const calorias = peso * minutos * factor;
  const hidratos = (calorias * 0.6) / 4;
  const grasas = (calorias * 0.4) / 9;

  document.getElementById("resultado").textContent =
`🔥 Calorías: ${calorias.toFixed(0)} kcal
🍞 Hidratos: ${hidratos.toFixed(0)} g
🥑 Grasas: ${grasas.toFixed(0)} g`;

  document.getElementById("comidas").textContent =
`🍽️ Para reponer:
- Plátano + yogur
- Arroz o patata cocida
- Tostada integral con miel
- Aguacate o frutos secos`;
}
