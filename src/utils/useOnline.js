import {useEffect, useState} from "react";

const useOnline = () => {
    const [online, setOnline] = useState(true);
    
    useEffect(()=>{
        const onlineFun = () =>{setOnline(true)};
        const offlineFun = () => {setOnline(false)};
        window.addEventListener("online", onlineFun);
        window.addEventListener("offline", offlineFun);
    }, []);
    return online;
}
export default useOnline;