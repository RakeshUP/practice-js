
const townJudge = (numberOfPeople, trustPairs) => {
  const trustMapping = {};
  let judgeLabel = -1;

  trustPairs.forEach(pair => {
    const [person, personWhomHeTrusts] = pair;

    if (trustMapping[person] === undefined) {
      trustMapping[person] = { isTrustedBy: 0, trusts: 0 };
    }
    if (trustMapping[personWhomHeTrusts] === undefined) {
      trustMapping[personWhomHeTrusts] = { isTrustedBy: 0, trusts: 0 };
    }

    trustMapping[person].trusts += 1;
    trustMapping[personWhomHeTrusts].isTrustedBy += 1;
  });

  for (const [person, { isTrustedBy, trusts }] of Object.entries(trustMapping)) {
    if (isTrustedBy === numberOfPeople - 1 && trusts === 0) {
      judgeLabel = parseInt(person, 10);
    }
  }
  return judgeLabel;
};

export default townJudge;
