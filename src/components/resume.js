import React ,{Component} from 'react';
import {Cell, Grid} from 'react-mdl';
import Education from './education';
import Experiance from './experiance';
import Skills from './skills';
class Resume extends Component {
    render()
    {
        return(
            <div>
              <Grid>
               <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                <img
                src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png"
                alt="avatar"
                style={{height:'200px'}}
                />
                </div>

                <h2 style={{paddingTop: '2em', textAlign: 'center'}}>El Mehdi Nassiri</h2>
                <h4 style={{color: 'grey'}}>Web Developer</h4>
                <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,</p>
                <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                <h5>Adress</h5>
                <p>Residence Fal El kheir, Morocco</p>
                <h5>Phone</h5>
                <p>(212) 6 72208020</p>
                <h5>Email</h5>
                <p>elmehdinassiri31@gmail.com</p>
                <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
               </Cell>
               <Cell className="resume-right-col" col={8}>
               <h2 style={{textAlign:'center', color:'grey'}}>Education</h2>

               <Education
               startYear={2015}
               endYear={2017}
               schoolName= "Associate Degree"
               schoolDescription= "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"
               />

               <Education
               startYear={2014}
               endYear={2015}
               schoolName= "High School Diploma"
               schoolDescription= "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"
               />
               
               <hr style={{borderTop: '3px solid dutted #e22947'}}/>

               <h2 style={{textAlign:'center', color:'grey'}}>Experiance</h2>

               <Experiance
               startYear={2017}
               endYear={2018}
               jobName="Websites Developer"
               jobDescription="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"
               />

               <Experiance
               startYear={2018}
               endYear={2019}
               jobName="Front-end Developer"
               jobDescription="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"
               />

               <hr style={{borderTop: '3px solid dutted #e22947'}}/>

               <Skills
               skill="HTML/CSS"
               progress={90}
               />
               <Skills
               skill="Javascript"
               progress={85}
               />
               <Skills
               skill="React"
               progress={85}
               />
               <Skills
               skill="Node JS"
               progress={80}
               />
               <Skills
               skill="Bootstrap"
               progress={85}
               />
               <Skills
               skill="Git"
               progress={80}
               />
               </Cell>
              </Grid>
            </div>
        )
    }
}

export default Resume;