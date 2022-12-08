import { useStatStyles } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const cartContext = createContext()

function AppContextProvider({children}){
    const [cart,setCart] = useState([])

    const checkOut = ()=>{
        setCart([])
    }

    return (
        <cartContext.Provider value={{cart,setCart,checkOut}}>
            {children}
        </cartContext.Provider>
    )
}

export default AppContextProvider