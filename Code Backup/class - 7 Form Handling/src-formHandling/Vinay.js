import React from "react";
function Vinay(){
    let product_Name="macbook Air";
    let price = "$1100";
    let brand = "Apple";
    let image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629842711000"
    return(
             <div>
                 <img src={image} alt="#"/>
                 <h1>{product_Name}</h1>
                 <h2>{price}</h2>
                 <h3>{brand}</h3>
             </div>
         )
}
export default Vinay