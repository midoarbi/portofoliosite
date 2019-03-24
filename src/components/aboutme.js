import React ,{Component} from 'react';
import {Cell, Grid, Chip} from 'react-mdl';
class About extends Component {
    render()
    {
        return(
            <Grid>
            <cell col={6}>
            
            </cell>
            <Cell col={8}>
            <h2 style={{paddingTop:'1em', textAlign:'center', fontFamily:'Anton'}}>Who Am I</h2>
            <h2 style={{ textAlign:'center', fontFamily:'Oxygen'}}>Qui Je Suis</h2>
            <p style={{textAlign:'center', fontFamily:'Oxygen'}}>Front-End React Js Developer, Web Development Graduated . React Js Front-End Developer 6 Months Now. I'am Able 
            to Learn And Practise Differents Projects Using Differents Ways and Technologies Like React js/redux , and Help of Node Js, 
            Git, Html/Css, Javascript, ES6.
            </p>
            <p style={{textAlign:'center', color:'#008000', fontSize:'20px'}}>Best practise and Working With: Firebase,Express,MongoDB  |  Design UI: Material UI, React Md Library</p>
            <hr style={{borderTop:'1px solid #FF336B'}}/>
            <h4 style={{fontFamily:'Anton', marginLeft:'50px'}}>Download My CV Below: just Click!................</h4>
            <div>
            <a href="https://docs.google.com/document/d/1sqX9b_jVCWtaA37RW-waTxcVg514USX1lAx_KmQH9JE/edit?usp=sharing" target="_blank">
            <img
            src="https://cdn2.iconfinder.com/data/icons/file-extension-names-vol-2-14/512/10_Document_file_file_format_docx-256.png"
            alt="cv Format Word"
            style={{height:'100px', marginRight:'550px' , marginLeft:'40px'}}
            title="Format Word"
            />
            </a>

            <a href="https://drive.google.com/open?id=1VeIbUpXYo-B3B5TzfxnHffTUQQAXtTBp" target="_blank">
            <img
            src="https://cdn2.iconfinder.com/data/icons/file-extension-names-vol-2-14/512/18_Pdf_document_file_format_file-256.png"
            alt="cv Format Word"
            style={{height:'100px'}}
            title="Format Pdf"
            />
            </a>
           
            
            </div>
            </Cell>
            <Cell col={4} className="aboutme-right-col">
            <h5>Tags</h5>
            <h6>Languages</h6>
            <div>
            <Chip style={{color:'red'}} >HTML</Chip>
            <Chip style={{color:'green'}}>CSS</Chip>
            <Chip style={{color:'blue'}} >Javascript</Chip>
            <Chip style={{color:'grey'}} >React js</Chip>
            <Chip style={{color:'pink'}} >Json</Chip>
            </div>
            <h6>Databases</h6>
            <div>
            <Chip>FireBase</Chip>
            <Chip>Express</Chip>
            <Chip>MongoDB</Chip>
            <Chip>LocalStorage</Chip>
            </div>
            <h6>Design</h6>
            <div>
            <Chip>Material UI</Chip>
            <Chip>React MDL</Chip>
            <Chip>Bootstrap</Chip>
            </div>
            </Cell>
            </Grid>
        )
    }
}

export default About;