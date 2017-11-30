function setBarValue(name, value) {
  innerel = document.getElementById(name);
  outerel = document.getElementById(`bar-${name}`);
  outerel.style.width = (`${value}%`);
  innerel.innerHTML = (`${value}%`);
  if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
    innerel.style.visibility = 'hidden';
  }
}

const idtyArray = ['Globalist', 'Cosmopolitan', 'Civic Nationalist', 'Covenant Communitarian', 'Ethno-Nationalist'];
const propArray = ['Communist', 'Socialist', 'Statist', 'Minarchist', 'Laissez-faire'];
const sctyArray = ['Egalitarian', 'Equal opportunist', 'Indifferent', 'Chauvinist', 'Elitist'];

function setLabel(val, ary) {
  if (val > 100) { return ''; } else
  if (val > 75) { return ary[0]; } else
  if (val > 55) { return ary[1]; } else
  if (val > 45) { return ary[2]; } else
  if (val > 25) { return ary[3]; } else
  if (val >= 0) { return ary[4]; } return '';
}

const globalism = localStorage.getItem('i');
const collectivism = localStorage.getItem('p');
const equality = localStorage.getItem('c');
const tribalism = (100 - globalism);
const privatism = (100 - collectivism);
const hierarchy = (100 - equality);

setBarValue('globalism', globalism);
setBarValue('tribalism', tribalism);

setBarValue('collectivism', collectivism);
setBarValue('privatism', privatism);

setBarValue('equality', equality);
setBarValue('hierarchy', hierarchy);

document.getElementById('in-group-label').innerHTML = setLabel(globalism, idtyArray);
document.getElementById('property-label').innerHTML = setLabel(collectivism, propArray);
document.getElementById('society-label').innerHTML = setLabel(equality, sctyArray);

function getIdeology(globalism, collectivism, equality) {
  let ideology = '';
  let ideodist = Infinity;
  for (let i = 0; i < ideologies.length; i++) {
    let dist = 0;
    dist += Math.abs(ideologies[i].stats.idty - globalism);
    dist += Math.abs(ideologies[i].stats.prop - collectivism);
    dist += Math.abs(ideologies[i].stats.scty - equality);
    if (dist < ideodist) {
      ideology = ideologies[i].name;
      ideodist = dist;
    }
  }
  return ideology;
}

document.getElementById('ideology-label').innerHTML = getIdeology(globalism, collectivism, equality);
