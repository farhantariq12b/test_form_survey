import { toast } from "react-hot-toast";

export const makeToast = ({
  type = "success",
  message = "Success",
  promise = new Promise((resolve) => resolve("")),
  callback,
}: {
  type?: "success" | "error" | "promise";
  message?: string;
  // eslint-disable-next-line
  promise?: Promise<any>;
  callback?: () => void;
}) => {
  switch (type) {
    case "error":
      toast.error(message);
      break;
    case "promise":
      toast.promise(
        promise,
        {
          loading: "Submitting...",
          success: () => {
            callback?.();
            return "Successfully saved";
          },
          error: (err) =>
            `Error: ${
              err?.response?.data?.error ??
              "Internal Serve error, try again after some time"
            }`,
        },
        {
          success: {
            duration: 5000,
            icon: "🔥",
          },
        }
      );
      break;
    default:
      toast.success(message);
  }
};
