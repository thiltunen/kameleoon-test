import React, { memo } from 'react';

export interface TableRowProps {
  name?: string;
  type?: string;
  status?: string;
  siteId?: number;
}

const TableRow: React.FC<TableRowProps> = ({ name, type, status, siteId }) => {
  return (
    <li>
      {name} | {type} | {status} | {siteId}
    </li>
  );
};

export default memo(TableRow);
