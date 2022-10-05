import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { useState, useEffect } from "react";
import DynamicFormGroup from "./components/DynamicFormGroup";
import axios from "axios";
import DataTable from "react-data-table-component";

export default function Add() {
  const [users, setusers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("getAll", { headers: { "Access-Control-Allow-Origin": "*" } })
      .then((res) => {
        console.log(res.data.users);
        setusers(res.data.users);
      });
  });

  const inputs = [
    { name: "name", text: "Name", type: "text" },
    { name: "surname", text: "Surname", type: "text" },
    { name: "phone", text: "Phone", type: "number" },
    { name: "email", text: "E-mail", type: "email" },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Surname",
      selector: (row) => row.surname,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Button color="warning" onClick={() => setShowModal(!showModal)}>
            Güncelle
          </Button>
          <Button onClick={onClickDelete} color="danger">
            Sil
          </Button>
        </>
      ),
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios.post("create", formData).then((res) => {
      console.log(res);
      setusers((users) => [...users, res.data.user]);
    });
  };

  const updateHandler = (e) => {
    axios.post("update/{id}", {
      users,
    });
  };

  const onClickDelete = (e) => {
    e.preventDefault();
    axios.delete("delete/{id}");
  };

  return (
    <div>
      <Container>
        <h1>User Add</h1>
        <Form onSubmit={(e) => submitHandler(e)}>
          {inputs.map((input, idx) => (
            <DynamicFormGroup
              key={idx}
              name={input.name}
              text={input.text}
              type={input.type}
            />
          ))}

          <Button type="submit" color="primary">
            Kaydet
          </Button>
        </Form>
        <div className="mt-5">
          <h1>User List</h1>
          <DataTable columns={columns} data={users} />
        </div>
        <div>
          <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)}>
            <ModalHeader toggle={() => setShowModal(!showModal)}>
              Modal title
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={(e) => updateHandler(e)}>
                {inputs.map((input, idx) => (
                  <DynamicFormGroup
                    key={idx}
                    name={input.name}
                    text={input.text}
                    type={input.type}
                  />
                ))}

                <Button type="submit" color="primary">
                  Kaydet
                </Button>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => setShowModal(!showModal)}>
                Do Something
              </Button>{" "}
              <Button
                color="secondary"
                onClick={() => setShowModal(!showModal)}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </Container>
    </div>
  );
}
