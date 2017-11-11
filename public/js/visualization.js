let data = null;
let graph = null;

function onclick(point) {
  console.log(point);
}

// Called when the Visualization API is loaded.
function drawVisualization() {
  // create the data table.
  data = new vis.DataSet();

  // create some shortcuts to math functions
  const sqrt = Math.sqrt;
  const pow = Math.pow;
  const random = Math.random;

  function custom(x, y, z) {
    return (Math.abs(x) + Math.abs(y) + Math.abs(z));
  }

  // create the animation data
  const x = globalism;
  const y = collectivism;
  const z = diversity;

  let value = custom(x, y, z);
  console.log(value);
  if (value <= 1) {
    value = 'white';
  }
  data.add({
    x,
    y,
    z,
    style: value,
  });

  // specify options
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
    valueMax: 299,
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

  // create our graph
  const container = document.getElementById('visualization');
  graph = new vis.Graph3d(container, data, options);
}

drawVisualization();
