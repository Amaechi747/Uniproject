"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const sweetalert_1 = __importDefault(require("sweetalert"));
const Signup = (props) => {
    const [formData, setFormData] = (0, react_1.useState)({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        address: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(Object.assign(Object.assign({}, formData), { [name]: value }));
    };
    const handleSubmit = () => {
        const { firstName, lastName, email, phone, password, confirmPassword, address } = formData;
        if (password != confirmPassword) {
            (0, sweetalert_1.default)("Error", "Passwords do not match", "error");
        }
        else {
            axios_1.default.post('/api/v1/auth/signup', { firstName, lastName, email, phone, password, confirmPassword, address })
                .then(res => {
                (0, sweetalert_1.default)("Success", "You have successfully signed up", "success");
            }).catch(err => {
                (0, sweetalert_1.default)("Error", "Something went wrong", "error");
            });
        }
    };
    return (<div className="container">
   <form onSubmit={() => handleSubmit()}>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter First Name" onChange={(e) => handleChange(e)} value={formData.firstName}/>
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Last Name" onChange={(e) => handleChange(e)} value={formData.lastName}/>
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" onChange={(e) => handleChange(e)} value={formData.email}/>
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
     <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number" onChange={(e) => handleChange(e)} value={formData.phone}/>
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
     <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" onChange={(e) => handleChange(e)} value={formData.password}/>
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password</label>
     <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Confirm Password" onChange={(e) => handleChange(e)} value={formData.confirmPassword}/>
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Address" onChange={(e) => handleChange(e)} value={formData.address}/>
    </div>

   </form>
  </div>);
};
exports.default = Signup;
//# sourceMappingURL=Signup.js.map