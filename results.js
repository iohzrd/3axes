

function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) { return pair[1]; }
  }
  return (NaN);
}

function setBarValue(name, value) {
  const innerel = document.getElementById(name);
  const outerel = document.getElementById(`bar-${name}`);
  outerel.style.width = (`${value}%`);
  innerel.innerHTML = (`${value}%`);
  if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
    innerel.style.visibility = 'hidden';
  }
}

const idtyArray = ['Globalist', 'Cosmopolitan', 'Civic Nationalist', 'Ethno-Nationalist', 'Covenant Communitarian'];
const propArray = ['Communist', 'Socialist', 'Statist', 'Minarchist', 'Laissez-faire'];
const cultArray = ['Revolutionary', 'Progressive', 'Neutral', 'Traditional', 'Reactionary'];

function setLabel(val, ary) {
  if (val > 100) { return ''; } else
  if (val >= 80) { return ary[0]; } else
  if (val >= 60) { return ary[1]; } else
  if (val >= 40) { return ary[2]; } else
  if (val >= 20) { return ary[3]; } else
  if (val >= 0) { return ary[4]; } return '';
}

const globalism = getQueryVariable('i');
const collectivism = getQueryVariable('p');
const diversity = getQueryVariable('c');
const tribalism = (100 - globalism).toFixed(1);
const privatism = (100 - collectivism).toFixed(1);
const cohesion = (100 - diversity).toFixed(1);

setBarValue('globalism', globalism);
setBarValue('tribalism', tribalism);

setBarValue('collectivism', collectivism);
setBarValue('privatism', privatism);

setBarValue('diversity', diversity);
setBarValue('cohesion', cohesion);

document.getElementById('in-group-label').innerHTML = setLabel(globalism, idtyArray);
document.getElementById('property-label').innerHTML = setLabel(collectivism, propArray);
document.getElementById('culture-label').innerHTML = setLabel(diversity, cultArray);

let ideology = '';
let ideodist = Infinity;
for (let i = 0; i < ideologies.length; i++) {
  let dist = 0;
  dist += Math.pow(Math.abs(ideologies[i].stats.idty - globalism), 1);
  dist += Math.pow(Math.abs(ideologies[i].stats.prop - collectivism), 1);
  dist += Math.pow(Math.abs(ideologies[i].stats.cult - diversity), 1);
  if (dist < ideodist) {
    ideology = ideologies[i].name;
    ideodist = dist;
  }
}
document.getElementById('ideology-label').innerHTML = ideology;

window.onload = function () {
  const c = document.getElementById('banner');
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#EEEEEE';
  ctx.fillRect(0, 0, 800, 600);

  let img = document.getElementById('img-globalism');
  ctx.drawImage(img, 20, 120, 100, 100);
  img = document.getElementById('img-tribalism');
  ctx.drawImage(img, 680, 120, 100, 100);
  img = document.getElementById('img-collectivism');
  ctx.drawImage(img, 20, 240, 100, 100);
  img = document.getElementById('img-privatism');
  ctx.drawImage(img, 680, 240, 100, 100);
  img = document.getElementById('img-diversity');
  ctx.drawImage(img, 20, 360, 100, 100);
  img = document.getElementById('img-cohesion');
  ctx.drawImage(img, 680, 360, 100, 100);

  ctx.fillStyle = '#222222';
  ctx.fillRect(120, 130, 560, 80);
  ctx.fillRect(120, 250, 560, 80);
  ctx.fillRect(120, 370, 560, 80);
  ctx.fillStyle = '#ffff00';
  ctx.fillRect(120, 134, 5.6 * globalism - 2, 72);
  ctx.fillStyle = '#0000ff';
  ctx.fillRect(682 - 5.6 * tribalism, 134, 5.6 * tribalism - 2, 72);
  ctx.fillStyle = '#00ffff';
  ctx.fillRect(120, 254, 5.6 * collectivism - 2, 72);
  ctx.fillStyle = '#ff0000';
  ctx.fillRect(682 - 5.6 * privatism, 254, 5.6 * privatism - 2, 72);
  ctx.fillStyle = '#ff00ff';
  ctx.fillRect(120, 374, 5.6 * diversity - 2, 72);
  ctx.fillStyle = '#00ff00';
  ctx.fillRect(682 - 5.6 * cohesion, 374, 5.6 * cohesion - 2, 72);
  ctx.fillStyle = '#222222';
  ctx.font = '700 80px Montserrat';
  ctx.textAlign = 'left';
  ctx.fillText('3d', 20, 90);
  ctx.font = '40px Montserrat';
  ctx.textAlign = 'right';
  ctx.fillText(ideology, 780, 87.5);

  ctx.font = '50px Montserrat';
  ctx.textAlign = 'left';
  if (globalism > 30) { ctx.fillText(`${globalism}%`, 130, 187.5); }
  if (collectivism > 30) { ctx.fillText(`${collectivism}%`, 130, 307.5); }
  if (diversity > 30) { ctx.fillText(`${diversity}%`, 130, 427.5); }
  ctx.textAlign = 'right';
  if (tribalism > 30) { ctx.fillText(`${tribalism}%`, 670, 187.5); }
  if (privatism > 30) { ctx.fillText(`${privatism}%`, 670, 307.5); }
  if (cohesion > 30) { ctx.fillText(`${cohesion}%`, 670, 427.5); }

  ctx.font = '300 30px Montserrat';
  ctx.fillText('3axes.github.io', 780, 55);
  ctx.textAlign = 'center';
  ctx.fillText(`In-group Axis: ${document.getElementById('in-group-label').innerHTML}`, 400, 125);
  ctx.fillText(`Property Axis: ${document.getElementById('property-label').innerHTML}`, 400, 245);
  ctx.fillText(`Cultural Axis: ${document.getElementById('culture-label').innerHTML}`, 400, 365);
};
