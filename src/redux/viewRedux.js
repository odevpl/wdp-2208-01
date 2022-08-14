/* selectors */
export const getView = ({ view }) => view;
/* action name creator */
const reducerName = 'views';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_VIEW = createActionName('UPDATE_VIEW');

/* action creators */
export const updateView = payload => ({ payload, type: UPDATE_VIEW });

/* reducer */
const viewReducer = (statePart = '', action = {}) => {
  switch (action.type) {
    case UPDATE_VIEW:
      if (action.payload < 767) {
        return 'mobile';
      } else if (action.payload < 1023) {
        return 'tablet';
      } else {
        return 'desktop';
      }
    default:
      return statePart;
  }
};
export default viewReducer;
