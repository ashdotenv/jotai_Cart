import { atom } from "jotai"

const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const products = await response.json()
    return products
}


export const productAtom = atom(async () => {
    const products = await getProducts()
    return products
})


export const cartAtom = atom([])