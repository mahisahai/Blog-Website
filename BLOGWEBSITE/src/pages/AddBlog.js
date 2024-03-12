import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addBlog } from "../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const AddPage = () => {
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      const id = uuid();
      const title = event.target.title.value;
      const category = event.target.category.value;
      const description = event.target.description.value;

      dispatch(addBlog({ id, title, category, description }));
      // Redirect to the home page
      navigate("/");
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          border="primary"
          text="dark"
          style={{
            width: "70rem",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          <Card.Header>
            <h2
              style={{
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "green",
              }}
            >
              Add Blog
            </h2>
          </Card.Header>

          <Card.Body>
            <div
              className="mx-auto col-12 col-lg-12"
              style={{
                width: "70rem",
                marginBottom: "25px",
              }}
            >
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="10" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Title"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a title
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="10" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Category"
                      autoComplete="off"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a category
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="10" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      type="text"
                      placeholder="Describe your experience..."
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a description
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button type="submit">Submit</Button>
                <Button
                  type="button"
                  bg="light"
                  variant="danger"
                  onClick={() => navigate("/")}
                  style={{
                    justifyContent: "center",
                    position: "relative",
                    top: "50%",
                    left: "10%",
                  }}
                >
                  BACK
                </Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AddPage;
