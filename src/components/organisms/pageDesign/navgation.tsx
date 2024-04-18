import React from "react";

// nav
const Navgation = () => {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-sm mb-5 mt-2">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <img src="/img/BI.png" alt="BI" width={80} height={50} />
              <p className="navbar-brand m-0 ms-2">入室管理システム</p>
            </div>

            <div className="justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">System</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Mypage</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navgation
