import App from "./App";
import BotSpecs from "./components/Cards/BotSpecs";

const routes =[
    {
        path:'/',
        element:<App />,
        errorElement: <h1>An error occured</h1>,
        children:[
            {
                path:'/bots/:id',
                element:<BotSpecs />
            },
        ]
    }
]
export default routes;