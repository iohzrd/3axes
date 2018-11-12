function setBarValue(name, value) {
  innerel = document.getElementById(name);
  outerel = document.getElementById(`bar-${name}`);
  outerel.style.width = (`${value}%`);
  innerel.innerHTML = (`${value}%`);
  if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
    innerel.style.visibility = 'hidden';
  }
}

const idtyArray = ['Global', 'Civic', 'Ethno'];
const propArray = ['Communist', 'Socialist', 'Capitalist'];
const sctyArray = ['Liberal', 'Conservative', 'Fascist'];

function setLabel(val, ary) {
  if (val > 100) {
    return '';
  } else
  if (val > 66) {
    return ary[0];
  } else
  if (val > 33) {
    return ary[1];
  } else
  if (val >= 0) {
    return ary[2];
  }
  return '';
}

const globalism = localStorage.getItem('i');
const communalism = localStorage.getItem('p');
const equality = localStorage.getItem('s');
const tribalism = (100 - globalism);
const propertarianism = (100 - communalism);
const hierarchy = (100 - equality);

setBarValue('globalism', globalism);
setBarValue('tribalism', tribalism);

setBarValue('communalism', communalism);
setBarValue('propertarianism', propertarianism);

setBarValue('heterogeneity', equality);
setBarValue('homogeneity', hierarchy);

document.getElementById('in-group-label').innerHTML = setLabel(globalism, idtyArray);
document.getElementById('property-label').innerHTML = setLabel(communalism, propArray);
document.getElementById('society-label').innerHTML = setLabel(equality, sctyArray);
