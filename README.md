# Guest Greeter

## Description
This application was designed to make custom greeting templates for guests staying at a hotel or another business of the same sort

## Installation and Usage 
Upon cloning the code to a local repository, run npm install from the command line to install the dependancies. Once they are installed, you can run
npm start from the command line to start the applicaitons server. You can then visit http://localhost:3001/ in the browser to use the application

## Design Overview
I used an express server and REST APIs as a back-end to connect the JSON files to front-end Javascript and the HTML page. The overall design is simple,
as is demonstrated by the simple user interface and CSS (I'll admit my lack of a background in graphic design lends my applications to looking a little bit 1999).
I put all of the front end files in a public directory, the API routes in a controllers directory, and the JSON files in a data directory to keep all of the code
separate and easy to read. The front-end Javascript is broken into 3 separate files to make the code easier to read and understand, and to keep different functionality
separated. The code is heavily commented so that other developers can see clearly what each function is for and what it does. The design was meant to be simple but also
built to make it easier to expand upon by separating the different components. The choice to make this application with a functioning front and back end was meant so that
the code may be more easily expanded on later, and to demonstrate a variety of coding proficiencies. 

My process for verifying the correctness of my program was done with a lot of console-logging and running every piece of code as I wrote it, to ensure what I had written
wasn't broken by the time I ran the application. I tend to write a function and run it immediately to check it for errors before moving on, and leaving console.logs in until 
I am satisfied with the finished MVP so that I can see just what everything is doing in the background. I don't like to write a ton of code, and then run it only to find a ton 
of bugs and as a result hours of headaches going back in time trying to correct everything. 

## Technologies Used
* Javascript
* NodeJS
* CSS
* HTML
* Express
* REST APIs
* MomentJS

This program is built primarily with Javascript, which is the main programming language I am proficient in and my favorite language to write in. I wrote in Javascript because,
although I am excited to learn other programming languages, it is the one I was trained in in my coding bootcamp. I wrote my own CSS (surely not obvious) because I enjoy doing so,
and though I definitely need to consult a graphic designer the next time I built an applicaiton I really love writing the CSS for a page and seeing it come to life. I used and Express 
server because it pairs great with Node, which in turn pairs amazingly with Javascript for what I imagine to be infinite possibilities. 

## What I Didn't Get To (Future Development)
I can think of two main things right away that I would add to this project given more time, and given it was meant to be a larger application. One, I have already eluded too above which
is spending more time with the style and user interface. I would like to spend more time with this not only because it is enjoyable, but because the user experience is top of the line and 
if the users aren't interested in, wowed by, or worse yet upset with the experience with an application, they aren't likely to come back. The second thing that comes to mind right away is
setting up a "real" back-end with MongoDB or MySQL, to eliminate the need to store so much data into a JSON file, which can get out of hand quickly. The last thing I would definitely add 
with more time is incredibly important, though it was last on my list: testing. We learned to use Jest in our bootcamp, and that is is an important part of writing clean and maintainable code. 
Aside from my 1999 style choice, it is definitely the thing I was most keenly aware of needing to update if the application were to undergo future development. The last thing I can think of
right away I would spend a little more time with is Javascripts native Date object and using it to get the time right instead of using momentjs. 

## Contributing
Made by Samuel Varney, with starter files from an 'annoymous' source.
