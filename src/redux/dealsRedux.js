/* selectors */
export const getDealById = ({ deals }, dealId) =>
  deals.find(deal => deal.id === dealId);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
