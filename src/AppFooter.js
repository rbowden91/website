import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { FaGithub, FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaHeart } from 'react-icons/fa';



export default class AppFooter extends Component {
    render() {
	return (
	    <nav>
		<ul>
		    <li><a href="https://github.com/rbowden91"><FaGithub /></a></li>
		    <li><a href="https://twitter.com/rbowden91"><FaTwitter /></a></li>
		    <li><a href="https://facebook.com/rbowden91"><FaFacebook /></a></li>
		    <li><a href="https://instagram.com/rbwdn"><FaInstagram /></a></li>
		    <li><a href="https://www.linkedin.com/in/rbowden91/"><FaLinkedin /></a></li>
		    <li><Link to="/ntrinehart"><FaHeart /></Link></li>
		</ul>
	    </nav>
	);
    }
};
