import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getCompares } from '../../../redux/comparesRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  compares: getCompares(state),
});

export default connect(mapStateToProps)(NewFurniture);
