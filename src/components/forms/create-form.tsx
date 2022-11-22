import { useForm } from "hooks/useForm";
import { useLocation } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { FormRoutes } from "routes/paths";
import { FormInput } from "shared/form/input";
import { FormEndPoints } from "utils/apis/endpoints";

export const CreateEditFormComponent = () => {
  const { state } = useLocation();

  const { onSubmit, onChange, isSubmitting, values } = useForm({
    url: state
      ? FormEndPoints.editForm(state.id)
      : FormEndPoints.createOrGetForms(),
    initialValues: {
      name: "",
      visible: true,
      priority: 1,
      questions: [],
    },
    redirect: true,
    redirectUrl: FormRoutes.List,
    state,
    isUpdateData: !!state,
  });
  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        name="name"
        required
        label="Form title"
        wrapperClass="mb-3"
        onChange={onChange}
        value={values.name}
      />
      <FormInput
        name="priority"
        required
        label="Priority"
        wrapperClass="mb-3"
        type="number"
        min={1}
        onChange={onChange}
        value={values.priority}
      />
      <FormGroup check className="mb-3">
        <Input
          type="checkbox"
          name="visible"
          onChange={onChange}
          checked={values.visible}
        />
        <Label check>Visible</Label>
      </FormGroup>
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </Form>
  );
};
