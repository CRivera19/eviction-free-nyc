import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
import { FormattedMessage as Trans, FormattedHTMLMessage as HTMLTrans } from 'react-intl';

import '../styles/Footer.scss';
import rtcLogo from '../assets/img/RTC_logo.png';
import justfixLogo from '../assets/img/Justfix_logo.png';

const Footer = (props) => (
  <footer className="Footer">
      <img src={rtcLogo} alt={`Right to Counsel logo`} />
      <HTMLTrans id="attribution" />
      <div className="Footer_JustFix col-ml-auto">
        <HTMLTrans id="justfixAttribution" />
        <a href="https://www.justfix.nyc/" target="_blank"><img src={justfixLogo} alt={`JustFix.nyc logo`} /></a>
      </div>


  </footer>
)

export default Footer;
