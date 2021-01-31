const cardItemsArr = [];

for (let i = 0; i < 6; i++) {
  const item = {
    category: 'Hireable rooms',
    heading: 'Anything room at Green Square Library',
    location: 'Zetland'
  };
  
  if (Math.random() < .666666) {
    item.image = '/assets/placeholder.jpg';
  }

  cardItemsArr.push(item);
}

export default cardItemsArr;

