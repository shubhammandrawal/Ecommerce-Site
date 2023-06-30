import { useEffect, useState } from 'react';
import { fetchDatafromAPI } from '../../context/Api';
import axios from 'axios';
import Banner from '../Banner/Banner';
import Category from '../category/Category';
import Product from '../product/Product';
import './Home.css'
import ProductPerItem from '../product/ProductPerItem';
export default function Home(){

    const[bestSeller, setbestSeller] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:1337/api/best-sellers/?populate=*').then((bestSeller)=>{
            // debugger
            setbestSeller(bestSeller.data.data)
        }).catch(()=>{

        }).finally(()=>{

        })
    },[])
    
    
   return<div className='home'>
        <Banner />
        <div className='main-content'>
            <div className='layout'>
                <Category/>
                <Product />
                {bestSeller.map((item)=>{ 
               return  <ProductPerItem 
               item={item.attributes} 
               id={item.id} 
               img={"http://localhost:1337" + item.attributes.image.data[0].attributes.url}  
               />   
            })}
            </div>
        </div>
    </div>
}