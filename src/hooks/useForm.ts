import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeToast } from "shared/toaster";
import { login } from "store/slices/auth";
import { GeneralAPIsActions } from "utils/apis/actions";
import { useAppDispatch } from "./useStore";

export type TInitValues = {
  [key: string | number]: any;
};
export interface IUseForm {
  initialValues: TInitValues;
  url: string;
  state?: any;
  type?: "Login" | "Form" | "Question" | "Option";
  dispatchFunc?: (payload: any) => void;
  redirect?: boolean;
  redirectUrl?: string;
  requestType?: "post" | "patch";
  isUpdateData?: boolean;
}

export const useForm = ({
  initialValues,
  url,
  type,
  state,
  redirect = false,
  redirectUrl = "",
  requestType = "post",
  isUpdateData = false,
}: IUseForm) => {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { value, name, type, checked } = e.target as HTMLInputElement;
    setErrors({});
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res =
      requestType === "post" && !isUpdateData
        ? await GeneralAPIsActions.postData(url, values).finally(() => {
            setIsSubmitting(false);
          })
        : await GeneralAPIsActions.updatePartialData(url, values).finally(
            () => {
              setIsSubmitting(false);
            }
          );
    makeToast({
      type: "success",
      message: "Success",
    });
    if (type === "Login") {
      dispatch(login({ user: res.data.user, token: res.data.token }));
    }
    if (redirect && redirectUrl) {
      navigate(redirectUrl);
    }
  };

  useEffect(() => {
    if (state) {
      setValues({ ...state });
    }
    // eslint-disable-next-line
  }, []);

  return {
    values,
    onChange,
    onSubmit,
    isSubmitting,
    errors,
  };
};
