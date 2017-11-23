const questions = [
  {
    question: 'Government is necessary.',
    effect: { scty: 0, idty: 0, prop: -100 },
  },
  {
    question: 'From each according to his ability, to each according to his needs.',
    effect: { scty: 0, idty: 0, prop: 100 },
  },
  {
    question: 'Diversity results in conflict.',
    effect: { scty: 0, idty: -100, prop: 0 },
  },
  {
    question: 'Diversity is a strength.',
    effect: { scty: 0, idty: 100, prop: 0 },
  },
  {
    question: 'Equality is impossible.',
    effect: { scty: -100, idty: 0, prop: 0 },
  },
  {
    question: 'All people are equal.',
    effect: { scty: 100, idty: 0, prop: 0 },
  },
  {
    question: 'The government should manage national parks.',
    effect: { scty: 0, idty: 0, prop: 10 },
  },
  {
    question: 'A flat tax is the most fair type of tax.',
    effect: { scty: 0, idty: 0, prop: -10 },
  },
  {
    question: 'People should be judged individually on their character and abilities.',
    effect: { scty: -10, idty: 10, prop: 0 },
  },
  {
    question: 'Oppression by corporations is more of a concern than oppression by governments.',
    effect: { scty: 0, idty: 0, prop: 10 },
  },
  {
    question: 'We should open our borders to immigration.',
    effect: { scty: 10, idty: 10, prop: 10 },
  },
  {
    question: 'Governments should be as concerned about foreign citizens as they are about those within their borders.',
    effect: { scty: 10, idty: 10, prop: 10 },
  },
  {
    question: 'All people should be treated equally.',
    effect: { scty: 10, idty: 10, prop: 10 },
  },
  {
    question: 'Religion should play a role in government.',
    effect: { scty: -10, idty: 0, prop: 10 },
  },
  {
    question: 'Churches should be taxed the same way other institutions are taxed.',
    effect: { scty: 0, idty: 0, prop: 10 },
  },
  {
    question: 'Climate change is currently one of the greatest threats to our way of life.',
    effect: { scty: 0, idty: 10, prop: 10 },
  },
  {
    question: 'It is important that we work as a united world to combat climate change.',
    effect: { scty: 10, idty: 10, prop: 10 },
  },
  {
    question: 'The general populace makes poor decisions.',
    effect: { scty: 0, idty: 0, prop: 10 },
  },
  {
    question: 'It is necessary for the government to intervene in the economy to protect consumers.',
    effect: { scty: 0, idty: 0, prop: 10 },
  },
  {
    question: 'The sacrifice of some civil liberties is necessary to protect us from acts of terrorism.',
    effect: { scty: -10, idty: 10, prop: 10 },
  },
  {
    question: 'Government surveillance is necessary in the modern world.',
    effect: { scty: -10, idty: 0, prop: 10 },
  },
  {
    question: 'Gun ownership should be prohibited for those without a valid reason.',
    effect: { scty: 10, idty: 10, prop: 10 },
  },
  {
    question: 'I support single-payer, universal healthcare.',
    effect: { scty: 10, idty: 10, prop: 10 },
  },
  {
    question: 'Publicly-funded research is more beneficial to the people than leaving it to the market.',
    effect: { scty: -10, idty: 0, prop: 10 },
  },
  {
    question: 'A hierarchical state is best.',
    effect: { scty: 0, idty: -10, prop: 10 },
  },
  {
    question: 'It is important that the government follows the majority opinion, even if it is wrong.',
    effect: { scty: 10, idty: 10, prop: 10 },
  },
  {
    question: 'Democracy is more than a decision-making process.',
    effect: { scty: 10, idty: 10, prop: 10 },
  },
  {
    question: 'Environmental regulations are essential.',
    effect: { scty: 0, idty: 0, prop: 10 },
  },
  {
    question: 'Taxes should be increased on the rich to provide for the poor.',
    effect: { scty: 0, idty: 0, prop: 10 },
  },
  {
    question: 'Public utilities like roads and electricity should be publicly owned.',
    effect: { scty: 0, idty: 0, prop: 10 },
  },
  {
    question: 'Quality education is a right of all people.',
    effect: { scty: -10, idty: 0, prop: 10 },
  },
  {
    question: 'The means of production should belong to the workers who use them.',
    effect: { scty: 0, idty: 0, prop: 10 },
  },
  {
    question: 'Same-sex marriage should be legal.',
    effect: { scty: 10, idty: -10, prop: 10 },
  },
  {
    question: 'Abortion should be prohibited in most or all cases.',
    effect: { scty: -10, idty: -10, prop: 10 },
  },
  {
    question: 'Prostitution should be illegal.',
    effect: { scty: -10, idty: 10, prop: 10 },
  },
  {
    question: 'The United Nations should be abolished.',
    effect: { scty: 0, idty: -10, prop: 0 },
  },
  {
    question: 'Military action by our nation is often necessary to protect it.',
    effect: { scty: 0, idty: 0, prop: 0 },
  },
  {
    question: 'I support regional unions, such as the European Union.',
    effect: { scty: -10, idty: 10, prop: -10 },
  },
  {
    question: 'It is important to maintain our national sovereignty.',
    effect: { scty: 0, idty: -10, prop: 0 },
  },
  {
    question: 'A united world government would be beneficial to mankind.',
    effect: { scty: 0, idty: 10, prop: 0 },
  },
  {
    question: 'It is more important to retain peaceful relations than to further our strength.',
    effect: { scty: 0, idty: 10, prop: 0 },
  },
  {
    question: 'Wars do not need to be justified to other countries.',
    effect: { scty: 0, idty: -10, prop: 0 },
  },
  {
    question: 'Military spending is a waste of money.',
    effect: { scty: 0, idty: 10, prop: 0 },
  },
  {
    question: 'International aid is a waste of money.',
    effect: { scty: 0, idty: -10, prop: -10 },
  },
  {
    question: 'My nation is great.',
    effect: { scty: 0, idty: -10, prop: 0 },
  },
  {
    question: 'Research should be conducted on an international scale.',
    effect: { scty: -10, idty: 10, prop: 0 },
  },
  {
    question: 'Governments should be accountable to the international community.',
    effect: { scty: 0, idty: 10, prop: 0 },
  },
  {
    question: 'Even when protesting an authoritarian government, violence is not acceptable.',
    effect: { scty: -10, idty: 0, prop: 0 },
  },
  {
    question: 'My religious values should be spread as much as possible.',
    effect: { scty: 10, idty: 10, prop: 0 },
  },
  {
    question: "Our nation's values should be spread as much as possible.",
    effect: { scty: 0, idty: 10, prop: 0 },
  },
  {
    question: 'It is very important to maintain law and order.',
    effect: { scty: -10, idty: -10, prop: 0 },
  },
  {
    question: 'Victimless crimes (such as drug use) should not be crimes at all.',
    effect: { scty: 0, idty: 0, prop: -10 },
  },
  {
    question: 'The very existence of the state is a threat to our liberty.',
    effect: { scty: 0, idty: -10, prop: -10 },
  },
  {
    question: 'Regardless of political opinions, it is important to side with your country.',
    effect: { scty: -10, idty: -10, prop: 0 },
  },
  {
    question: 'No authority should be left unquestioned.',
    effect: { scty: 0, idty: -10, prop: -10 },
  },
  {
    question: 'The stronger the leadership, the better.',
    effect: { scty: -10, idty: -10, prop: 0 },
  },
  {
    question: 'A better world will come from automation, science, and technology.',
    effect: { scty: 10, idty: -10, prop: -10 },
  },
  {
    question: 'Children should be educated in religious or traditional values.',
    effect: { scty: -10, idty: 0, prop: 0 },
  },
  {
    question: 'Traditions are of no value on their own.',
    effect: { scty: 10, idty: 10, prop: 0 },
  },
  {
    question: 'Society was better many years ago than it is now.',
    effect: { scty: -10, idty: -10, prop: -10 },
  },
  {
    question: 'It is important that we maintain the traditions of our past.',
    effect: { scty: -10, idty: -10, prop: 0 },
  },
  {
    question: 'It is important that we think in the long term, beyond our lifespans.',
    effect: { scty: -10, idty: 0, prop: 0 },
  },
  {
    question: 'Reason is more important than maintaining our culture.',
    effect: { scty: 10, idty: 10, prop: 0 },
  },
  {
    question: 'Drug use should be legalized or decriminalized.',
    effect: { scty: 10, idty: -10, prop: -10 },
  },
  {
    question: 'No cultures are superior to others.',
    effect: { scty: 10, idty: 10, prop: 0 },
  },
  {
    question: 'Sex outside marriage is immoral.',
    effect: { scty: -10, idty: 0, prop: 0 },
  },
  {
    question: 'If we accept migrants at all, it is important that they assimilate into our culture.',
    effect: { scty: -10, idty: -10, prop: 0 },
  },
  {
    question: 'Maintaining family values is essential.',
    effect: { scty: -10, idty: -10, prop: -10 },
  },
  {
    question: 'To chase progress at all costs is dangerous.',
    effect: { scty: -10, idty: 0, prop: 0 },
  },
  {
    question: 'Genetic modification is a force for good, even on humans.',
    effect: { scty: -10, idty: 0, prop: 0 },
  },
  {
    question: "It is important that we further my group's goals above all others.",
    effect: { scty: 0, idty: -10, prop: 0 },
  },
  {
    question: 'The freer the markets, the freer the people.',
    effect: { scty: 0, idty: 0, prop: -10 },
  },
  {
    question: 'It is better to maintain a balanced budget than to ensure welfare for all citizens.',
    effect: { scty: 0, idty: 0, prop: -10 },
  },
  {
    question: 'International trade is beneficial.',
    effect: { scty: 0, idty: 0, prop: -10 },
  },
  {
    question: 'It would be best if social programs were abolished in favor of private charity.',
    effect: { scty: -10, idty: 0, prop: -10 },
  },
  {
    question: 'Inheritance is a legitimate form of wealth.',
    effect: { scty: 10, idty: 0, prop: -10 },
  },
  {
    question: 'Excessive government intervention is a threat to the economy.',
    effect: { scty: 0, idty: 0, prop: -10 },
  },
  {
    question: 'Those with a greater ability to pay should receive better healthcare.',
    effect: { scty: 0, idty: 0, prop: -10 },
  },
];