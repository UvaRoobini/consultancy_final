import { useState, useContext,useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'



export default function FetchProducts() {
  const [items,setItems] = useState('')

  useEffect(() => {
    axios.get('http://localhost:9000/productdisplay').then((response) => {
      console.log(response.data)
      setItems(response.data);
    });
  }, []);

  return (
    <>
      <section className="px-5 py-10 lg:py-20 xl:max-w-6xl xl:mx-auto grid grid-cols-1 gap-5 lg:gap-10 xl:gap-20" style = {{backgroundColor:"white",color:"black"}}>
        <h2 style={{fontSize:"40px",textAlign:"center",fontWeight:"600"}}>Our Products</h2>
        {items===''?'': items.map(({ product_id:id,product_name: name, description:desc, img1:small, img2:large }) => (
          <article
            key={id}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 md:place-items-center lg:gap-10 xl:gap-20"
          >
            <div>
              <picture>
                <source media="(min-width: 768px)" srcSet={large} />
                <img src={small} alt={name} />
              </picture>
            </div>

            <div>
              <h2 className="font-bold text-4xl mb-5">{name}</h2>
              { <p className="text-grey-500 mb-10" style = {{fontSize : '20px'}}>{`${desc.substring(
                0,
                200
              )}...`}</p> }
              <ul className="flex items-center justify-between">
                <li>
                  {/* <Link
                    to={`/`}
                   // to={`/${name}`}
                    className="bg-black  py-2 px-4" style={{color:"white"}} 
                  >
                    Get Quote
                  </Link> */}
                </li>
                {/* Comment here <li>
                  <button
                    onClick={handleOpenCart}
                    className="bg-black  py-2 px-4" style={{color:"white"}}>
                    Add to Cart
                  </button>
              </li> */}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
