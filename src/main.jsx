import React from 'react'
import ReactDOM from 'react-dom/client'
const App = React.lazy(()=> import("./App.jsx"))
const UnderConst = React.lazy(()=> import("./underConstruction/UnderConst.jsx"))

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App />*/}
        <UnderConst />
    </React.StrictMode>,
)
