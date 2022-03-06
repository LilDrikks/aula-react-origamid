import React from 'react'

import { GlobalContext, GlobalStorage } from '../Context/GlobalContext'
console.log(GlobalStorage)
const Notif = ({displayNotif}) => {
    return (
        <GlobalStorage>
            <p 
            style={
                {   opacity:`${displayNotif}`,
                    backgroundColor:'green',
                    color:'white',
                    width:'30%',
                    height:'40px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:'5px',
                    margin:'0 auto',
                    marginTop:'20px',
                    transition:'0.3s all ease-in',
                }
                }
            >
            item adicionado!
            </p>
        </GlobalStorage>
    );
}

export default Notif;
