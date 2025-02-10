import React from 'react'
import './Work.css'
import { Card } from 'react-bootstrap'
import gamePic from './gamePic.png'
import sun from './sun.jpeg'
import appPic from './App-pic.png'
import micPic from './microphone-pic.png'
import trolleyPic from './Trolley-pic.png'
import elevPiv from './elevator-pic.png'
import k8s from './k8s.png'
import ws from './webserver.jpg'

const links = {
    WEBS: "https://github.com/Shamima-Ali/webwerver",
    ELEV: "https://github.com/Shamima-Ali/elevator-algorithm",
    AES: "http://54.210.94.102/",
    cloudinary: "https://cloudinary.com/ip/gr-sea-gg-brand-home-base?utm_source=google&utm_medium=search&utm_campaign=goog_selfserve_brand_wk22_replicate_core_branded_keyword&utm_term=1329&campaignid=18164753405&adgroupid=144188713167&keyword=cloudinary&device=c&matchtype=e&adposition=&gad=1&gclid=Cj0KCQjwoK2mBhDzARIsADGbjeo8c6NeNKg5StBBt8ZYFC6Lh0TwP7oPFJP0J6iwM8yvQ8HcxnoHi7caAtigEALw_wcB",
    AVA: "https://github.com/Shamima-Ali/ai-voice",
    neuralintents: "https://pypi.org/project/neuralintents/0.0.2/",
    BP: "https://devpost.com/software/beach-please-2cyhd4?ref_content=my-projects-tab&ref_feature=my_projects",
    RA: "https://shamima-ali.github.io/reminder-app/",
    ECE: "https://shamima.itch.io/game-0",
    MLH: "https://shamima.itch.io/mlh-game"
}

const Work = () => {
    return (
        <>  
            <Card>
            <Card.Img variant="top" src={ws} style={{ width: '16rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href={links.WEBS} className="card-title">Mini Web Server</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Created January 2025
                </p>
                <p>
                    I built a web server (I am calling it web werver) 
                    to serve a simple index.html file with two input fields that
                    multiplies values. I used C++ and added CGI scripting. This 
                    allows the server to serve the index.html file and process
                    data from the webpage (e.g., multiplying two numbers).
                    I made a blog post detailing the code behind the server:
                    <a href="https://codingprojects.substack.com/p/i-built-a-web-server">
                        Read on Substack
                    </a>
                </p>
                <p>
                    What it does:
                    <ul>- communicate with the client using TCP IPv4 connection </ul>
                    <ul>- serve multiple client requests </ul>
                    <ul>- displays an index.html page that has two user input fields </ul>
                    <ul>- multiplies the two user input values and displays the result </ul>
                </p> 
            </Card.Text>
            </Card.Body>
            </Card>
                
                
            <Card>
            <Card.Img variant="top" src={elevPiv} style={{ width: '13rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href={links.ELEV} className="card-title">Elevator Simulation Program</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Created in the Spring of 2023
                </p>
                <p>
                    This Java program is an implementation of the Producer Consumer problem in concurrency programming.
                    The program launches two elevator threads that picks up and drops off riders. The riders are generated 
                    by a riderController that creates riders at random intervals to random destinations. The riders that request a lift are placed 
                    in a buffer. This buffer is tracked by the elevator threads. If the buffers are empty, the elevator threads 
                    wait for the riderController to generate riders. After a rider(s) is generated, the riderController notifies the elevator threads. A synchronized() function
                    is used to achieve this functionality.
                </p>
                <p>
                    What it does:
                    <ul>- asks the user how long to run the simulation </ul>
                    <ul>- creates two elevator threads and one riderController thread that runs the simulation as described </ul>
                    <ul>- after the user-specfied time has elapsed, the simulation is stopped </ul>
                </p> 
            </Card.Text>
            </Card.Body>
            </Card>

            <Card>
            <Card.Img variant="top" src={trolleyPic} style={{ width: '13rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href={links.AES} className="card-title">An Ecommerce Site</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Created in the Spring of 2023
                </p>
                <p>
                    This app is created using the MERN stack, <a className='text-link'  href={links.cloudinary}>Cloudinary</a> to store images.
                    For deploying, I used an AWS EC2 instance and Nginx.
                </p>
                <p>
                    What it does:
                    <ul>- user can sign up or log in and log out </ul>
                    <ul>- user can add a product and view all of the products in the home page</ul>
                </p> 

                <p>
                    What I learned creating this app:
                    <ul>- user authentication</ul>
                    <ul>- uploading images to a cloud service </ul>
                    <ul>- creating and configuring an AWS EC2 instance</ul>
                    <ul>- configuring Nginx as a reverse proxy</ul>
                </p>
            </Card.Text>
            </Card.Body>
            </Card>

        <Card>
            <Card.Img variant="top" src={micPic} style={{ width: '10rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href={links.AVA} className="card-title">AI Voice Assistant</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Created in Fall 2022
                </p>
                <p>
                    This program was created using <a className='text-link' href={links.neuralintents}>the neuralintents library</a> that is used to control a todo list through voice commands.
                </p>
                <p>
                    What it does:
                    <ul>- user provides a voice command </ul>
                    <ul>- software creates, removes and reads items from a todo list</ul>
                </p> 

                <p>
                    What I learned creating this app:
                    <ul>- working with the neuralintents library</ul>
                </p>
            </Card.Text>
            </Card.Body>

            </Card>
        <Card>
            <Card.Img variant="top" src={appPic} style={{ width: '13rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href={links.BP} className="card-title">Beach Please</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Created during the AhoyHacks hackathon from 13-15 May 2022
                </p>
                <p>
                    This app was created using React as the frontend and python flask as the server. The server talks to an 
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
            <Card.Img variant="top" src={k8s} style={{ width: '13rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title><a href="https://www.netapp.com/cloud-services/k8s-kubernetes-solutions-innovations/" className="card-title">Kubernetes Master Class from NetApp</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Attended a Kubernetes Master Class hosted by NetApp in May 2022
                </p>
                <p>
                    An introductory Kubernetes class.
                </p>
                <p>
                    Through this, I learned about:
                    <ul>- stateful vs stateless applications </ul>
                    <ul>- Storage classes</ul>
                    <ul>- PersistentVolumeClaims</ul>
                    <ul>- Volume snapshot class</ul>
                    <ul>- Volume snapshot</ul>
                </p> 
            </Card.Text>
            </Card.Body>

            </Card>

            <Card>
            <Card.Img variant="top" src={sun} style={{ width: '13rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href={links.RA} className="card-title">Reminder App</a></Card.Title>
            <Card.Text className="card-text">
                <p>
                    Created in Dec 2019 and published in May 2022
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
                    <ul>- writing the logic for sending the reminders, i.e., monitoring user's location and time and sending reminders when 
                        a certain amount of time has passed
                    </ul>
                    <ul>- the use of Services in Angular</ul>
                    <ul>- Typescript language</ul>
                </p>
            </Card.Text>
            </Card.Body>

            </Card>

            <Card>

            <Card.Img variant="top" src={gamePic} style={{ width: '12rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <Card.Body>
            <Card.Title ><a href={links.ECE} className="card-title">ECE 5010 Group Project</a></Card.Title>
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
                    <Card.Title ><a href={links.MLH} className="card-title">Unity Game</a></Card.Title>
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
