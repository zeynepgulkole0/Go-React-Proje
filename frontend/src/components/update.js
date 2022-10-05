import { useState } from "react";
import { Button, Input, Table } from "reactstrap";

import * as api from "../service";

export default function Update(props) {
  const { row, index, list } = props;

  const [name, setname] = useState(row.name);
  const [surname, setsurname] = useState(row.surname);
  const [phone, setphone] = useState(row.phone);
  const [email, setemail] = useState(row.email);

  const onClickUpdate = async () => {
    await api.post("/user/update/{id}" + row.id, {
      name,
      surname,
      phone,
      email,
    });
    list(true);
  };

  return (
    <Table bordered borderless hover responsive striped>
      <tbody>
        <tr key={index}>
          {/* <th scope="row">1</th> */}
          <td>{row.id}</td>
          <td>
            <Input
              onChange={(e) => setname(e.target.value)}
              value={name}
              type="text"
            />
          </td>
          <td>
            <Input
              onChange={(e) => setsurname(e.target.value)}
              value={surname}
              type="text"
            />
          </td>
          <td>
            <Input
              onChange={(e) => setphone(e.target.value)}
              value={phone}
              type="text"
            />
          </td>
          <td>
            <Input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="text"
            />
          </td>
          <td>
            <Button onClick={onClickUpdate}>Edit</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
