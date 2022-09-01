const getPublishers = (heroes) => {
    return [...new Set(heroes.map((hero) => hero.publisher))].filter(
      (publisher) =>
        publisher !== null &&
        publisher !== "" 
    ).sort();
  };

export default getPublishers