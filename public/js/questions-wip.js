function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const questions = shuffle([
  // Social Hierarchy
  { e: { i: 0, p: 0, s: -1 }, q: '' },
  { e: { i: 0, p: 0, s: -1 }, q: '' },
  { e: { i: 0, p: 0, s: -1 }, q: '' },
  { e: { i: 0, p: 0, s: -1 }, q: '' },
  { e: { i: 0, p: 0, s: -1 }, q: 'Private management of resources tends to be more efficient than state.' },
  { e: { i: 0, p: 0, s: -1 }, q: 'Maintaining family values is essential.' },
  { e: { i: 0, p: 0, s: -1 }, q: '' },
  { e: { i: 0, p: 0, s: -1 }, q: 'Social hierarchy is natural and unavoidable.' },
  { e: { i: 0, p: 0, s: -1 }, q: 'The general populace makes poor decisions.' },
  { e: { i: 0, p: 0, s: -1 }, q: 'The stronger the leadership, the better.' },
  { e: { i: 0, p: 0, s: 1 }, q: 'The 19th amendment led to a more healthy society.' },
  { e: { i: 0, p: 0, s: 1 }, q: '' },
  { e: { i: 0, p: 0, s: 1 }, q: '' },
  { e: { i: 0, p: 0, s: 1 }, q: 'Money has caused more problems than it has solved.' },
  { e: { i: 0, p: 0, s: 1 }, q: '' },
  { e: { i: 0, p: 0, s: 1 }, q: 'All people are of equal value.' },
  { e: { i: 0, p: 0, s: 1 }, q: 'All people should be treated equally.' },
  { e: { i: 0, p: 0, s: 1 }, q: 'It is important that the government follows the majority opinion, even if it is wrong.' },
  { e: { i: 0, p: 0, s: 1 }, q: 'No cultures are superior to others.' },
  { e: { i: 0, p: 0, s: 1 }, q: 'Same-sex marriage should be legal.' },
  //  Property
  { e: { i: 0, p: -1, s: 0 }, q: 'Government regulations often have unintended consequences.' },
  { e: { i: 0, p: -1, s: 0 }, q: 'The size and scope of government is inversely proportional to its efficiency.' },
  { e: { i: 0, p: -1, s: 0 }, q: 'Excessive government intervention is a threat to the economy.' },
  { e: { i: 0, p: -1, s: 0 }, q: 'Inheritance is a legitimate form of wealth.' },
  { e: { i: 0, p: -1, s: 0 }, q: 'It is better to maintain a balanced budget than to ensure welfare for all citizens.' },
  { e: { i: 0, p: -1, s: 0 }, q: 'It would be best if Government welfare programs were abolished in favor of private charity.' },
  { e: { i: 0, p: -1, s: 0 }, q: '' },
  { e: { i: 0, p: -1, s: 0 }, q: 'The very existence of the state is a threat to our liberty.' },
  { e: { i: 0, p: -1, s: 0 }, q: 'Those with a greater ability to pay should receive better healthcare.' },
  { e: { i: 0, p: -1, s: 0 }, q: 'Victimless crimes (such as drug use) should not be crimes at all.' },
  { e: { i: 0, p: 1, s: 0 }, q: 'A united world government would be beneficial to mankind.' },
  { e: { i: 0, p: 1, s: 0 }, q: 'Environmental regulations are essential.' },
  { e: { i: 0, p: 1, s: 0 }, q: 'From each according to his ability, to each according to his needs.' },
  { e: { i: 0, p: 1, s: 0 }, q: 'Gun ownership should be prohibited for those without a valid reason.' },
  { e: { i: 0, p: 1, s: 0 }, q: 'I support regional unions, such as the European Union.' },
  { e: { i: 0, p: 1, s: 0 }, q: 'I support single-payer, universal healthcare.' },
  { e: { i: 0, p: 1, s: 0 }, q: 'It is necessary for the government to intervene in the economy to protect consumers.' },
  { e: { i: 0, p: 1, s: 0 }, q: 'Oppression by corporations is more of a concern than oppression by governments.' },
  { e: { i: 0, p: 1, s: 0 }, q: 'Taxes should be increased on the rich to provide for the poor.' },
  { e: { i: 0, p: 1, s: 0 }, q: 'The means of production should belong to the workers who use them.' },
  // ingroup / identity
  { e: { i: -1, p: 0, s: 0 }, q: 'It is important that we further my group\'s goals above all others.' },
  { e: { i: -1, p: 0, s: 0 }, q: 'Diversity causes conflict.' },
  { e: { i: -1, p: 0, s: 0 }, q: 'Ingroup preference is natural and healthy.' },
  { e: { i: -1, p: 0, s: 0 }, q: 'If we accept migrants at all, it is important that they assimilate into our culture.' },
  { e: { i: -1, p: 0, s: 0 }, q: 'International aid is a waste of money.' },
  { e: { i: -1, p: 0, s: 0 }, q: 'It is important to maintain our national sovereignty.' },
  { e: { i: -1, p: 0, s: 0 }, q: 'My nation is great.' },
  { e: { i: -1, p: 0, s: 0 }, q: 'Racism is natural and unavoidable.' },
  { e: { i: -1, p: 0, s: 0 }, q: 'Society is a racial construct.' },
  { e: { i: -1, p: 0, s: 0 }, q: 'Stereotypes exist for a reason.' },
  { e: { i: 1, p: 0, s: 0 }, q: 'Humanity would benefit from being one homogenous race.' },
  { e: { i: 1, p: 0, s: 0 }, q: '' },
  { e: { i: 1, p: 0, s: 0 }, q: 'A united world government would be beneficial to mankind.' },
  { e: { i: 1, p: 0, s: 0 }, q: 'Diversity is our greatest strength.' },
  { e: { i: 1, p: 0, s: 0 }, q: 'Governments should be as concerned about foreigners as they are about citizens.' },
  { e: { i: 1, p: 0, s: 0 }, q: 'People should be judged individually on their character and abilities.' },
  { e: { i: 1, p: 0, s: 0 }, q: 'Quality education is a right of all people.' },
  { e: { i: 1, p: 0, s: 0 }, q: 'Race is a social construct.' },
  { e: { i: 1, p: 0, s: 0 }, q: 'Reason is more important than maintaining our culture.' },
  { e: { i: 1, p: 0, s: 0 }, q: 'We should open our borders to immigration.' },
]);
