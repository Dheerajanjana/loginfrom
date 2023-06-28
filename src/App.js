import { useState } from "react";
import axios from "axios"
import "./App.css";
import {Link} from "react"

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  function PasswordChange(e) {
    setPassword(e.target.value);
  }
  function Register(e) {
   const user = {name , email , password , gender,  country   }

   console.log(user);

   axios.post("https://login-lscw.onrender.com/register",
   {
      email: email,
      password: password,
      gender: gender,
      country:country
    })
    .then((res)=>{
      console.log(res);
    })
    .catch(err => console.log(err));

  }

  async function Login(e) {
    
    const data = {
      email: email,
      password: password,
    };
console.log(data);
    
axios.post("https://login-lscw.onrender.com/login",data)
    .then((res)=>{
      console.log(res);
    })
    .catch(err => console.log(err));


  }

  return (
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <Link src="https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg"></Link>
          <div className="text">
            <span className="text-1">Ever new friend is a new adventure</span>
            <span className="text-2">Let's get connected</span>
          </div>
        </div>
      </div>
      <form action="#">
        <div className="from-contect">


          
          <div className="login-from">
            <div className="title">Login</div>
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={PasswordChange}
                  
                />
              </div>
              <div className="text">
                {" "}
                <Link href="#">Forget password</Link>{" "}
              </div>
              <div className="button input-box">
                <i className="fas fa-envelope"></i>
                <input type="submit" value="Submit" onClick={Login} />
              </div>
              <div className="text">
                {" "}
                Don't have an account?
                <label htmlFor="flip">Sigup now</label>
              </div>
            </div>
          </div>

          <div className="signup-from">
            <div className="title">Signup</div>
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                />
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                />
              </div>
              <div className="dis">
                {" "}
                <h4 className="size">Gender:</h4>
                <div className="set">
                  <div className="input_field radio_option">
                    <input
                      type="radio"
                      name="radiogroup1"
                      id="rd1"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />

                    <label htmlFor="rd1">Male</label>
                    <input
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      name="radiogroup1"
                      id="rd2"
                    />
                    <label htmlFor="rd2">Female</label>
                  </div>
                </div>
              </div>

              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>Select a country</option>
                <option value="india">India</option>
                <option value="USA">USA</option>
              </select>
              {/* <div className='text'> <a href='#'>Forget password</a> </div> */}
              <div className="button input-box">
                <i className="fas fa-envelope"></i>
                <input type="submit" value="Submit" onClick={Register} />
              </div>
              <div className="text">
                Already have an account?
                <label htmlFor="flip">Login now</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
