import useTitle from "../hooks/useTitle";

const Blog = () => {
  useTitle('Blog');
    return (
        <div className="py-28 px-10 -mt-20 bg-[#fddcd5] h-full">
             <div
        tabIndex={0}
        style={{borderRadius: 0}}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
      >
      <input type="checkbox" className="peer" />
        <div className="collapse-title text-2xl font-medium">
        What is an access token and refresh token? How do they work and where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p className="text-xl">A refresh token is a special token that is issued to you by a website or application after you successfully log in. It serves as a proof that you have already verified your identity. 
<br />
The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
<p>Refresh tokens work as part of an authentication system that involves multiple components, including the client-side (usually a web or mobile application) and the server-side (the backend or authentication server) <br />Refresh tokens can be stored in the clients local storage. However, this approach can be vulnerable to XSS attacks since JavaScript can access the contents of local storage.</p>

<p>When considering where to store access tokens, it is important to balance security and convenience. Using HTTP-only cookies is generally recommended for storing access tokens, as it provides a higher level of security compared to storing tokens in local storage or session storage, which can be vulnerable to XSS attacks.</p>
        </div>
      </div>
      <div
        style={{borderRadius: 0}}
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
      >
      <input type="checkbox" className="peer" />
        <div className="collapse-title text-2xl font-medium">
        Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p className="text-xl">SQL databases, also known as relational databases, organize data into structured tables with predefined schemas.
They follow a strict structure and use a fixed schema that defines the columns, data types, and relationships between tables.</p>
          <p className="text-xl">NoSQL databases, which stands for not only SQL, provide a flexible and scalable way to store and retrieve data.
They do not rely on fixed schemas and allow data to be stored in various formats like key-value pairs, documents, or graphs..</p>
        </div>
      </div>
      <div
        style={{borderRadius: 0}}
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
      >
      <input type="checkbox" className="peer" />
        <div className="collapse-title text-2xl font-medium">
        What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p className="text-xl">Express.js is a minimalistic and lightweight web framework for Node.js, which is a JavaScript runtime environment.
It provides a simple and flexible set of features for building web applications and APIs. <br /> <br />Nest.js is a full-featured, opinionated web framework for building scalable and maintainable server-side applications using TypeScript or JavaScript.
It is built on top of Express.js and leverages its features while adding its own abstractions and additional functionality.
          </p>
        </div>
      </div>
      <div
        style={{borderRadius: 0}}
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4"
      >
      <input type="checkbox" className="peer" />
        <div className="collapse-title text-2xl font-medium">
        What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p className="text-xl">In MongoDB, the aggregate function is a powerful tool that allows you to perform advanced data analysis and transformation operations on your data. It provides a way to process multiple documents within a collection and apply various stages of data manipulation to retrieve aggregated results.<br />
          By utilizing the aggregate function and its stages, you can perform complex queries and aggregations in MongoDB, making it a flexible tool for advanced data analysis and transformation operations on your data.
          </p>
        </div>
      </div>


        </div>
    );
};

export default Blog;