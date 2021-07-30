# Blogify

A Full-stack blog application implemented in MERN Stack with User authentication and social login through Google accounts.

## Getting Started

-   Fork this repo and run the `git clone <forked repo>` command from your terminal/bash
-   Cd into the directories and `npm install`
-   Create a `.env` file in the root directory and store the following:
    -   MONGO_URI=Insert the correct connection URL for your MongoDB database
    -   REACT_APP_GOOGLE_CLIENT_ID=Insert the valid google client id

-   Run the server on PORT 5000
-   npm start/yarn start

You can obtain the MONGO_URI after create a collectoin on [mongodb atlas](https://www.mongodb.com/cloud/atlas). For the GOOGLE_CLIENT_ID, you will need to go through the Google developer console accounts page. 

## Demo

Here are screenshots of the of the woking application

<p align="center">
    <span align="center">Landing page</span>
 <img alt="login page" src="https://i.ibb.co/W6j3w3h/Screenshot-436.png" width="534" height="300" />
 <br/> 
 <img src="https://i.ibb.co/J3F9239/Screenshot-440.png" alt="home page" width="534" height="300" />
  <br/> 
 <img src="https://i.ibb.co/bspb3sx/Screenshot-433.png" alt="rich editor" width="534" height="300" />
   <br/> 
  <img src="https://i.ibb.co/dKVYsHK/Screenshot-435.png" alt="rich editor" width="534" height="300" />

 <br/> 
 <br/> 
  <img alt="mobile mockup" src="https://i.ibb.co/h7f989W/Screenshot-438.png" width="200" height="356"/> &emsp;
  <img alt="mobile mockup 2" src="https://i.ibb.co/HqJCvq8/Screenshot-439.png" height="356" width="200" />
  <br/>
  
>>>>>>> 20bd9d731be4c0df218870306b9dea2884c3e6c5
</p>

## Info

-   This is a blogging platform with user authentication and authorization. There is also a social login option, to login using your Twitter or Google accounts. The blog posts       are displayed in the reverse chronological order by default.
 
-   It is a blog app that lets users read the existing blog posts without logging in, and lets them share their thoughts using the anonymous comment section.

-   In order to write a new blog post, the user has to login using one of the social media login options provided. The react-social-login package is being used to provide the       user authentication and authorization.
   
-   the Mongodb Atlas's cloud service is used for the database service. 
  
-   There is no exploitation of data, as the app only requires access to your accounts to fetch your unique ID for authentication/authorization purposes, and no personal             details(except your registred user name on the social account) is used by the application.

-   The frontend of the app is built using React and I have used Bootstrap classes for styling the compnents in addition to my local CSS styles.
  
-   Each comment has a unique jdenticon icon to represent the user who commented anonymously

## Technologies Used

Some of the technologies used in the development of this web application are as follow:

-   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): It provides a free cloud service to store MongoDB collections.
-   [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [Node.js](https://nodejs.org/en/): A runtime environment to help build fast server applications using JS.
-   [Express.js](https://expressjs.com/): A popular Node.js framework to build scalable server-side for web applications.
-   [Mongoose](https://mongoosejs.com/): An ODM(Object Data Modelling)library for MongoDB and Node.js
-   [Heroku](http://heroku.com/): A platform(PaaS) to deploy full stack web applications for free.
-   [JSON Web Tokens or JWTs](https://jwt.io/): A standard to securely authenticate HTTP requests
-   [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/): A popular framework for building responsive, mobile-first sites.

### Responsive Design

The Bootstrap classes allowed for the design of the app to become a responsive onw, without many custom CSS media queries. The app design is minimal by design, and the emphasis is laid on the blog posts itself, rather than the design of the app's compnents. The app also has PWA support due to React's ability to activate service workers to cache the required data, as set by the developer. It is not an ideal type of app structure to facilitate the PWA design, but it can work to cache specific blog posts incase it was already accessed beforehand.


### Handling user authentication and user authorization

I initially intended on using the [authentication token strategy](http://www.passportjs.org/packages/passport-auth-token/) to authenticate users, but that process of authentication seemed to be a little more cumbersome for the final user. This is why the social logins was the next solution to try and implement using the [passport-google-oauth](http://www.passportjs.org/packages/passport-google-oauth2/) strategies. The server side of the implementation involves obtaining a JWT from the client, based on the unique IDs assigned by either Google and processing it to validate the user session or revoke it. The clint side implementation involves displaying the correct social login buttons using [react-google-login](https://www.npmjs.com/package/react-google-login) . 


### Rich Editor/Markdown Editor

Although it may seem obvious that the editor used in a blogging platform needs to support multiple text editing options, it was a little challenging to find the appropriate solution to fit the needs of the current project. There were many WYSIWYG editors which provided sufficient documentation too, but in the end, the most optimal solution to the issue was to use the [CKeditor rich HTML editor](https://ckeditor.com/ckeditor-5/)'s React component implementation, with a custom toolbar configuration. The other options included [react-markdown-editor-lite](https://www.npmjs.com/package/react-markdown-editor-lite) and the [react-draft-wysiwyg](https://www.npmjs.com/package/react-draft-wysiwyg)


### Dealing with an anonymous comment section

The choice to make the comment section anonymous was a deliberate design choice, as it makes it easier to let users engage with the application without much hassle. But the downside to this is that the comment section can seem dull/artificial, without a user name or photo associated with the comment. To overcome this, I have included a unique [Jdenticon](https://jdenticon.com/) or user icon, for every comment made under the blog post. The comments are displayed in reverse chronological order and will always have a unique icon associated with it! The other issue with the anonymous comments section, which became apparent after the initial build being pushed to production, was that users now used language that was NSFW.  The easiest solution is to restrict only authenticated users to comment, along with their public social media name. But trolls with a fake account can easily bypass this. Hence it became necessary to censor certain words from the posted comments using \* symbols. This was accomplised using the package [bad-words](https://www.npmjs.com/package/bad-words) package to censor NSFW words unconditionally. There is scope for improvement in terms of implementing a custom profanity filter, but that seemed to be overkill for the task at hand. It is not my intention to hinder anybody's freedom of speech, but a reactionary decision against a few bad actors, in an effort to maintain the application's presentability.

## Potential Improvements

-   A UX refactor.
-   Dashboard implementation for all registered users.
-   More social login options including the likes of Github, Facebook, Amazon or Apple.
-   Fuzzy Search implementation.
-   Integrations with popular blogging platforms like Medium or dev.to, to import already published articles.
-   A system to 'like' or upvote potentially useful articles.

Any more suggestions are always welcome.

## Author
-    My website : [My website](https://git-077-rvraj.github.io/Ravi/final.html)
-    Github : [@git-077-Rvraj]
-    Linkedin : [Ravi Raj](https://www.linkedin.com/in/ravi-raj-765bba1b7/)
-    Email : rvraj.0777@gmail.com



