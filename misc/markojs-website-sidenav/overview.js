function createOverview(structure, selected, toc, isNested = false) {
  const parentList = createParentList(structure);

  let result = '';

  for (let i = 0; i < structure.length; i++) {
    const section = structure[i];

    result += '<ul>';
    if (!isNested) {
      result += `<li>${section.title}</li>`;
    }

    for (let j = 0; j < section.docs.length; j++) {
      const doc = section.docs[j];

      if (typeof doc === 'string') {
        result += `<li>${doc}</li>`;

        if (doc === selected) {
          result += `<li>${toc}</li>`;
        }
      } else if (typeof doc === 'object') {
        result += `<li>${doc.title}</li>`;

        if (doc.title === selected) {
          result += createOverview([doc], selected, toc, true);
        }
        if (parentList[selected] && parentList[selected][doc.title]) {
          result += createOverview([doc], selected, toc, true);
        }
      }

    }

    result += '</li></ul>';
  }

  return result;
}

/*
  {
    child1: { parent1: true, parent2: true },
    child2: { child1: true, parent1: true, parent2: true },
  }
*/
function createParentList(structure) {
  const familyTree = {};

  for (let i = 0; i < structure.length; i++) {
    const section = structure[i];

    for (let j = 0; j < section.docs.length; j++) {
      const doc = section.docs[j];
      if (typeof doc === 'object') {
        const nestedList = createParentList([doc]);
        for (var prop in nestedList) {
          familyTree[prop] = nestedList[prop];
          familyTree[prop][doc.title] = true;
        }

      } else if (typeof doc === 'string') {
        familyTree[doc] = {};
        familyTree[doc][section.title] = true;
      }
    }
  }

  return familyTree;
}

module.exports = {
  createParentList,
  createOverview,
};
