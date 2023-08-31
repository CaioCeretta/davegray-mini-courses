import { ReactElement, createContext, useMemo, useReducer } from "react";

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: [] }

const ReducerActions = {
  ADD: 'ADD' as const,
  REMOVE: 'REMOVE' as const,
  QUANTITY: 'QUANTITY' as const,
  SUBMIT: 'SUBMIT' as const
}

export type ReducerActionType = keyof typeof ReducerActions

export type ReducerAction = {
  type: string,
  payload?: CartItemType
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch(action.type) {
    case 'ADD': {
      if(!action.payload) {
        throw new Error('Missing payload in ADD action')
      }
      const {sku, name, price} = action.payload
      const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

      const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)
      const qty: number = itemExists ? itemExists.quantity + 1 : 1

      return {...state, cart: [...filteredCart, { sku, name, price, quantity: qty}]}
      
    }
    case 'REMOVE': {
      if(!action.payload) {
        throw new Error('Missing payload in REMOVE action')
      }
      const {sku} = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

      return { ...state, cart: [...filteredCart]}

      
      break;
    }
    case 'QUANTITY': {
      if(!action.payload) {
        throw new Error('Missing payload in QUANTITY action')
      }

      const {sku, quantity} = action.payload

      const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)
      if(!itemExists) {
        throw new Error('Item must exist in order to increase its quantity');
      }

      const updatedItem: CartItemType = {
        ...itemExists,
        quantity
      }

      const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

      return { ...state, cart: [...filteredCart, updatedItem]}

      
    }
    case 'SUBMIT': {
      return {...state, cart: []} 
      
    }
    default: 
      throw new Error('Unidentified action error')
      
  }
}

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState)

  const REDUCER_ACTIONS = useMemo(() => {
    return ReducerActions
  }, [])

  const totalItems = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity
  }, 0)

  const totalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + (cartItem.quantity * cartItem.price)
    }, 0)
  )

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    
    return itemA - itemB
    
  })

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart}
} 

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: ReducerActions,
  totalItems: 0,
  totalPrice: '',
  cart: [],
}

export const CartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType = {
  children?: ReactElement | ReactElement[]
}

export const CartProvider = ({children}: ChildrenType ):ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext