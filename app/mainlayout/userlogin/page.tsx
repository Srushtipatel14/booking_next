'use client';

import "../css/Userlogin.css";
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from "react-icons/fi";

const UserLogin = () => {
  const router = useRouter();
  return (
    <div className="container-fluid flex-grow-1 d-flex justify-content-center align-items-center bg_image">
      <div className="card p-4 text-center form_styling" style={{ width: "350px" }}>
        <div
          className="position-absolute top-0 start-0 m-3"
          style={{ cursor: "pointer" }}
          onClick={() => router.back()} >
          <FiArrowLeft size={20} />
        </div>
        <div>
          <img src="booking_logo.png" alt="web_logo" className="mb-3" style={{ width: "75px" }} />
        </div>
        <div className="mb-3">
          <p className="login_font">Please enter your email address for verification</p>
        </div>
        <div className="my-3">
          <input type="email" className="form-control" placeholder="Enter email address" />
        </div>
        <div className="mt-5">
          <button className="button-primary w-100" onClick={() => router.push("/userotp")}>Send Verification Code</button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
