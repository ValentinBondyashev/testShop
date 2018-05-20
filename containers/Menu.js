import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartAction from '../actions/cart';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({cart}) => ({
	totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
	count: cart.items.length,
	items: uniqBy(cart.items, o => o.id)
});
  
const mapDispatchToPtops = dispatch => ({
	...bindActionCreators(cartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToPtops)(Menu);
