import './App.css';
import './data.js';
import React, {useState} from 'react';
import ProductList from './components/ProductList';
import data, { allCat, catCount, catWithCounts, catUnique } from './data'

function App() {
  const [ currCategory, setCategory ] = useState('All')

  function resetCat() {
    setCategory('All');
  }
  
  const categories = catUnique.map((category, i) => {
    return ( 
      <button
      className="product-button"
        category={category} 
        id={category} 
        value={category}
        onClick={()=> setCategory(category)}
        key={i}>{category}</button>
        
    )
  }
)

return (
  <div className="App">
    <div className="categories">
      {categories}
    </div>
    <button id="All" className="all-btn" value="All" onClick={resetCat}>All</button>
    <div className="ProductList">
      <ProductList currentCategory={currCategory} />  
    </div>
  </div>
)
}

export default App;



