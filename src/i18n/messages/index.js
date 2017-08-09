import temp from './temp.js';
import temp1 from './temp1.js';

const sumObj = { temp, temp1 };

function merge(obj) {
  const messages = {};
  Object.entries(obj).forEach((supitem) => {
    // console.log(supitem);
    Object.entries(supitem[1]).forEach((item) => {
      // console.log(item);
      if (!messages[item[0]]) {
        messages[item[0]] = {};
      }
      Object.entries(item[1]).forEach((subitem) => {
        // console.log(subitem);
        messages[item[0]][`${supitem[0]}_${subitem[0]}`] = subitem[1];
      });
    });
  });
  console.log(messages);
  return messages;
}

export default merge(sumObj);
