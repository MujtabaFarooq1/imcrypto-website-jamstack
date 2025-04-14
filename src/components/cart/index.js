import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context";
import { isJsonParsable } from "../../utils/helper";
import './cart.scss';

const Cart = (props) => {
  const { merch } = useContext(GlobalContext)
  const { data, method } = merch
  const { cart } = data
  const { setCart } = method
  useEffect(
    () => {
      const cart_str = localStorage.getItem("cart")
      const latest_cart = isJsonParsable(cart_str) ? JSON.parse(cart_str) : []
      const cur_time = (new Date()).getMilliseconds()
      if (latest_cart?.find(i => i.ttl < cur_time)) {
        setCart([])
      }
      else if (latest_cart?.length > 0) {
        setCart(latest_cart)
      }
      return () => {

      }
    }, []
  )
  const totalPrice = (Array.isArray(cart)) && (cart.length != 0) && cart?.map(i => parseFloat(i?.price?.replace('$', '')) * (parseFloat(i?.count) > 0 ? parseFloat(i?.count) : 1))?.reduce((x, y) => x + y) || 0
  const handleDelete = (key) => {
    const temp_cart = cart.find(i => i.key === key)
    if (temp_cart.count > 1) {
      const updated_cart = [...cart.filter(i => i.key !== key), { ...temp_cart, count: parseInt(temp_cart.count) - 1 }]
      setCart(updated_cart)
    } else {
      const updated_cart = cart.filter(i => i.key !== key)
      setCart(updated_cart)
    }
  }
  return (
    <div className="cart-cover">
      <h6> CART </h6>
      <ul>
        {Array.isArray(cart) &&
          cart.length != 0 ?
          (cart.map((item, index) => {
            return (
              <li>
                <div className="cart-img">
                  <GatsbyImage image={getImage(item?.image?.asset)} />
                </div>
                <div className="cart-info">
                  <div className="cart-details">
                    <h5> {item?.title} </h5>
                    <p> {item.count ?? "1"} x {item?.price} </p>
                  </div>
                  <div className="cart-delete">
                    <button onClick={() => handleDelete(item?.key)}></button>
                  </div>
                </div>
              </li>
            );
          })) : (<h3> No Items </h3>)}
      </ul>
      <div className="cart-footer">
        <p> Subtotal: $<span>{totalPrice}</span> </p>
        <div className="cart-btn">
          <button> VIEW CART </button>
          <button className="checkout"> CHECKOUT </button>
        </div>
      </div>
    </div>
  );
}

export default Cart