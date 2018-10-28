// const content = require('../../data/content.json');
import content from '../../data/content.json';

export const api = {
  getContent(language = 'pl') {
    return content.filter(obj => obj.lang === language)[0];
  }
};
// module.exports = api;