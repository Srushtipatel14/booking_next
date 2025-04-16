'use client';
import "../css/userlogin.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Offcanvas, Modal } from "react-bootstrap";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [canvasshow, setCanvasShow] = useState(false);
  const [topCanvas, setTopCanvas] = useState(false)
  const router = useRouter();
  return (
    <div className="container-fluid p-0 navbar_bg">
      <div className="navbar-wrapper mx-auto">
        <nav className="navbar px-2 py-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-1" style={{cursor:"pointer"}} onClick={()=>router.push("/")}>
              <img
                src="booking_logo.png"
                alt="web_logo"
                style={{ width: "45px", height: "45px" }}
              />
              <p
                className="m-0 fs-4 d-none d-md-block"
                style={{ lineHeight: "1", position: "relative", top: "-3px" }}
              >
                Bookzy
              </p>
            </div>

            <form className="form-inline d-none d-md-block">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <IoSearch size={18} />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 search-input"
                  placeholder="Search for Cinemas and Movies"
                  aria-label="Search"
                  onClick={() => router.push("search")}
                  onKeyDown={() => router.push("search")}
                  style={{ outline: "none", boxShadow: "none" }}
                />

              </div>
            </form>
          </div>
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-1" onClick={() => setTopCanvas(true)}>
              <p className="m-0">Ahmedabad</p>
              <IoIosArrowDown style={{cursor:"pointer"}} size={18} />
            </div>
            {/* <div className="d-flex align-items-center gap-2">
              <img
                src="user.png"
                alt="user"
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                }}
              />
              <p className="m-0 d-none d-sm-block">Hi, Guest</p>
            </div> */}

            <div className="d-flex align-items-center gap-2">
              <button className="signin_btn" onClick={() => router.push("userlogin")}>Sign in</button>
              <IoMenu size={32} style={{cursor:"pointer"}} onClick={() => setCanvasShow(true)} />
              <Offcanvas
                show={canvasshow}
                onHide={() => setCanvasShow(false)}
                placement="end"
              >
                <div className="d-flex justify-content-between align-items-center px-3 py-2">
                  <div>
                    <p className="fs-3 fw-bold m-0">Hey!</p>
                    <span style={{ fontSize: "14px",cursor:"pointer" }} onClick={()=>{
                      setCanvasShow(false);
                      router.push("/editprofile")
                    }}>Edit Profile</span>
                  </div>
                  <div> <img
                    src="user.png"
                    alt="user"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  /></div>
                </div>
              </Offcanvas>
            </div>
          </div>
        </nav>
      </div>

      <Modal show={topCanvas} onHide={() => setTopCanvas(false)} contentClassName="custom_modal">
        <Modal.Header className="border-0" >
          <form style={{ width: "100%" }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search for Cinemas and Movies"
                aria-label="Search"
                style={{
                  outline: "none",
                  boxShadow: "none",
                  borderRadius: "0px",
                  height: "3rem",
                }}
              />
            </div>
          </form>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Ahmedabad", "Surat", "Vijapur", "Visnagar", "Valsad", "Vadodara", "Mahesana"].map((item, index) => (
              <span key={index} className="city_modal" >
                {item}
              </span>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar;
