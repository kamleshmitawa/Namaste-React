import { useEffect, useState } from "react"


// #Single Responsibility Principal: Only single responsibility to check the online/offline status
// Advantages:
// - More readable
// - Reusable
// - More testable : Easy to write test case, if we need to test it.


const useOnlineStatus = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', () => {
            setIsOnline(!isOnline)
        })

        window.addEventListener('online', () => {
            setIsOnline(!isOnline)
        })
    }, [])


    return isOnline
}


export default useOnlineStatus;