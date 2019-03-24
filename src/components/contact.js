import React ,{Component} from 'react';
import {Grid, Cell, List, ListItemContent, ListItem} from 'react-mdl';
class Contact extends Component {
    render()
    {
        return(
            <div className="contact-body">
             <Grid className="contact-grid">
              <Cell col={6}>
              <h2>El Mehdi Nassiri</h2>
              <img
              src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"
              alt="avatar"
              style={{height:'250px'}}
              />
              <p style={{width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Front-End Developer, With Experiance of 2 Years on Web development and 5 Years on Websites Development,
              Graduated on Web Development in 2017 and Microsoft Certified Professional on Dec 2016.
              </p>
              </Cell>
              <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>

              <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                <i className="fa fa-phone-square" aria-hidden="true" />
                 (212) 6 72208020
                </ListItemContent>
              </ListItem>
             
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                <i className="fa fa-envelope" aria-hidden="true" />
                 elmehdinassiri31@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                <i className="fa fa-skype" aria-hidden="true" />
                 el mehdi nassiri
                </ListItemContent>
              </ListItem>
            </List>
            
              </div>
              </Cell>
             </Grid>
            </div>
        )
    }
}

export default Contact;