import { object } from "prop-types"

const CartLocalKey = 'MarketCart'

type PricesFace = {
  type: string,
  price: number
}

type ProductFace = {
  id: number,
  title: string,
  prices: Array<PricesFace>
  quantity: number,
  total: number
}

const CartHelper = {
  addToCart: (
    product: ProductFace,
  ) => {

    var cartArr: Array<ProductFace> = CartHelper.getCart()
    var isAdd = false

    console.log(typeof cartArr)

    product.quantity = 1
    product.total = product.prices[0].price

    if (cartArr === null) {
      cartArr = []
      cartArr.push(product)
    } else {

      // cartArr.includes(item.id)
      cartArr.map((item) => {
        if (Number(item.id) === Number(product.id)) {
          item.quantity = item.quantity + 1
          item.total = item.total * item.quantity
          isAdd = true
        }
      })

      if (!isAdd) {
        cartArr.push(product)
      }
    }

    localStorage.setItem(CartLocalKey, JSON.stringify(cartArr))

    return true
  },

  removeToCart: (
    productId: number,
  ) => {
    var cartArr: Array<ProductFace> = CartHelper.getCart()

    cartArr.map((item) => {
      if (Number(item.id) === productId) {
        item.quantity = item.quantity - 1
      }
    })

    cartArr.filter((item) => {
      return item.quantity > 0
    })

    localStorage.setItem(CartLocalKey, JSON.stringify(cartArr))
  },

  getCart: () => {
    try {
      var cart = JSON.parse(localStorage.getItem(CartLocalKey))

    } catch (err) {
      var cart = null
    }

    console.log(cart)
    return cart
  },


}

export default CartHelper