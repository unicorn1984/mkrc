import React from 'react';
import { Tooltip, Icon } from 'mkrc';

const branchUrl = 'https://github.com/ant-design/ant-design/edit/master/';

export default function EditButton({ title, filename }) {
  return (
    <Tooltip title={title}>
      <a className="edit-button" href={`${branchUrl}${filename}`} target="_blank">
        <Icon type="edit" />
      </a>
    </Tooltip>
  );
}
