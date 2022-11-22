export const createOrGetForms = () => `/form`;
export const editForm = (formId: number) => `/form/${formId}`;
export const deleteForm = (formId: number) => `/form/${formId}`;

export const addOrGetFormQuestion = (formId: number) => `/question/${formId}`;
export const editFormQuestion = (questionId: number) =>
  `/question/${questionId}`;
export const deleteFormQuestion = (questionId: number) =>
  `/question/${questionId}`;

export const addOrGetQuestionOptions = (questionId: number) =>
  `/option/${questionId}`;
export const editQuestionOption = (optionId: number) => `/option/${optionId}`;
export const deleteQuestionOption = (optionId: number) => `/option/${optionId}`;
