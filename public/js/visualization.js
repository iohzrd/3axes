const container = document.getElementById('visualization');
const data = new vis.DataSet();
function onclick(point) {
  console.log(point);
}
const options = {
  width: '98%',
  height: '98%',
  style: 'dot-color',
  showPerspective: false,
  showGrid: true,
  showLegend: true,
  showShadow: true,
  keepAspectRatio: true,
  verticalRatio: 1.0,
  legendLabel: 'distance',
  onclick,
  cameraPosition: {
    horizontal: 0.75,
    vertical: 0.5,
    distance: 1.75,
  },
  valueMin: 0,
  valueMax: 7000000000,
  xMin: 0,
  xMax: 100,
  xLabel: 'In-group(globalism)',
  yMin: 0,
  yMax: 100,
  yLabel: 'Property(collectivism)',
  zMin: 0,
  zMax: 100,
  zLabel: 'Culture(diversity)',
};


function drawVisualization(x, y, z) {
  data.add({
    x,
    y,
    z,
    style: 'black',
  });
}

drawVisualization(globalism, collectivism, diversity);

for (let index = 0; index < globalResults.length; index++) {
  const { identity, property, society } = globalResults[index].results;
  drawVisualization(identity, property, society);
}

const graph = new vis.Graph3d(container, data, options);
