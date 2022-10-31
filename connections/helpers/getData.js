const API="https://1aaef967-c1c0-439b-b337-7532bfd2d8c5.mock.pstmn.io"

export default async (id)=>{

    const apiUrl= (id) ? `${API}${id}` : API

    try{
        
        const response= await fetch(apiUrl)
        const data= await response.json()

        return data

    }catch(error){
        console.log("Error Fetch", error)
    }
}