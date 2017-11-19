function setBarValue(name, value) {
  console.log(value);
  const innerel = document.getElementById(name);
  const outerel = document.getElementById(`bar-${name}`);
  outerel.style.width = (`${value}%`);
  innerel.innerHTML = (`${value}%`);
  if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
    innerel.style.visibility = 'hidden';
  }
}

const idtyArray = ['Globalist', 'Cosmopolitan', 'Civic Nationalist', 'Covenant Communitarian', 'Ethno-Nationalist'];
const propArray = ['Communist', 'Socialist', 'Statist', 'Minarchist', 'Laissez-faire'];
const sctyArray = ['Revolutionary', 'Progressive', 'Neutral', 'Traditional', 'Reactionary'];

function setLabel(val, ary) {
  if (val > 100) { return ''; } else
  if (val >= 80) { return ary[0]; } else
  if (val >= 60) { return ary[1]; } else
  if (val >= 40) { return ary[2]; } else
  if (val >= 20) { return ary[3]; } else
  if (val >= 0) { return ary[4]; } return '';
}

const globalism = localStorage.getItem('i');
const collectivism = localStorage.getItem('p');
const diversity = localStorage.getItem('c');
const tribalism = (100 - globalism);
const privatism = (100 - collectivism);
const cohesion = (100 - diversity);

setBarValue('globalism', globalism);
setBarValue('tribalism', tribalism);

setBarValue('collectivism', collectivism);
setBarValue('privatism', privatism);

setBarValue('diversity', diversity);
setBarValue('cohesion', cohesion);

document.getElementById('in-group-label').innerHTML = setLabel(globalism, idtyArray);
document.getElementById('property-label').innerHTML = setLabel(collectivism, propArray);
document.getElementById('society-label').innerHTML = setLabel(diversity, sctyArray);

let ideology = '';
let ideodist = Infinity;
for (let i = 0; i < ideologies.length; i++) {
  let dist = 0;
  dist += Math.pow(Math.abs(ideologies[i].stats.idty - globalism), 1);
  dist += Math.pow(Math.abs(ideologies[i].stats.prop - collectivism), 1);
  dist += Math.pow(Math.abs(ideologies[i].stats.scty - diversity), 1);
  if (dist < ideodist) {
    ideology = ideologies[i].name;
    ideodist = dist;
  }
}
document.getElementById('ideology-label').innerHTML = ideology;

// globalResults.forEach((element) => {

// });
