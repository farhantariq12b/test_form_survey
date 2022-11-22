import { useForm } from "hooks/useForm";
import { useLocation, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { FormRoutes } from "routes/paths";
import { FormInput } from "shared/form/input";
import { FormEndPoints } from "utils/apis/endpoints";

export const CreateEditOptionComponent = () => {
  const { id, q_id } = useParams<{ id: string; q_id: string }>();
  const { state } = useLocation();
  const { onSubmit, onChange, isSubmitting, values } = useForm({
    url: state
      ? FormEndPoints.editQuestionOption(state.id)
      : FormEndPoints.addOrGetQuestionOptions(+(q_id as string)),
    initialValues: {
      name: "",
      visible: true,
      priority: 1,
    },
    redirect: true,
    redirectUrl: FormRoutes.Options(+(id as string), q_id as string),
    state,
    isUpdateData: !!state,
  });
  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        name="name"
        required
        label="Option Name"
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
