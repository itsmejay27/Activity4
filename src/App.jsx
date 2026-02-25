import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BillingDetails from './BillingDetails';
import { useState } from 'react';
import ProductDetails from './ProductDetails';



function Home() {
  return <h1>Home Page</h1>;
}

function PriceChecker() {
  const [productName, setProductName] = useState('');
const [quantity, setQuantity] = useState("");
const [unitPrice, setUnitPrice] = useState("");
const [totalPrice, setTotalPrice] = useState("");

  return <div><h1>PriceChecker</h1>

    <div>
            <label >Product Name</label>
            <input type="text" value={productName}
                onChange={(e) => setProductName(e.target.value)} />
            <label > Quantity</label>
            <input type="number" value={quantity}
                onChange={(e) => setQuantity(e.target.value)} />
            <label > Unit Price</label>
            <input type="number" value={unitPrice}
                onChange={(e) => setUnitPrice(e.target.value)} />
        </div>
  <BillingDetails productName={productName} quantity={quantity} unitPrice={unitPrice} />

  <ProductDetails productName={productName} quantity={quantity} unitPrice={unitPrice} totalPrice={totalPrice} />

  <button onClick={() => setTotalPrice(quantity * unitPrice)}>Calculate</button>
  <button onClick={() => { setProductName(''); setQuantity(0); setUnitPrice(0); setTotalPrice(0); }}>Reset</button>
  </div> ;
}



function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/price-checker">PriceChecker</Link> |{" "}
        
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price-checker" element={<PriceChecker />} />
       
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);

 export default App; 