import React from 'react'
import { Container, Header, Icon, List } from 'semantic-ui-react'

function Resume() {
    return (    
        
    <section  id="Resume">
        <Header as='h2' textAlign='center'>
          
        <Header.Content>Resume</Header.Content>
            <Header.Subheader>
              <Icon name="file alternate" /><a href="/resume.pdf">For a more detailed PDF click here!</a>
            </Header.Subheader>
          </Header>
          <Container text className="resumeSec">
            <Header as='h3' >
                <Header.Content>
                    <Icon name='graduation' />
                    Education
                </Header.Content>
            </Header>
            <List>
                <List.Item>
                    <h4>University of Oregon</h4>
                    <p>November 2020 - April 2021</p>
                    <p>Coding Bootcamp training on Full Stack Development utlizing JavaScript, Node.js, Express, MongoDB, React, MVC, MERN</p>
                </List.Item>
                <List.Item></List.Item>
                <List.Item>
                    <h4>Eastern Michigan University</h4>
                    <p>September 2013 - June 2016</p>
                    <p>Bachelor of Science in Chemistry, Minor in Human Nutrition</p>
                </List.Item>
            </List> 
            </Container>
            <br></br>
            <Container text className="resumeSec">
            <Header as='h3' >
                <Header.Content>
                    <Icon name='paper plane' />
                    Work Experience
                </Header.Content>
            </Header>

            <List.Item>
                <h4>Columbia Laboratories</h4>
                <p>September 2016 - Current</p>
                <h5>Developer</h5>
                <p>Utilizing Node.js, React, under a MERN paradigm, a workflow management system was developed for use for routine laboratory tasks and business information analytics.</p>
                <p>Coordinated with parent-company IT to ensure all development projects worked within their security parameters.</p>
                <p>Prior to learning JavaScript, an interconnected system of VBA-PowerQuery enabled Excel Worksheets were used for the same workflow management system.</p>
            <p>On-demand development of tools for entire staff.</p>
            </List.Item>
            <br></br>
            <List.Item>
                <h5>Quality Assurance Coordinator - Chromatography</h5>
                <p>Coordinated with deparment manager and QA Manager on ongoing QA changes and maintenance.</p>
                <p>Montly checklists for all controlled aspects of the department</p>
                <p>Helped train new staff and coordinate issues as they arose.</p>
            </List.Item>
            <br></br>
            <List.Item>
                <h5>Analyst - Chromatography - LC-DAD, LC-MS/MS, GC-MS, GC-MS/MS</h5>
                <p>Regularly analyzed high sample components and low-concentration pesticides utlizing a variety of instrumentations.</p>
                <p>Coordinated with lab technitians to meet deadlines</p>
                <p>Performed method and system maintenance on schedule or if issues occured with either.</p>
            </List.Item>
            </Container>
        </section>
       
    )
}

export default Resume