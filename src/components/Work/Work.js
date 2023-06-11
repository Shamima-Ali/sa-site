import React from 'react'
import './Work.css'
import { Card } from 'react-bootstrap'
import gamePic from './gamePic.png'
import sun from './sun.jpeg'
import appPic from './App-pic.png'
import micPic from './microphone-pic.png'

const Work = () => {
    return (
        <>    
        <Card>
            <Card.Img variant="top" src={micPic} style={{ width: '10rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href="https://github.com/Shamima-Ali/ai-voice" className="card-title">AI Voice Assistant</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Created in Fall 2022
                </p>
                <p>
                    This program was created using the neuralintents library in pypi that is used to control a todo list through voice commands.
                </p>
                <p>
                    What it does:
                    <ul>- user provides a voice command </ul>
                    <ul>- software creates, removes and reads items from a todo list</ul>
                </p> 

                <p>
                    What I learned creating this app:
                    <ul>- working with the neuralintents</ul>
                </p>
            </Card.Text>
            </Card.Body>

            </Card>
        <Card>
            <Card.Img variant="top" src={appPic} style={{ width: '13rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href="https://devpost.com/software/beach-please-2cyhd4?ref_content=my-projects-tab&ref_feature=my_projects" className="card-title">Beach Please</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Created during the AhoyHacks hackathon from 13-15 May 2022
                </p>
                <p>
                    This app was created using React as the front and python flask as the server. The server talks to an 
                    external API to retrieve recorded ocean tide heights which are displayed in the form of a chart.
                </p>
                <p>
                    What it does:
                    <ul>- user selects a location </ul>
                    <ul>- based on the selection, a chart showing recent ocean tide heights are displayed</ul>
                </p> 

                <p>
                    What I learned creating this app:
                    <ul>- working with python-flask</ul>
                </p>
            </Card.Text>
            </Card.Body>

            </Card>
            <Card>
            <Card.Img variant="top" src={sun} style={{ width: '13rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href="https://shamima-ali.github.io/reminder-app/" className="card-title">Reminder App</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Created in Dec 202 and published in May 2022
                </p>
                <p>
                    This app was created using Angular. I learned a bit of Angular during my volunteer work as a Software Dev 
                    in Paradigm Boring at Memorial University. 
                    Being a skincare enthusiast, I got the idea of this app during a hackathon but was unable to 
                    finish on time as I was not very familiar with Angular. I then took it up as a challenge to learn Angular well 
                    enough to finish this project.
                </p>
                <p>
                    What it does:
                    <ul>- tracks a user's location and checks if they are at "home" (their home coordinates are saved in the mock db) </ul>
                    <ul>- if the user is outside, starts a timer</ul>
                    <ul>- once a certain amount of time has passed, it sends a reminder to apply sunscreen</ul>
                    <ul>- if the user is detected to be at home, the reminders are automatically turned off</ul>
                </p> 

                <p>
                    What I learned creating this app:
                    <ul>- creating a mock database server</ul>
                    <ul>- writing the logic for sending the reminders</ul>
                    <ul>- the use of Services in Angular</ul>
                    <ul>- Typescript language</ul>
                </p>
            </Card.Text>
            </Card.Body>

            </Card>

            <Card>

            <Card.Img variant="top" src={gamePic} style={{ width: '12rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href="https://shamima.itch.io/game-0" className="card-title">ECE 5010 Group Project</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Created in collaboration with two class members in April 2021.
                </p>
                <p>
                    Our goal was to get an A in the course. Given my experience with Unity from the previous hackathon project, 
                    I lead the team and provided resources and guidance on what needed to be done to achieve our 
                    goal successfully. We got an 89 on the course.
                </p>
                <p>
                    What I learned during the four-month course project:
                    <ul>- discussing ideas with team members </ul>
                    <ul>- creating a feasible schedule and sticking to it</ul>
                    <ul>- helping out when someone is stuck on a problem</ul>
                </p> 
            </Card.Text>
            </Card.Body>

            </Card>

            <Card >
                <Card.Img variant="top" src={gamePic} style={{ width: '12rem', marginLeft: 'auto', marginRight: 'auto' }} />
                <Card.Body>
                    <Card.Title ><a href="https://shamima.itch.io/mlh-game" className="card-title">Unity Game</a></Card.Title>
                    <Card.Text className="card-text">
                        <p>
                            Created during the Major League Hackathon in Jan 2021. 
                        </p>
                        <p>
                            I wanted to challenge myself and try something new so I decided to create a game using Unity.
                            I chose Unity because it is a coding-based game engine that uses C-sharp.
                        </p>
                        <p>
                            What I learned during the three-day Hackathon:
                            <ul>- figure out what I need to know to get started</ul>
                            <ul>- learn and apply new concepts under a timed constraint, for eg, the Update function</ul>
                            <ul>- use my knowledge in C++ to understand C-sharp</ul>
                            <ul>- apply clean programming rule aka the Single Responsibility Principle to functions</ul>
                        </p> 
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
        
    )
}

export default Work
