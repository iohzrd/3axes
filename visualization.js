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


  // create the animation data
  const x = globalism;
  const y = collectivism;
  const z = diversity;

  const style = (0 % 2 === 0) ? sqrt(pow(x, 2) + pow(y, 2) + pow(z, 2)) : '#00ffff';

  data.add({
    x,
    y,
    z,
    style,
  });

  // specify options
  const options = {
    width: '100%',
    height: '400px',
    style: 'dot-color',
    showPerspective: false,
    showGrid: true,
    keepAspectRatio: true,
    verticalRatio: 1.0,
    legendLabel: 'distance',
    onclick,
    cameraPosition: {
      horizontal: -0.35,
      vertical: 0.25,
      distance: 3,
    },
    xMin: 0,
    xMax: 100,
    yMin: 0,
    yMax: 100,
    zMin: 0,
    zMax: 100,
  };

  // create our graph
  const container = document.getElementById('visualization');
  graph = new vis.Graph3d(container, data, options);
}

drawVisualization();
