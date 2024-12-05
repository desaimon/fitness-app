import axios from 'axios';
import { rapidApiKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com'

const apiCall = async (url, params)=> {
    try{
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'x-rapidapi-key': rapidApiKey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
              }
        };
        const response = await axios.request(options);
        return response.data;
    }catch(e){
        console.log("here we are")
        console.log('error', e.message);
    }
}

export const fetchExercisesByBodyPart = async (bodyPart) =>{
    console.log(baseUrl+`/exercises/bodyPart/${bodyPart}`)
    let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`);
    return data; 
}