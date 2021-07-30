import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
    <div className="jumbotron">
        <h1 className="display-4">
            Create & Blogify it
        </h1>
        <main>
            Special contents needs to be shared... 
            <br />
            Do you have any special content ? Go ahead then !
            <br /> Interested in reading wonderful Blogs? Yeah, welcome!  
         <br></br>   <br /> Create, Read & Blogify.
        </main>
        <hr className="my-4 gold-hr" />
        <p>So, click below and dive into in!</p>
        <Link
            className="btn btn-outline-primary btn-lg"
            to="/posts"
            role="button"
        >
            Show Blog Posts
        </Link>
    </div>
);

export default Landing;
