import React from 'react'
import { useRouter } from 'next/router'
function ProductDetail() {
  const {query} = useRouter()
  const productID = query?.productID
  return (
    <div>
      <h2>Product Details <pre>#{productID}</pre></h2>
    </div>
  )
}

export default ProductDetail
