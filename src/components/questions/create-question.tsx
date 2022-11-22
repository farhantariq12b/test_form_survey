import { useForm } from "hooks/useForm";
import { useLocation, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { FormRoutes } from "routes/paths";
import { FormInput } from "shared/form/input";
import { FormEndPoints } from "utils/apis/endpoints";

export const CreateEditQuestionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();
  const { onSubmit, onChange, isSubmitting, values } = useForm({
    url: state
      ? FormEndPoints.editFormQuestion(state.id)
      : FormEndPoints.addOrGetFormQuestion(+(id as string)),
    initialValues: {
      question: "",
      visible: true,
      priority: 1,
      options: [],
    },
    redirect: true,
    redirectUrl: FormRoutes.Questions(+(id as string)),
    state,
    isUpdateData: !!state,
  });
  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        name="question"
        required
        label="Question"
        wrapperClass="mb-3"
        onChange={onChange}
        value={values.question}
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
