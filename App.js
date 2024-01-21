import Header from "./Header";
import { Outlet } from 'react-router-dom';

const App = () => {
    return <div>
        <h1>Namaste React Heading using jSX 🚀 </h1>
        <Header />
        <Outlet />
    </div>
}

export default App;
