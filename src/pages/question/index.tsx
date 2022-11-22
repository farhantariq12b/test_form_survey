import { usePagination } from "hooks/usePagination";
import { IQuestion } from "interface/form";
import { Link, useParams } from "react-router-dom";
import { FormRoutes } from "routes/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircle,
  faPlus,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FormEndPoints } from "utils/apis/endpoints";
import { NoTableContent } from "shared/table-no-data";
import { SimpleTable } from "components/table";

export const FormQuestions = () => {
  const { id: formId } = useParams<{ id: string }>();
  const { data, loading, onDelete } = usePagination<IQuestion>(
    FormEndPoints.addOrGetFormQuestion(+(formId as string))
  );
  return (
    <>
      <div className="text-end">
        <Link
          to={FormRoutes.CreateQuestions(+(formId as string))}
          className="btn btn-primary"
        >
          <FontAwesomeIcon icon={faPlus} />
          Add Question
        </Link>
      </div>
      <SimpleTable
        headings={["#", "Name", "Visible", "Priority", "Options", "Actions"]}
      >
        {!loading && !data.length ? <NoTableContent /> : null}
        {data.map(({ id, question, visible, priority, options }, idx) => (
          <tr>
            <th scope="row">{idx + 1}</th>
            <td>{question}</td>
            <td>{visible ? "yes" : "no"}</td>
            <td>{priority}</td>
            <td>{options.length}</td>
            <td>
              <Link
                title="Options"
                to={FormRoutes.Options(+(formId as string), String(id))}
              >
                <FontAwesomeIcon icon={faCircle} />
              </Link>
              <Link
                title="Edit"
                to={FormRoutes.CreateQuestions(+(formId as string))}
                state={{
                  id,
                  question,
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
                data-url={FormEndPoints.deleteFormQuestion(id)}
                onClick={onDelete}
              />
            </td>
          </tr>
        ))}
      </SimpleTable>
    </>
  );
};

export default FormQuestions;
