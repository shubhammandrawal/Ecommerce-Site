import axios from 'axios'

const params = {
    headers: {
        Authorisation: "bearer" + process.env.REACT_APP_STRIPE_APP_KEY,
    },
}

export const fetchDatafromAPI = async ()=>{
     try{
        const { data } = await axios.get(
            "http://localhost:1337/api/best-sellers/?populate=*" + params
            );
            return data; 
     }
        
     catch(error){
        console.log(error)
        return error;
     }
}