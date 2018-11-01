//contact

import React , { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Profile from './img/perfil.jpg';

class Contact extends Component {
render (){
	return(
    <div style={{width: '100%', margin: 'auto'}}>
	<div className="contact-body">
<Grid className="contact-grid">
<Cell col={6}>
<h2>Sabrina Andrade</h2>  
<img className="photo_profile"src={Profile} alt="profile" />
<p className="myself">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Cell>
<Cell col={6}>
<div className="div_icons">
<i className="fab fa-html5"></i>
<i class="fab fa-css3-alt"></i>
<i class="fab fa-sass"></i>
</div>
<div className="div_icons">
<i class="fab fa-js-square"></i>
<i class="fab fa-react"></i>
<i class="fab fa-node-js"></i>
</div>
</Cell>
</Grid>
  </div>
		




            <div className="contact-text">
            <div className="container-contact">
              <h3>Contato</h3>

            <hr/>

          <p>HTML/CSS | SASS | Bootstrap | JavaScript | React | Firebase | NodeJS </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sabrina-andrade-leite/" rel="noopener noreferrer" target="_blank" title="Link para perfil de Sabrina Andrade no Linkedin">
            <i className="fab fa-linkedin-in" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Sabrina-88" title="Link para perfil de Sabrina Andrade no GitHub" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/sabrina.andrade8" title="Link para perfil de Sabrina Andrade no Facebook" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-facebook-f" aria-hidden="true" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/sabriinaal/" title="Link para perfil de Sabrina Andrade no Instagram" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-instagram" aria-hidden="true" />
          </a>

          <a href="mailto:sabrina.andrade.leite@gmail.com?Subject=Sabrina Andrade | Web Designer" target="_top" title="Link para enviar email para Sabrina Andrade"> 
                <i className="fas fa-envelope"> </i>
        </a><span className="email">sabrina.andrade.leite@gmail.com</span>
    </div>
        </div>
            </div>
          
      </div>		 
			        			
		)
}
}

export default Contact;