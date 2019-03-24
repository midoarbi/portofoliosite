import React ,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render()
    {
        return(
           <div style={{width: '100%', margin: 'auto'}} >
           <Grid className="landing-grid">
           <Cell col={12}>
           <img
           src="https://fr.tkltradingschool.com/hosted/images/03/4e459019d111e7bbb193f306041872/04052017-Avatar-Male.png"
           alt="avatar"
           className="avatar-img"
           />
           <div className="banner-text">
           <h1>React JS Developer</h1>
           
 
           <hr/>
           <p>HTML/CSS | Javascript | BootStrap | React | Node JS | FireBase | MongoDB</p>
<div className="social-links">
{/*LinkedIn */}
<a href="http://www.google.com" rel="noopener noreferrer" target="_blank" >
<i className="fa fa-linkedin-square" aria-hidden="true" />
</a>

{/*GitHub */}
<a href="http://www.google.com" rel="noopener noreferrer" target="_blank" >
<i className="fa fa-github-square" aria-hidden="true" />
</a>

{/*FreecodeCamp */}
<a href="http://www.google.com" rel="noopener noreferrer" target="_blank" >
<i className="fa fa-free-code-camp" aria-hidden="true" />
</a>

{/*Youtube */}
<a href="http://www.google.com" rel="noopener noreferrer" target="_blank" >
<i className="fa fa-youtube-square" aria-hidden="true" />
</a>

</div>

           </div>
           </Cell>
           </Grid>
           </div>
        )
    }
}

export default Landing;