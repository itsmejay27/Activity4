export default function ProductDetails({ productName, quantity, unitPrice }) {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Product Name: {productName}</p>
      <p>Quantity: {quantity}</p>
      <p>Unit Price: ${unitPrice}</p> 
      <p>Total Price: ${quantity * unitPrice}</p>  
      </div>
  );
}