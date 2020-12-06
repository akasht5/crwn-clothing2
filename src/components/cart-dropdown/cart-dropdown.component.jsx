import React from 'react'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
 
const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown"> 
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    )) 
                }
            </div>
            <CustomButton>Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default connect(mapStateToProps)(CartDropdown)
