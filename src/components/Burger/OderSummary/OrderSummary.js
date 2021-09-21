import React, { Component } from 'react'

import Aux from '../../../hoc/Auxilary/Auxilary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  // This could be a function component, doesn't have to ba a class
  componentWillUpdate() {
    console.log('[OrderSummary] componentWillUpdate')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (ingreKey) => {
        return (
          <li key={ingreKey}>
            <span style={{ textTransform: 'capitalize' }}>{ingreKey}</span>:{' '}
            {this.props.ingredients[ingreKey]}
          </li>
        )
      },
    )

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    )
  }
}

export default OrderSummary
