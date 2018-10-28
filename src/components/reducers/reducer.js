import {api} from '../API/api';

// const action_types = require('../actions/action-types');
import {SWITCH_LANGUAGE} from '../actions/action-types';
// const api = require('../API/api');

const initialState = {
  content: api.getContent() // Loads default language content (en) as an initial state
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        content: api.getContent(action.language)
      };
    default:
      return state;
  }
};

export default reducer;
// module.exports = reducer;