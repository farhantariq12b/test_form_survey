import { usePagination } from "hooks/usePagination";
import { IForm } from "interface/form";
import { Link } from "react-router-dom";
import { FormRoutes } from "routes/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faQuestion,
  faPlus,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FormEndPoints } from "utils/apis/endpoints";
import { SimpleTable } from "components/table";
import { NoTableContent } from "shared/table-no-data";

export const Forms = () => {
  const { data, onDelete, loading } = usePagination<IForm>(
    FormEndPoints.createOrGetForms(),
    "Forms"
  );
  return (
    <>
      <div className="text-end">
        <Link to={FormRoutes.CreateEdit} className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} />
          Add Form
        </Link>
      </div>
      <SimpleTable
        headings={["#", "Name", "Visible", "Priority", "Questions", "Actions"]}
      >
        {!loading && !data.length ? <NoTableContent /> : null}
        {data.length
          ? data.map((item, idx) => (
              <tr key={item.id}>
                <th scope="row">{idx + 1}</th>
                <td>{item.name}</td>
                <td>{item.visible ? "yes" : "no"}</td>
                <td>{item.priority}</td>
                <td>{item.questions.length}</td>
                <td>
                  <Link title="Questions" to={FormRoutes.Questions(item.id)}>
                    <FontAwesomeIcon icon={faQuestion} />
                  </Link>
                  <Link title="Edit" to={FormRoutes.CreateEdit} state={item}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-danger"
                    data-index={idx}
                    data-url={FormEndPoints.deleteForm(item.id)}
                    onClick={onDelete}
                  />
                </td>
              </tr>
            ))
          : null}
      </SimpleTable>
    </>
  );
};

export default Forms;
