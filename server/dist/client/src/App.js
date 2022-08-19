"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import './App.css';
const react_router_dom_1 = require("react-router-dom");
const auth_1 = require("./auth");
function App() {
    return (<div className="App">
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/signup" element={<auth_1.Signup />}/>
      </react_router_dom_1.Routes>
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map