let table;
let data = [];
let colors = [];

function preload() {
  // Load the CSV file
  table = loadTable('continent_population.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800);
  noLoop(); // Ensure draw() only runs once
  
  // Parse data from CSV
  for (let row of table.rows) {
    let continent = row.get('Continent');
    let population = int(row.get('Population'));
    data.push({ continent, population });
  }

  // Generate random colors for each continent
  for (let i = 0; i < data.length; i++) {
    colors.push(color(random(255), random(255), random(255)));
  }

  // Draw the pie chart
  drawPieChart();
}

function drawPieChart() {
  let totalPopulation = data.reduce((sum, d) => sum + d.population, 0);
  let lastAngle = 0;

  // Draw each slice
  for (let i = 0; i < data.length; i++) {
    let d = data[i];
    let angle = (d.population / totalPopulation) * TWO_PI;
    fill(colors[i]);
    arc(width / 2, height / 2, 600, 600, lastAngle, lastAngle + angle);
    lastAngle += angle;

    // Draw labels
    let midAngle = lastAngle - angle / 2;
    let labelX = width / 2 + cos(midAngle) * 350;
    let labelY = height / 2 + sin(midAngle) * 350;
    let percentage = ((d.population / totalPopulation) * 100).toFixed(2) + "%";
    fill(0);
    textAlign(CENTER, CENTER);
    text(d.continent + "\n" + percentage, labelX, labelY);
  }

  // Draw title
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("World Population by Continent", width / 2, 50);
}
