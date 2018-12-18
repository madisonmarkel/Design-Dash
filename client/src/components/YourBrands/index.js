import React from "react";
//import API from "../utils/API";

// This file exports both the List and ListItem components

export function YourBrands({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}


// const YourBrands = props => (
//     <div className="brands">
//         <h2>Your Brands</h2>
//         {/* <Link to={"/brands/"+ brand._id}>BRANDS</Link> */}
//         <br/>
//         {/* {this.state.brands.length ? (
//               <ul>
//                 {this.state.brands.map(brand => (
//                   <li key={brand._id}>
//                     <Link to={"/brands/" + brand._id}>
//                       <strong>
//                         {brand.title} by {brand.author}
//                       </strong>
//                     </Link> */}
//                     {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
//                   {/* </li>
//                 ))}
//               </ul>
//             ) : (
//               <h3>No Results to Display</h3>
//             )} */}
//     </div>
// );

// export default YourBrands;