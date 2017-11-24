const container = document.getElementById('visualization');
const data = new vis.DataSet();

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
  cameraPosition: {
    horizontal: 0,
    vertical: 0.0,
    distance: 1.75,
  },
  tooltip(point) {
    return `
      <p>Closest match: <b>${getIdeology(point.x, point.y, point.z)}</b></p>
      <p>In-group(globalism): <b>${point.x}</b></p>
      <p>Property(collectivism): <b>${point.y}</b></p>
      <p>Culture(diversity): <b>${point.z}</b></p>
      <p>Count: <b>${point.value}</b></p>`;
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

// drawVisualization(globalism, collectivism, diversity, 0);

globalResults.forEach((singleResult) => {
  const {
    identity, property, society, count,
  } = singleResult.results;
  drawVisualization(identity, property, society, count);
});

const graph = new vis.Graph3d(container, data, options);
