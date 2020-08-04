
import React, { useEffect } from 'react'

import CartHelper from '../../../helpers/CartHelper'

function CartContent() {


  async function getData() {
    console.log('Carrinho ✨')
    console.log(CartHelper.getCart())

  }

  useEffect(() => {
    getData()
  }, []);


  return (
    <>
      <div className="container-fluid">
        <div className="container p-0">
          <div className="row">
            <div className="col-12">
              <h1>Shopping Cart</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              Cart Empity
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartContent