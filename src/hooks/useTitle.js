import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `Doll Galaxy | ${title} `;
    },[title])
}

export default useTitle;