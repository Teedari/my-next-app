import React from 'react'

const Home = () => {
  return (
    <div>
    <header>
      <h1>This section has to with Routing!! </h1>
      </header>
      <p>Nextjs make use of its own built routing system know as <em>File base routing system</em></p>
      
      <br />
      <br />

      <ul>
        <li><a href='blog'>Blog</a></li>
        <li><a href='product/stock-out'>Out of stock products</a></li>
        <li><a href='product'>Product</a></li>
      </ul>
    </div>
  )
}

export default Home
