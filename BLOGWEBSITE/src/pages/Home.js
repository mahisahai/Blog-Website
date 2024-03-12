import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Home.module.css";

const Home = () => {
  const blogs = useSelector((state) => state.blogs.blogs);

  return (
    <div className="container">
      <h2 className="text-center mb-4" style={{ color: "green" }}>
        Welcome To Blog Assignment
      </h2>

      <div className="row justify-content-center">
        {blogs.map((blog, index) => (
          <div className="col-lg-6 mb-4" key={blog.id}>
            <Card
              bg="white" // Change the background color to white
              text="black" // Change the text color to black
              className="h-100"
            >
              <Card.Header
                style={{
                  backgroundColor: "#3498db",
                  color: "red",
                }}
              >
                Blog {index + 1}
              </Card.Header>
              <Link
                to={`/blog-details/${blog.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  textAlign: "center",
                }}
              >
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
