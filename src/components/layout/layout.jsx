import { Link, Outlet } from "react-router-dom"
const Layout = () => {
    return (
<>
      <header className="header">
        <div className="header-container">
          <ul className="user-menu">
            <li className="user-menu-item">
              <a href="#" className="user-menu-link">
                <span className="visually-hidden">User settings</span>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 5C12 6.06087 11.5786 7.07828 10.8284 7.82843C10.0783 8.57857 9.06087 9 8 9C6.93913 9 5.92172 8.57857 5.17157 7.82843C4.42143 7.07828 4 6.06087 4 5C4 3.93913 4.42143 2.92172 5.17157 2.17157C5.92172 1.42143 6.93913 1 8 1C9.06087 1 10.0783 1.42143 10.8284 2.17157C11.5786 2.92172 12 3.93913 12 5V5ZM8 12C6.14348 12 4.36301 12.7375 3.05025 14.0503C1.7375 15.363 1 17.1435 1 19H15C15 17.1435 14.2625 15.363 12.9497 14.0503C11.637 12.7375 9.85652 12 8 12V12Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </li>
            <li className="user-menu-item">
              <a href="#" className="user-menu-link">
                <span className="visually-hidden">Wishlists</span>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.31804 2.31804C1.90017 2.7359 1.5687 3.23198 1.34255 3.77795C1.1164 4.32392 1 4.90909 1 5.50004C1 6.09099 1.1164 6.67616 1.34255 7.22213C1.5687 7.7681 1.90017 8.26417 2.31804 8.68204L10 16.364L17.682 8.68204C18.526 7.83812 19.0001 6.69352 19.0001 5.50004C19.0001 4.30656 18.526 3.16196 17.682 2.31804C16.8381 1.47412 15.6935 1.00001 14.5 1.00001C13.3066 1.00001 12.162 1.47412 11.318 2.31804L10 3.63604L8.68204 2.31804C8.26417 1.90017 7.7681 1.5687 7.22213 1.34255C6.67616 1.1164 6.09099 1 5.50004 1C4.90909 1 4.32392 1.1164 3.77795 1.34255C3.23198 1.5687 2.7359 1.90017 2.31804 2.31804V2.31804Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </a>
            </li>
            <li className="user-menu-item">
              <a href="#" className="user-menu-link">
                <span className="visually-hidden">Cart</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.25 7.24988V7.12988C7.25 5.8701 7.75045 4.66192 8.64124 3.77113C9.53204 2.88033 10.7402 2.37988 12 2.37988C13.2598 2.37988 14.468 2.88033 15.3588 3.77113C16.2496 4.66192 16.75 5.8701 16.75 7.12988V7.24988H18.251C18.822 7.24988 19.307 7.66888 19.391 8.23388L19.609 9.72688C20.039 12.6649 20.039 15.6509 19.609 18.5889C19.508 19.2787 19.1799 19.9152 18.6766 20.3977C18.1733 20.8801 17.5235 21.1811 16.83 21.2529L16.201 21.3179C13.4078 21.6079 10.5922 21.6079 7.799 21.3179L7.17 21.2529C6.47651 21.1811 5.82674 20.8801 5.32345 20.3977C4.82015 19.9152 4.49204 19.2787 4.391 18.5889C3.96049 15.6506 3.96049 12.6652 4.391 9.72688L4.61 8.23388C4.6501 7.96045 4.78724 7.71057 4.99637 7.5299C5.20549 7.34923 5.47264 7.24984 5.749 7.24988H7.25ZM11.19 3.98288C11.6701 3.85933 12.1721 3.84724 12.6576 3.94755C13.1431 4.04787 13.5992 4.25792 13.9911 4.56163C14.3829 4.86534 14.7 5.25467 14.9182 5.69982C15.1365 6.14496 15.2499 6.63413 15.25 7.12988V7.24988H8.75V7.12988C8.7501 6.40901 8.98987 5.70862 9.43158 5.13892C9.87329 4.56922 10.4919 4.16255 11.19 3.98288ZM7.25 8.74988V10.9999C7.25 11.1988 7.32902 11.3896 7.46967 11.5302C7.61032 11.6709 7.80109 11.7499 8 11.7499C8.19891 11.7499 8.38968 11.6709 8.53033 11.5302C8.67098 11.3896 8.75 11.1988 8.75 10.9999V8.74988H15.25V10.9999C15.25 11.1988 15.329 11.3896 15.4697 11.5302C15.6103 11.6709 15.8011 11.7499 16 11.7499C16.1989 11.7499 16.3897 11.6709 16.5303 11.5302C16.671 11.3896 16.75 11.1988 16.75 10.9999V8.74988H17.95L18.125 9.94388C18.534 12.7383 18.534 15.5774 18.125 18.3719C18.0724 18.7319 17.9012 19.064 17.6386 19.3158C17.376 19.5676 17.0369 19.7245 16.675 19.7619L16.046 19.8259C13.356 20.1059 10.644 20.1059 7.954 19.8259L7.324 19.7609C6.96229 19.7233 6.62342 19.5663 6.36099 19.3145C6.09856 19.0628 5.92755 18.7307 5.875 18.3709C5.46565 15.5768 5.46565 12.738 5.875 9.94388L6.05 8.74988H7.25Z"
                    fill="white" />
                </svg>
              </a>
            </li>
          </ul>
          <a href="" className="logo-link">
            <img src="./images/logo.svg" alt="" className="logo" />
          </a>
          <nav className="nav">
            <ul className="menu">
              <li className="menu-item">
                <Link to="/" className="menu-link">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/catalog" className="menu-link">Catalog</Link>
              </li>
              <li className="menu-item">
                <Link to="/contacts" className="menu-link">Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
       <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2>MOLLA</h2>
            <div className="footer-social">
              <a href="#">
                <img src="./images/icons/facebook.svg" alt="Facebook" />
              </a>
              <a href="#">
                <img src="./images/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="#">
                <img src="./images/icons/twitter.svg" alt="Twitter" />
              </a>
              <a href="#">
                <img src="./images/icons/youtube.svg" alt="YouTube" />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Offers</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>About</h3>
              <ul>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Our Packages</a></li>
                <li><a href="#">Promotions</a></li>
                <li><a href="#">Refer a Friend</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Help Centre</h3>
              <ul>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Product Returns</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Order Issues</a></li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <h3>Our Newsletter</h3>
              <p>Subscribe to our newsletter to get updates about our great offers.</p>
              <form>
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 molla. All rights reserved.</p>
          <p>Design by <a href="#">Templategraphy</a></p>
        </div>
      </footer>
    </>
    )
}
export default Layout