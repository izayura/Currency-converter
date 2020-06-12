# Currency-converter
## Index

- [Introduction](#introduction)
- [Project description](#project-description)
- [User definition](#user-definition)
- [User stories](#user-stories)
- [Low fidelity Prototype](#low-fidelity-prototype)
- [Documentation](#documentation)
- [Additional features](#Additional-features)

## Introduction
This project is perform by **Gloria Ramirez Robles** as a code challenge to evaluate her knowledge and way of working with Javascript.
The time allotted for this project was one week from the date of the first commit to this repository.

## Project description
#### Main description: 
Create a web app that consume the free currency API provided (https://exchangeratesapi.io/) to convert MXN currency to dollar, euro and Canadian dollar (CAD). 

#### MVP (Minimum Viable Product)
- The user can edit an entry to set MXN value
- The user can see the other 3 currencies converted from MXN entry
- When the MXN entry values changes, the other 3 currencies are calculated automatically 
- The challenge code is in a GitHub repository
- The required technologies are JavaScript, CSS, HTML

#### Points of evaluation
- You have a week to finish it, starting from the first commit
- Good practices (Clean code, auto-descriptive code, indentation etc.)
- Web design (style, simplicity, responsive etc.)
- Git flow
- Semantic (HTML)

#### Extras
- Object orientated programming 
- Principles of software development like SOLID or DRY
- Flexbox, Bootstrap or any other CSS tool (Correct use of the tool)

## User definition
The user needs a web app where enters some MXN value and convert it in 3 different currencies: USD, EUR and CAD.

## User stories
#### User Story 1
The user can enter to the interface and edit an input to insert a MXN value.

**DoD**
- Add API to project
- Create interface
- Input to write MXN value
- Button to send input value
- Functionality to store the input value in .js

#### User Story 2
The user can see 3 different currencies converted from the MXN value when the button is clicked

**DoD**
- Function to convert MXN in USD
- Function to convert MXN in EUR
- Function to convert MXN in CAD
- Currencies will be displayed in Interface when button is clicked

#### User Story 3
The user can see automatically the different currencies when edits the input

**DoD**
- Function to show automatically the currencies converted
- Delete elements not required

#### User Story 4
The user needs an interface with a web design that is pleasing to the eye and that is displayed correctly on different devices.

**DoD**
- Add different values using the Grid System to make design responsive.
- Use the tools offered by Bootstrap to make a better design
- Add flags alluding to currencies

## Low fidelity Prototype
![Low Fidelity Prototype](https://i.ibb.co/KWLZT9m/IMG-20200605-161839.jpg)

## Documentation
#### June 5
Before starting to write code, I had to do some planning.

I created the repository in GitHub and then I wrote the README to define Introduction, Project Description, User Definition and the User Stories with theirs DoD.

To help with the work flow I made a Kanban Board next to my workplace and drew a low fidelity Prototype to get an idea of how to arrange the elements in the project.

#### June 8
During this day, the priority was to explore the API that is used on the project and start manipulating its data to show what I need.

Due to the API used, currencies are automatically updated according to the exchange rate without the need to update the code.

I added some changes to the HTML structure to get and display the data I require on the project.

Following the user stories, I added a button with the functionality to send the MXN currency written in the input and display the USD, EUR and CAD values in the interface. The same function works to clean the input.

In the next iteration I plan to use Bootstrap to add the web design and visualize in a better way the results before I start working in User Story 3.

#### June 9
I have never worked with Bootstrap so this was the perfect opportunity to take a look at the documentation and start using it.

I added a simple Grid System to make my interface responsive, and some other styles to visualize what I'm doing.

I also finished the User Story 3 adding an oninput with function doFetch() inside the input "MXN" to display automatically the currencies converted, so the button used in User Stories 1 and 2 was deleted.

Inside doFetch() I used toFixed() to round the displayed currencies to decimal places.

In the next iteration I plan to continue working on web design to 
bring it closer to what I proposed in my prototype, so I'm adding a new User Story focused only on web design.

#### June 10
This day I worked on improve the web design and make some adjustments to the HTML structure.

The web design is responsive and with simple and solid colors. I added a collapsable header to describe the web app. I also added some .png images to show the currencies flags. The file style.css was unnecessary so I deleted it. Finally, I deployed the project using GitHub Pages.

I will ask for feedback to add some elements and improvements in the design, but at the moment I am satisfied with the result.

The last iteration before submitting the project will be entirely to improve details according to the feedback obtained.

#### June 11
Yesterday I showed the web app to some friends and the feedback was good, only I had to clarify some points obvious for me and I had to update the README to let clear all the elements in the project.

Also I added a footer to link the web app with the repository on GitHub.

## Additional features
#### Kanban Board
##### After June 5
![Kanban Board after June 5](https://i.ibb.co/Rgt4vMY/IMG-20200605-160906.jpg)
##### After June 8
![Kanban Board after June 8](https://i.ibb.co/1d3Vhf0/IMG-20200610-180613.jpg)
##### After June 9
![Kanban Board after June 9](https://i.ibb.co/19QBkjs/IMG-20200610-180236.jpg)
##### After June 10
![Kanban Board after June 10](https://i.ibb.co/vxXHdcS/IMG-20200610-175749.jpg)