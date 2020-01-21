import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      console.log(action.payload);
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    case "FOUND_BAD_WORD":
      console.log(action.payload);
      alert(`it includes bad word`);
      return state;
    case "DATA_LOADED":
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload)
      });
    default:
      return state;
  }
}

export default rootReducer;
