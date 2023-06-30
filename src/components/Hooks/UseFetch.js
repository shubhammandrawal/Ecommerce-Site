import { useEffect, useState } from 'react';
import { fetchDatafromAPI } from '../../context/Api';

export default function Fetch(endpoint){
        const[data, setData]=useState()

        useEffect(()=>{
             makeApiCall()
        },[endpoint])

        const makeApiCall = async ()=>{
            const res = await fetchDatafromAPI(endpoint)
            setData(res)
        }


        return {data}
    }