import React from 'react'
import axios from 'axios'
import { useState } from 'react';
export default function Form() {
    const[id,setId]=useState('')
    const[title,setTitle]=useState('')
    const[brand,setBrand]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState('')
    const[image,setImage]=useState('')
    const productData={
        productId:id,
        title:title,
        brand:brand,
        price:price,
        description:description,
        thumbnail:image
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/product',productData)
        .then((res)=>{
            alert("Successful")
        })
    }
    return (
        <div className="row justify-content-center">
            <div claaName="col-md-6 Thumbnail">
                <h3 className='text-center text-primary'>Add product</h3>
        <form method='post'>
            <div className="mb-3">
                <label>Id</label>
                <input type="text" className='form-control' placeholder="Enter Product Id"
                onChange={
                    (e)=>{
                        setId(e.target.value)
                    }
                }/>
            </div>
            <div className="mb-3">
                <label>Title</label>
                <input type="text" className='form-control' placeholder="Enter Product Title"
                onChange={
                    (e)=>{
                        setTitle(e.target.value)
                    }
                }/>
            </div>
            <div className="mb-3">
                <label>Brand</label>
                <input type="text" className='form-control' placeholder="Enter Product Brand"
                onChange={
                    (e)=>{
                        setBrand(e.target.value)
                    }
                }/>
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input type="text" className='form-control' placeholder="Enter Product Price"
                    onChange={
                        (e)=>{
                            setPrice(e.target.value)
                        }
                    }/>
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <textarea type="text" className='form-control' placeholder="Enter Product Price"
                        onChange={
                        (e)=>{
                            setDescription(e.target.value)
                        }
                    }>
                    </textarea>
                </div>
                <div className="mb-3">
                    <label>Image</label>
                    <input type="url" className='form-control' 
                    onChange={
                        (e)=>{
                            setImage(e.target.value)
                        }
                        }/>
                </div>
                <div className="mb-3">
                    
                    <button>Submit</button>
                </div>
                </form>
    </div>
    </div>
  )
}