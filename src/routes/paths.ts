const Auth = {
  Login: "/auth/login",
  Register: "/auth/register",
};

const FormRoutes = {
  List: "/forms",
  CreateEdit: "/forms/create-edit-form",
  Questions: (formId: number) =>
    `/forms/:id/questions`.replace(":id", formId.toString()),
  CreateQuestions: (formId: number) =>
    `/forms/:id/create-edit-questions`.replace(":id", formId.toString()),
  Options: (formId: number, questionId: string) =>
    `/forms/:id/questions/:q_id/options`
      .replace(":id", formId.toString())
      .replace(":q_id", questionId),
  CreateOption: (formId: number, questionId: string) =>
    `/forms/:id/questions/:q_id/create-edit-option`
      .replace(":id", formId.toString())
      .replace(":q_id", questionId),
};

export { Auth, FormRoutes };
