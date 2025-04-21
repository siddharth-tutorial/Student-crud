import React, { useState } from "react";
import Header from "./Header";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
function Student() {
  const [students, setStudent] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addStudent = (e) => {
    e.preventDefault();

    if (!name || !lastname || !age || !course || !gender) {
      alert("Please fill out all fields.");
      return;
    }
    // new student
    const newStudent = { name, lastname, age, gender, course };
    setStudent([...students, newStudent]);
    setName("");
    setLastName("");
    setAge("");
    setCourse("");
    setGender("");
  };
  console.log(students);

  // delete button
  const deleteButton = (index) => {
    const updatedStudent = students.filter(
      (student, editIndex) => editIndex !== index
    );
    setStudent(updatedStudent);
    console.log(updatedStudent);
  };

  // edit button
  const editButton = (index) => {
    setEditIndex(index);
    setName(students[index].name);
    setLastName(students[index].lastname);
    setAge(students[index].age);
    setCourse(students[index].course);
    setGender(students[index].gender);
  };

  // save buttion
  const saveEdit = () => {
    const updatedStudent = [...students];
    updatedStudent[editIndex] = { name, lastname, age, gender, course };
    setStudent(updatedStudent);
    setEditIndex(null);
    setName("");
    setLastName("");
    setAge("");
    setCourse("");
    setGender("");
  };

  // cancel button
  const cancelEdit = () => {};

  return (
    <div>
      <Header />
      {/* student */}
      <header className="bg-primary text-white text-center py-4">
      <h1 className=" text-3xl  font-bold ">
        Student validation form in crud
      </h1>
      <p className="font-light">Add, Edit, and Delete Students</p>
      </header>
      <Container className="my-5">
        <Form className="form-floating shadow p-4 rounded-lg bg-white" onSubmit={addStudent}>
          <Row>
            <Col xs={12} sm={6} md={4}>
            <Form.Group>
              <Form.Label className="font-bold">Name: </Form.Label>
                <Form.Control type="text" value={name} placeholder="Enter Student Name" onChange={(e)=>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
             </Col>
              
             <Col xs={12} sm={6} md={4}>
            <Form.Group>
              <Form.Label className="font-bold">Last Name: </Form.Label>
                <Form.Control type="text" value={lastname} placeholder="Enter Last Name" onChange={(e)=>setLastName(e.target.value)}>
                </Form.Control>
            </Form.Group>
             </Col>

             <Col xs={12} sm={6} md={4}>
              <Form.Group>
                <Form.Label className="font-weight-bold">Course</Form.Label>
                <Form.Control
                  as="select"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="">Select Course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Android Development">Android Development</option>
                  <option value="Flutter Development">Flutter Development</option>
                  <option value="Game Development">Game Development</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <Form.Group>
                <Form.Label className="font-weight-bold">Age Range</Form.Label>
                <div>
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="0-20"
                    checked={age === "0-20"}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <label htmlFor="age1">0-20</label>
                  <input
                    type="radio"
                    id="age2"
                    value="20-40"
                    checked={age === "20-40"}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <label htmlFor="age2">20-40</label>
                  <input
                    type="radio"
                    id="age3"
                    value="40-60"
                    checked={age === "40-60"}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <label htmlFor="age3">40-60</label>
                  <input
                    type="radio"
                    id="age4"
                    value="60-100"
                    checked={age === "60-100"}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <label htmlFor="age4">60-100</label>
                </div>
              </Form.Group>
            </Col>

           <Col xs={12} sm={6} md={4}>
              <Form.Group>
                <Form.Label className="font-weight-bold">Gender</Form.Label>
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="other">Other</label>
                </div>
              </Form.Group>
            </Col>

            <Col xs={12} className="text-center mt-3">
              {editIndex !== null ? (
                <>
                  <Button onClick={saveEdit} variant="success" className="mr-2">
                    <FaCheckCircle /> Save
                  </Button>
                  <Button onClick={cancelEdit} variant="danger">
                    <MdCancel /> Cancel
                  </Button>
                </>
              ) : (
                <Button type="submit" variant="primary" size="lg">
                  Add Student
                </Button>
              )}
            </Col>
          </Row>
        </Form>
      </Container>

      <Container className="my-5">
        <h3 className="text-center font-weight-bold text-danger">Student List</h3>
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="text-uppercase">
                <td>{student.name}</td>
                <td>{student.lastname}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>{student.course}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => editButton(index)}
                    className="mr-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteButton(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Student;
