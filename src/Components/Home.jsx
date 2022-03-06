import React from 'react'
import Notif from './Notif'

const Home = () => {

    const [coments, setComents] = React.useState([])
    const [imput, setImput] = React.useState('')
    const imputElement = React.useRef()
    const handleClick = () => {
        if(imput === ''){
            return
        }
        setComents([...coments, imput])
        setImput('')
        imputElement.current.focus()

    }

    const [carrinho, setCarrinho] = React.useState(null)
    
    const refTimeout = React.useRef()

    const handleCarrinho = () => {
        //setdisplayNotif('1')
        setCarrinho(carrinho + 1)
        
        clearTimeout(refTimeout.current)
        refTimeout.current = setTimeout(() => {

           // setdisplayNotif('0')
        }, 1000)
    }

    
    return (
        <div>
            <Notif  />
            {coments && <ul style={{listStyle:'none', padding:'5px 0px 5px 0px',}}>
                {coments.map( (item, index) => <li key={index}>{item}</li>)}
            </ul>}
            <input type="text" value={imput} ref={imputElement} onChange={({target}) => setImput(target.value)} />
            <br />
            <button onClick={handleClick}>add coment</button>
            <br />
            <br />
            <br />
            <button onClick={handleCarrinho}>Carrinho {carrinho}</button>
            
            
        </div>
    );
}

export default Home;
