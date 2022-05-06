 import  "./ProductDetail.css";
 
 import React, {useState} from 'react'
//  import DoneIcon from '@mui/icons-material/Done';
 
 import { FaHeart, FaRegHeart } from 'react-icons/fa';

export  const ProductDetails = ()=> {
 
// const [process,setProcess]=useState([
//   {icon: <DoneIcon/>,
//   label: 'Done'
// ]),
  
//   const handelClick=()=>{
//     setProcess({
//       label: 'Loding..'
//     })
//     setTimeout(()=>{
//       setProcess({
//         icon: <DoneIcon/>,
//         label: 'Done'
//       })
//     }
//     ,2000)
//   }




  return (
    <div className="container">
       <div className='left' >
          <div> 
            <img    src="https://cdn-images.farfetch-contents.com/18/38/59/40/18385940_39460092_600.jpg" alt=""/>
            </div>

            <div>
                <img src="https://cdn-images.farfetch-contents.com/18/38/59/40/18385940_39443399_1000.jpg" alt=""/>
            </div>
       </div>
         <div className='right'>
            <p> New Season</p>
            <h1> Casablanca</h1>
            <p1> logo-buckle leather belt</p1>
            <br/>
            <p2><b>$475</b>  (Import duties included)</p2>
            <br/>

            <a>Size guide</a>
            <br/>

            <select>
                <option>Select Size</option>
                <option>80 CM</option>
                <option>85 CM</option>
                <option>90 CM</option>
            </select>
            <br/>
           
            <div className="add"> <button className="save"  > 
            Add to Bag

           {/* <div className="loading"> </div> */}
          
            </button>
            
             <div>Wishlist   {" "}
             <FaHeart className="heart"/>{" "} </div> 
             </div> 
             <br/>
             <p3>Estimated delivery </p3>
             <br/>
             <p4>May 12 - May 20</p4>
              <br/>
              <p6>  Also available in</p6>
           
             <br/>
             <div>
               <img src="https://cdn-images.farfetch-contents.com/18/36/05/23/18360523_39483405_80.jpg" alt="" />
             </div>
             <br/>
            <p5><b>Exclusive student offer | 10% off orders over $200</b> </p5>
                  
                </div>
       </div>
 
  )
}
 