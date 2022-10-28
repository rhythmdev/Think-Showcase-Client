import React from "react";

const Blog = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center text-secondary my-5">
        Think Showcase Blog.....
      </h3>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col">
          <div className="card h-100" style={{}}>
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--RRy8OjMY--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/90it10pz1iyto951oilj.png"
              className="card-img-top img-thumbnail"
              alt="..."
              style={{ height: "212px" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fs-4">What is Cors?</h5>
              <p className="card-tex fw-semibold">
                CORS is a node.js package to deliver a Connect/Express
                middleware which can be used to activate CORS with various
                options. Cross-Origin Resource Sharing (CORS) is a mechanism for
                soliciting resources from another area. Under the hood, Nest
                takes advantage of the Express package. This package provides
                various options that you can customise according to your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://developers.google.com/learn/images/firebase/firebase-hero.jpg"
              className="card-img-top img-thumbnail"
              alt="..."
              style={{ height: "212px" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fs-4">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h5>
              <p className="card-text fw-semibold">
                Google Firebase is an application development platform that
                allows me to create iOS, Android, and Web apps.Google Firebase
                offers many features which present it as the main developer tool
                for the web and mobile applications. This reduces workload and
                time to develop. And it's an excellent prototyping tool.
                Firebase is simple, lightweight, friendly and well-known.Without
                writing boring code in my backend I can use it easily. I can
                easily make google, github, twitter, facebook, google play games
                etc authentication system.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://miro.medium.com/max/1400/1*Y2ihnhF56Aow88dy5IQZAA.jpeg"
              className="card-img-top img-thumbnail"
              alt="..."
              style={{ height: "212px" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fs-4">
                How does the private route work?
              </h5>
              <p className="card-text fw-semibold">
                Private routes within React Router (also known as protected
                routes) require an authorized user to visit a route. As a
                result, if a user is not permitted to access a particular page,
                they cannot access it. The most common example is authenticated
                in a React app where a user can only access protected pages when
                they are authorized. Authorization is not just about
                authentication. For instance, a user can also have roles and
                permissions that give a user access to specific areas within the
                application.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://coursetrack.in/wp-content/uploads/2019/12/Node-JS-Development-Training.png"
              className="card-img-top img-thumbnail"
              alt="..."
              style={{ height: "212px" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fs-4">
                What is Node? How does Node work?
              </h5>
              <p className="card-text fw-semibold">
                Node.js is a cross-platform open-source JavaScript runtime
                environment and a library to run web applications outside the
                client's browser. Ryan Dahl developed it in 2009, and the final
                version, version 19, was released in October 2022. Developers
                use Node.js to create server-side web applications, and it's
                great for data-intensive applications because it uses an
                asynchronous, event-oriented model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
