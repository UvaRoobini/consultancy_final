import React from "react";
import { useState } from "react";
import '../Styles/admindash.css'
import axios from "axios";

function AdminDash() {
    const [largeImage, setLargeImage] = useState('');
    const [smallImage, setSmallImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const body={
      product_name:name,
      description:description,
      img1:largeImage,
      img2:smallImage
          }
    const handleSubmit = async (event) => {
      event.preventDefault();
  
//       const data = new FormData();
//       data.append('largeImage', largeImage);
//       data.append('smallImage', smallImage);
//       data.append('name', name);
//       data.append('description', description);
  
//       try {
//         const response = await axios.post('http://127.0.0.1:8080/createproduct', {
//   product_name: name,
//   description: description,
//   img1: largeImage,
//   img2: smallImage
// });
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       };
       
          
          (await axios.post('http://localhost:9000/createproduct',body))
          .then(res=>
            {
              console.log(res.data);
            }).catch(err=>
              {
                console.log(err);
              });
    };
  
    return (
      <div>
        <br></br>
             <form onSubmit={handleSubmit}>
        <h3 style = {{fontSize : '20px',textAlign:'center'}}>ADD A PRODUCT FORM</h3>
        <br></br>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
        </div>
        <div>
          <label htmlFor="largeImage">Image:</label>
          <input type="text" id="largeImage" onChange={(event) => setLargeImage(event.target.value)} />
        </div>
        {/* <div>
          <label htmlFor="smallImage">Small Image:</label>
          <input type="text" id="smallImage" onChange={(event) => setSmallImage(event.target.value)} />
        </div> */}
       
        <button type="submit">Save</button>

      </form>
      <br></br>
      </div>
      
    );
  }
  


export default AdminDash