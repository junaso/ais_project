import React from "react"
import Image from 'next/image' // Import Image from next/image

// nav
const Navgation = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-sm mb-5 mt-2">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              {/* Use the Image component instead of img for optimized image loading */}
              <Image 
                src="/img/BI.png" 
                alt="BI" 
                width={80} 
                height={50}
                priority  // Optionally, add priority to load this image immediately on page load
              />
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
