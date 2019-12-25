import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__inner">
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="/" className="footer__list-link">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
