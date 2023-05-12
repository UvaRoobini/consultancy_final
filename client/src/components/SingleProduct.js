import React, { useState, useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"

const data = {
  "products": [
    {
      "id": 1,
      "name": "Solar Panel Type A",
      "desc": "Man request adapted spirits set pressed. Up to denoting subjects sensible feelings it indulged directly. We dwelling elegance do shutters appetite yourself diverted. Our next drew much you with rank. Tore many held age hold rose than our. She literature sentiments any contrasted. Set aware joy sense young now tears china shy.",
      "small": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      "large": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    },
    {
      "id": 2,
      "name": "Solar Panel Type B",
      "desc": "Or neglected agreeable of discovery concluded oh it sportsman. Week to time in john. Son elegance use weddings separate. Ask too matter formed county wicket oppose talent. He immediate sometimes or to dependent in. Everything few frequently discretion surrounded did simplicity decisively. Less he year do with no sure loud.",
      "small": "https://www.lightinus.com/wp-content/uploads/2019/05/Solar-Panels-Lightinus.jpg",
      "large": "https://www.lightinus.com/wp-content/uploads/2019/05/Solar-Panels-Lightinus.jpg"
    },
    {
      "id": 3,
      "name": "Solar Panel Type C",
      "desc": "Their could can widen ten she any. As so we smart those money in. Am wrote up whole so tears sense oh. Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me.",
      "small": "https://cdn.britannica.com/85/162485-050-7670426D/Solar-panel-array-rooftop.jpg",
      "large": "https://cdn.britannica.com/85/162485-050-7670426D/Solar-panel-array-rooftop.jpg"
    },
    {
      "id": 4,
      "name": "Solar Panel Type D",
      "desc": "Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express if prevent it we an musical. Especially reasonable travelling she son. Resources resembled forfeited no to zealously. Has procured daughter how friendly followed repeated who surprise. Great asked oh under on voice downs. Law together prospect kindness securing six. Learning why get hastened smallest cheerful.",
      "small": "https://www.cnet.com/a/img/resize/81788f2ae4efa7e94fcff638d239514c773f8e5a/hub/2022/09/23/a8c58723-325f-40d8-8811-79173019d115/gettyimages-169938731.jpg?auto=webp&fit=crop&height=675&width=1200",
      "large": "https://www.cnet.com/a/img/resize/81788f2ae4efa7e94fcff638d239514c773f8e5a/hub/2022/09/23/a8c58723-325f-40d8-8811-79173019d115/gettyimages-169938731.jpg?auto=webp&fit=crop&height=675&width=1200"
    },
    {
      "id": 1,
      "name": "Solar Panel Type E",
      "desc": "Man request adapted spirits set pressed. Up to denoting subjects sensible feelings it indulged directly. We dwelling elegance do shutters appetite yourself diverted. Our next drew much you with rank. Tore many held age hold rose than our. She literature sentiments any contrasted. Set aware joy sense young now tears china shy.",
      "small": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      "large": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    }
  ]
}


export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const findProduct = () => {
      const newProduct = data.products.find((product) => product.name === name)
      setSingleProduct(newProduct)
      console.log(newProduct)
    }

    findProduct()
  }, [name])

  return (
    <>
      <section className="xl:max-w-6xl xl:mx-auto py-10 lg:py-20 p-5">
        <img src={singleProduct.large} alt="" />
        <h1 className="text-4xl my-5 lg:mb-10 text-white font-bold md:text-5xl lg:text-6xl">
          {name}
        </h1>
        <p className="text-slate-300">{singleProduct.desc}</p>

        <ul className="flex items-center mt-10">
          <li>
            <Link to="/" className="text-slate-200 hover:text-white">
              &larr; Back
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}
