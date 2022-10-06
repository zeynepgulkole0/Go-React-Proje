import { FormGroup, Input, Label } from "reactstrap";

const DynamicFormGroup = (props) => {
  const { name, text, type, placeholder } = props;

  return (
    <FormGroup>
      <Label for={name}>{text}</Label>
      <Input id={name} name={name} type={type} placeholder={text} />
    </FormGroup>
  );
};

export default DynamicFormGroup;
