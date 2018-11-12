function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const questions = shuffle([{
  q: 'The state is necessary.',
  e: {
    s: 0,
    i: 0,
    p: -100,
  },
},
{
  q: 'From each according to his ability, to each according to his needs.',
  e: {
    s: 0,
    i: 0,
    p: 100,
  },
},
{
  q: 'Diversity results in conflict.',
  e: {
    s: 0,
    i: -100,
    p: 0,
  },
},
{
  q: 'Diversity is a strength.',
  e: {
    s: 0,
    i: 100,
    p: 0,
  },
},
{
  q: 'Equality is impossible.',
  e: {
    s: -100,
    i: 0,
    p: 0,
  },
},
{
  q: 'All men are created equal.',
  e: {
    s: 100,
    i: 0,
    p: 0,
  },
},
{
  q: 'The state will protect National parks better than the market.',
  e: {
    s: 0,
    i: 0,
    p: 10,
  },
},
{
  q: 'Taxation is theft.',
  e: {
    s: 0,
    i: 0,
    p: -10,
  },
},
{
  q: 'There is a genetic component to IQ.',
  e: {
    s: -10,
    i: 10,
    p: 0,
  },
},
{
  q: 'Oppression by corporations is more of a concern than oppression by governments.',
  e: {
    s: 0,
    i: 0,
    p: 10,
  },
},
{
  q: 'The state should maintain an open border.',
  e: {
    s: 10,
    i: 10,
    p: 10,
  },
},
{
  q: 'The state should intervene to help foreigners.',
  e: {
    s: 10,
    i: 10,
    p: 10,
  },
},
{
  q: 'There should be an official state religion.',
  e: {
    s: -10,
    i: 0,
    p: 10,
  },
},
{
  q: 'There should be an official state language.',
  e: {
    s: -10,
    i: 0,
    p: 10,
  },
},
{
  q: 'If there is taxation churches should be taxed.',
  e: {
    s: 0,
    i: 0,
    p: 10,
  },
},
{
  q: 'Climate change is currently one of the greatest threats to our way of life.',
  e: {
    s: 0,
    i: 10,
    p: 10,
  },
},
{
  q: 'It is important that we work as a united world to combat climate change.',
  e: {
    s: 10,
    i: 10,
    p: 10,
  },
},
{
  q: 'The general populace makes poor decisions.',
  e: {
    s: 0,
    i: 0,
    p: 10,
  },
},
{
  q: 'It is necessary for the government to intervene in the economy to protect consumers.',
  e: {
    s: 0,
    i: 0,
    p: 10,
  },
},
{
  q: 'The sacrifice of some civil liberties is necessary to protect us from acts of terrorism.',
  e: {
    s: -10,
    i: 10,
    p: 10,
  },
},
{
  q: 'Government surveillance is necessary in the modern world.',
  e: {
    s: -10,
    i: 0,
    p: 10,
  },
},
{
  q: 'Gun ownership should be prohibited for those without a valid reason.',
  e: {
    s: 10,
    i: 10,
    p: 10,
  },
},
{
  q: 'I support single-payer, universal healthcare.',
  e: {
    s: 10,
    i: 10,
    p: 10,
  },
},
{
  q: 'Publicly-funded research is more beneficial to the people than leaving it to the market.',
  e: {
    s: -10,
    i: 0,
    p: 10,
  },
},
{
  q: 'A hierarchical state is best.',
  e: {
    s: 0,
    i: -10,
    p: 10,
  },
},
{
  q: 'It is important that the government follows the majority opinion, even if it is wrong.',
  e: {
    s: 10,
    i: 10,
    p: 10,
  },
},
{
  q: 'Democracy is more than a decision-making process.',
  e: {
    s: 10,
    i: 10,
    p: 10,
  },
},
{
  q: 'Environmental regulations are essential.',
  e: {
    s: 0,
    i: 0,
    p: 10,
  },
},
{
  q: 'Taxes should be increased on the rich to provide for the poor.',
  e: {
    s: 0,
    i: 0,
    p: 10,
  },
},
{
  q: 'Public utilities like roads and electricity should be publicly owned.',
  e: {
    s: 0,
    i: 0,
    p: 10,
  },
},
{
  q: 'Quality education is a right of all people.',
  e: {
    s: -10,
    i: 0,
    p: 10,
  },
},
{
  q: 'The means of production should belong to the workers who use them.',
  e: {
    s: 0,
    i: 0,
    p: 10,
  },
},
{
  q: 'Same-sex marriage should be legal.',
  e: {
    s: 10,
    i: -10,
    p: 10,
  },
},
{
  q: 'Abortion should be prohibited in most or all cases.',
  e: {
    s: -10,
    i: -10,
    p: 10,
  },
},
{
  q: 'Prostitution should be illegal.',
  e: {
    s: -10,
    i: 10,
    p: 10,
  },
},
{
  q: 'The United Nations should be abolished.',
  e: {
    s: 0,
    i: -10,
    p: 0,
  },
},
{
  q: 'Military action by our nation is often necessary to protect it.',
  e: {
    s: 0,
    i: 0,
    p: 0,
  },
},
{
  q: 'I support regional unions, such as the European Union.',
  e: {
    s: -10,
    i: 10,
    p: -10,
  },
},
{
  q: 'It is important to maintain our national sovereignty.',
  e: {
    s: 0,
    i: -10,
    p: 0,
  },
},
{
  q: 'A united world government would be beneficial to mankind.',
  e: {
    s: 0,
    i: 10,
    p: 0,
  },
},
{
  q: 'It is more important to retain peaceful relations than to further our strength.',
  e: {
    s: 0,
    i: 10,
    p: 0,
  },
},
{
  q: 'Wars do not need to be justified to other countries.',
  e: {
    s: 0,
    i: -10,
    p: 0,
  },
},
{
  q: 'Military spending is a waste of money.',
  e: {
    s: 0,
    i: 10,
    p: 0,
  },
},
{
  q: 'International aid is a waste of money.',
  e: {
    s: 0,
    i: -10,
    p: -10,
  },
},
{
  q: 'My nation is great.',
  e: {
    s: 0,
    i: -10,
    p: 0,
  },
},
{
  q: 'Research should be conducted on an international scale.',
  e: {
    s: -10,
    i: 10,
    p: 0,
  },
},
{
  q: 'Governments should be accountable to the international community.',
  e: {
    s: 0,
    i: 10,
    p: 0,
  },
},
{
  q: 'Even when protesting an authoritarian government, violence is not acceptable.',
  e: {
    s: -10,
    i: 0,
    p: 0,
  },
},
{
  q: 'My religious values should be spread as much as possible.',
  e: {
    s: 10,
    i: 10,
    p: 0,
  },
},
{
  q: "Our nation's values should be spread as much as possible.",
  e: {
    s: 0,
    i: 10,
    p: 0,
  },
},
{
  q: 'It is very important to maintain law and order.',
  e: {
    s: -10,
    i: -10,
    p: 0,
  },
},
{
  q: 'Victimless crimes (such as drug use) should not be crimes at all.',
  e: {
    s: 0,
    i: 0,
    p: -10,
  },
},
{
  q: 'The very existence of the state is a threat to our liberty.',
  e: {
    s: 0,
    i: -10,
    p: -10,
  },
},
{
  q: 'Regardless of political opinions, it is important to side with your country.',
  e: {
    s: -10,
    i: -10,
    p: 0,
  },
},
{
  q: 'No authority should be left unquestioned.',
  e: {
    s: 0,
    i: -10,
    p: -10,
  },
},
{
  q: 'The stronger the leadership, the better.',
  e: {
    s: -10,
    i: -10,
    p: 0,
  },
},
{
  q: 'A better world will come from automation, science, and technology.',
  e: {
    s: 10,
    i: -10,
    p: -10,
  },
},
{
  q: 'Children should be educated in religious or traditional values.',
  e: {
    s: -10,
    i: 0,
    p: 0,
  },
},
{
  q: 'Traditions are of no value on their own.',
  e: {
    s: 10,
    i: 10,
    p: 0,
  },
},
{
  q: 'Society was better many years ago than it is now.',
  e: {
    s: -10,
    i: -10,
    p: -10,
  },
},
{
  q: 'It is important that we maintain the traditions of our past.',
  e: {
    s: -10,
    i: -10,
    p: 0,
  },
},
{
  q: 'It is important that we think in the long term, beyond our lifespans.',
  e: {
    s: -10,
    i: 0,
    p: 0,
  },
},
{
  q: 'Reason is more important than maintaining our culture.',
  e: {
    s: 10,
    i: 10,
    p: 0,
  },
},
{
  q: 'Drug use should be legalized or decriminalized.',
  e: {
    s: 10,
    i: -10,
    p: -10,
  },
},
{
  q: 'No cultures are superior to others.',
  e: {
    s: 10,
    i: 10,
    p: 0,
  },
},
{
  q: 'Sex outside marriage is immoral.',
  e: {
    s: -10,
    i: 0,
    p: 0,
  },
},
{
  q: 'If we accept migrants at all, it is important that they assimilate into our culture.',
  e: {
    s: -10,
    i: -10,
    p: 0,
  },
},
{
  q: 'Maintaining family values is essential.',
  e: {
    s: -10,
    i: -10,
    p: -10,
  },
},
{
  q: 'To chase progress at all costs is dangerous.',
  e: {
    s: -10,
    i: 0,
    p: 0,
  },
},
{
  q: 'Genetic modification is a force for good, even on humans.',
  e: {
    s: -10,
    i: 0,
    p: 0,
  },
},
{
  q: "It is important that we further my group's goals above all others.",
  e: {
    s: 0,
    i: -10,
    p: 0,
  },
},
{
  q: 'The freer the markets, the freer the people.',
  e: {
    s: 0,
    i: 0,
    p: -10,
  },
},
{
  q: 'It is better to maintain a balanced budget than to ensure welfare for all citizens.',
  e: {
    s: 0,
    i: 0,
    p: -10,
  },
},
{
  q: 'International trade is beneficial.',
  e: {
    s: 0,
    i: 0,
    p: -10,
  },
},
{
  q: 'It would be best if social programs were abolished in favor of private charity.',
  e: {
    s: -10,
    i: 0,
    p: -10,
  },
},
{
  q: 'Inheritance is a legitimate form of wealth.',
  e: {
    s: 10,
    i: 0,
    p: -10,
  },
},
{
  q: 'Excessive government intervention is a threat to the economy.',
  e: {
    s: 0,
    i: 0,
    p: -10,
  },
},
{
  q: 'Those with a greater ability to pay should receive better healthcare.',
  e: {
    s: 0,
    i: 0,
    p: -10,
  },
},
]);
