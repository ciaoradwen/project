import React from 'react'
import styled from 'styled-components'
 function Footer() {
    return (
      <FooterContainer className="main-footer"> 
      <div className="footer-middle">
      <div className="container">
      <div className="row">
    {/* column 1 */}
    <div className="col-md-3 col-sm-6">
    <h4>Lorem ipsum.</h4>
    <ul className="list-unstyled">
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
    </ul>
</div>
 {/* column 2 */}
 <div className="col-md-3 col-sm-6">
    <h4>Lorem ipsum.</h4>
    <ul className="list-unstyled">
        <li><a href="/"> Lorem, ipsum.</a></li>
        <li><a href="/">Lorem, ipsum.</a></li>
        <li><a href="/">Lorem, ipsum.</a></li>
        <li><a href="/">Lorem, ipsum.</a></li>
    </ul>
</div>
 {/* column 3 */}
 <div className="col-md-3 col-sm-6">
    <h4>Lorem ipsum.</h4>
    <ul className="list-unstyled">
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
    </ul>
</div>
 {/* column 4 */}
 <div className="col-md-3 col-sm-6">
    <h4>Lorem ipsum.</h4>
    <ul className="list-unstyled">
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
    </ul>
</div>
</div>
    {/* Footer Bottom */}
    <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - All Rights
              Reserved
            </p>
          </div>
</div>

</div>
</FooterContainer>
    );
}
export default Footer;
const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 48px;
    color: var(--mainWhite);
}
.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
      color: var(--mainGrey);
  }
  ul li a :hover{
      color: var(--mainLightGrey);
  }
`;
