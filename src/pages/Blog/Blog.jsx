import useTitle from "../../hook/useTitle";

const Blog = () => {
  useTitle("Blog");

  return (
    <div className="p-12">
      <div className="my-5">
        <h1 className="font-bold text-xl">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p className="mt-2 font-semibold text-lg">
          <span className=" underline me-3 font-bold">Ans:</span>
          An access token is a credential used to authorize and access protected
          resources, while a refresh token is used to obtain a new access token
          when the current one expires.{" "}
        </p>
      </div>

      <div className="my-5">
        <h1 className="font-bold text-xl">
          2. Compare SQL and NoSQL databases?
        </h1>
        <p className="mt-2 font-semibold text-lg">
          <span className="underline me-3 font-bold">Ans:</span>
          SQL databases are relational, with structured schemas, providing ACID
          transactions, while NoSQL databases are non-relational, with flexible
          schemas, offering horizontal scalability and better performance for
          large-scale distributed systems.
        </p>
      </div>

      <div className="my-5">
        <h1 className="font-bold text-xl">
          3. What is express js? What is Nest JS?
        </h1>
        <p className="mt-2 font-semibold text-lg">
          <span className="underline me-3 font-bold">Ans:</span>Express.js is a
          minimalist web framework for Node.js, providing a simple and flexible
          approach for building web applications and APIs.
          <br />
          Nest.js is a progressive Node.js framework built on top of Express.js,
          leveraging TypeScript and decorators to create scalable and modular
          applications following the MVC architectural pattern.
        </p>
      </div>

      <div className="my-5">
        <h1 className="font-bold text-xl">
          4. What is MongoDB aggregate and how does it work?
        </h1>
        <p className="mt-2 font-semibold text-lg">
          <span className=" underline me-3 font-bold">Ans:</span>MongoDB
          aggregate is a powerful method for performing advanced data processing
          and analysis in MongoDB.
        </p>
      </div>
    </div>
  );
};

export default Blog;
