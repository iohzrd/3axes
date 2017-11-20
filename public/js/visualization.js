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
  legendLabel: 'distance',
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

drawVisualization(globalism, collectivism, diversity, 1);
for (let index = 0; index < globalResults.length; index++) {
  const {
    identity, property, society, count,
  } = globalResults[index].results;
  drawVisualization(identity, property, society, count);
}

const graph = new vis.Graph3d(container, data, options);
