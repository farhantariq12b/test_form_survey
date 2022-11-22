import { usePagination } from "hooks/usePagination";
import { IOption } from "interface/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FormEndPoints } from "utils/apis/endpoints";
import { Link, useParams } from "react-router-dom";
import { NoTableContent } from "shared/table-no-data";
import { SimpleTable } from "components/table";
import { FormRoutes } from "routes/paths";

export const FormOptions = () => {
  const { id, q_id } = useParams<{ id: string; q_id: string }>();
  const { data, loading, onDelete } = usePagination<IOption>(
    FormEndPoints.addOrGetQuestionOptions(+(q_id as string)),
    "Forms"
  );
  return (
    <>
      <div className="text-end">
        <Link
          to={FormRoutes.CreateOption(+(id as string), q_id as string)}
          className="btn btn-primary"
        >
          <FontAwesomeIcon icon={faPlus} />
          Add Option
        </Link>
      </div>
      <SimpleTable headings={["#", "Name", "Visible", "Priority", "Actions"]}>
        {!loading && !data.length ? <NoTableContent /> : null}
        {data.map(({ id, name, visible, priority }, idx) => (
          <tr>
            <th scope="row">{idx + 1}</th>
            <td>{name}</td>
            <td>{visible ? "yes" : "no"}</td>
            <td>{priority}</td>
            <td>
              <Link
                title="Edit"
                to={FormRoutes.CreateOption(id, q_id as string)}
                state={{
                  id,
                  name,
                  visible,
                  priority,
                }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Link>
              <FontAwesomeIcon
                icon={faTrash}
                className="text-danger"
                data-index={idx}
                data-url={FormEndPoints.deleteQuestionOption(id)}
                onClick={onDelete}
              />
            </td>
          </tr>
        ))}
      </SimpleTable>
    </>
  );
};

export default FormOptions;
