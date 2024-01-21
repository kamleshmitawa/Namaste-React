import useOnlineStatus from "./useOnlineStatus";

const OnlineStatus = () => {

    const isOnline = useOnlineStatus(); // #custom hook
    console.log(isOnline)
    return <div>Status: {isOnline ? 'Online' : 'Offline'}</div>
}

export default OnlineStatus;