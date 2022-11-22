export const NoTableContent = ({
  message = "No Data",
}: {
  message?: string;
}) => {
  return (
    <tr>
      <td colSpan={999} className="text-center">
        <strong>{message}</strong>
      </td>
    </tr>
  );
};
