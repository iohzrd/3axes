const container = document.getElementById('visualization');
const data = new vis.DataSet();
function onclick(point) {
  console.log(point);
}
const options = {
  width: '90%',
  height: '90%',
  style: 'dot-color',
  showPerspective: true,
  showGrid: true,
  showLegend: true,
  showShadow: true,
  keepAspectRatio: true,
  verticalRatio: 1.0,
  legendLabel: 'people/result',
  onclick,
  cameraPosition: {
    horizontal: 0.0,
    vertical: 0.0,
    distance: 1.75,
  },
  valueMin: 1,
  xLabel: 'In-group(globalism)',
  xMin: 0,
  xMax: 100,
  yLabel: 'Property(collectivism)',
  yMin: 0,
  yMax: 100,
  zLabel: 'Culture(diversity)',
  zMin: 0,
  zMax: 100,
};


function drawVisualization(x, y, z, count) {
  data.add({
    x,
    y,
    z,
    style: count,
  });
}

drawVisualization(globalism, collectivism, diversity, 0);

globalResults.forEach((singleResult) => {
  const {
    identity, property, society, count,
  } = singleResult.results;
  drawVisualization(identity, property, society, count);
});

// for (let x = 0; x < 101; x += 10) {
//   for (let y = 0; y < 101; y += 10) {
//     for (let z = 0; z < 101; z += 10) {
//       drawVisualization(x, y, z, Math.floor(Math.random() * 1000) + 1);
//     }
//   }
// }

const graph = new vis.Graph3d(container, data, options);
