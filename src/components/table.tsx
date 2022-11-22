import { FC, ReactNode } from "react";
import { Table } from "reactstrap";
import { uniqueId } from "lodash";

type Props = {
  children?: ReactNode;
  headings: string[];
};
export const SimpleTable: FC<Props> = ({ headings, children }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          {headings.map((heading) => (
            <th key={uniqueId()}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};
