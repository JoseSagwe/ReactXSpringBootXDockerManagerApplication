import axios from 'axios'

export default function retrieveHelloBean(){
    return(
    axios.get('http://localhost:8080/hello')

    )
}

// //////////           OR              //////////
// export  const retrieveHelloBean = () => axios.get('http://localhost:8080/hello')
