import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Gabe from "./streams/gabe";
import Lily from "./streams/lily";
import Amanda from "./streams/amanda";
import Heather from "./streams/heather";
import Asad from "./streams/asad";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/lily" exact component={Lily} />
                    <Route path="/heather" exact component={Heather} />
                    <Route path="/amanda" exact component={Amanda} />
                    <Route path="/gabe" exact component={Gabe} />
                    <Route path="/asad" exact component={Asad} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
