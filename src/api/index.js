import axios from 'axios'

const BASE_URL = 'api'


export const getLinks = async () => {
    const url = `${BASE_URL}/links`
    const { data } = await axios.get(url)
    return data
}

export const createLink = async (body) =>{
    const url =  `${BASE_URL}/links`
    const {data} = await axios.post(url, body)
    console.log('this is new link', data);
}

export const deleteLink = async() =>{
    const url = `${BASE_URL}/links/:id`;
    const del = await axios.delete(url);
    console.log('this is del', del)
}

export const editLink = async(body)=>{
    const url = `${BASE_URL}/links/:id`;
    const edit = await axios.patch(url, body);
    console.log('this is edited link', eidt);

}