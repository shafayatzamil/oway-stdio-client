import React from "react";
import companyLogo from "../../assets/images/oway stdio logo.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex w-screen h-screen ">
      <div className="bg-[#4267CF] flex-1">
        <div className="flex justify-center my-auto mt-52">
          <img src={companyLogo} className="w-28" alt="" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-center my-auto mt-32">
          <div className="w-92 px-12">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="text-base text-[#666E85]">
              Welcome back! Please enter your credential
            </p>

            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-control w-80">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your Email"
                      className="input input-bordered px-4"
                    />
                  </div>
                  <div className="form-control w-80">
                    <label className="label">
                      <span className="label-text ">Password</span>
                    </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="******"
                      className="input input-bordered "
                    />
                  </div>
                  <div className="form-control mt-3">
                    <button className="btn bg-[#4267CF]">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
