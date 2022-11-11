import React, { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog"
  }, [])
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl text-bold">
          Q.Difference between SQL and NoSQL
        </h2>
        <p className="text-xl">
          Answer: SQL DB:- RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)These
          databases have fixed or static or predefined schema.These databases
          are not suited for hierarchical data storage.Vertically Scalable.{" "}
          <br /> NoSQL DB: Non-relational or distributed database system.These
          databases are best suited for hierarchical data storage.These
          databases are not so good for complex queries.Horizontally scalable
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl text-bold">
          Q.What is JWT, and how does it work?
        </h2>
        <p className="text-xl">
          Answer: JSON Web Token (JWT) is an open standard (RFC 7519) that
          defines a compact and self-contained way for securely transmitting
          information between parties as a JSON object. This information can be
          verified and trusted because it is digitally signed.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl text-bold">
          Q.What is the difference between javascript and NodeJS??
        </h2>
        <p className="text-xl">
          Answer: javascript: Javascript is a simple object-oriented programming
          language for building interactive HTML pages. JavaScript is also
          commonly used in the development of games and mobile applications. The
          program can only be executed and run in an internet browser because it
          is interpreted as scripting. To run and execute the code outside the
          browser, we can utilize Node.js.It is an open-source framework that is
          flexible, fast, and lightweight.Cross-compilation is possible. <br />
          Node Js: For executing JavaScript on the server, Node.js is a bridge,
          open-source Js runtime environment. JavaScript code can now execute
          outside of the browser, thanks to Node.js. Node.js has many components
          and is primarily used for web development. It may run on various
          operating systems, including Windows, Linux, and Mac OS. It provides a
          cross-platform runtime environment for developing highly scalable
          server-side JavaScript applications with event-driven, non-blocking
          (asynchronous) I/O. JS is an MIT-licensed accessible framework. It is
          a lightweight framework with only the most essential modules. Other
          components may be added based on the demands of the application.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl text-bold">
          Q.How does NodeJS handle multiple requests at the same time?
        </h2>
        <p className="text-xl">
          Answer:NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
