import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import shortid from "shortid";
import dayjs from "dayjs";

export const UserList = (props) => {
  const [users, setUsers] = useState([
    {
      id: shortid.generate(),
      name: "kuby",
      createDt: dayjs().format("YYYY-MM-DD hh:mm"),
    },
    {
      id: shortid.generate(),
      name: "kakao",
      createDt: dayjs().format("YYYY-MM-DD hh:mm"),
    },
    {
      id: shortid.generate(),
      name: "naver",
      createDt: dayjs().format("YYYY-MM-DD hh:mm"),
    },
    {
      id: shortid.generate(),
      name: "google",
      createDt: dayjs().format("YYYY-MM-DD hh:mm"),
    },
    {
      id: shortid.generate(),
      name: "apple",
      createDt: dayjs().format("YYYY-MM-DD hh:mm"),
    },
  ]);

  /**
   * 셀 내용 변경 이벤트
   * @param {Object} e - 셀 내용시 변경 오브젝트
   * @param {Object} e.data - 변경 된 내용의 오브젝트
   * @param {string} e.newValue - 새로운 변경 내용
   * @param {string} e.oldValue - 이전 내용
   */
  const onCustomerNameChange = (e) => {
    console.log(e);
  };

  const _pinnedRowCellRenderer = (cell) => {
    return <span style={cell.style}>{cell.value}</span>;
  };

  return (
    <div className="ag-theme-material" style={{ height: 400, maxWidth: 600 }}>
      <AgGridReact rowData={users}>
        <AgGridColumn
          headerName="#"
          pinned
          resizable
          filter
          field="id"
          width={200}
          pinnedRowCellRenderer={_pinnedRowCellRenderer}
        />
        <AgGridColumn
          headerName="고객사명"
          field="name"
          flex={1}
          editable
          onCellValueChanged={onCustomerNameChange}
        />
        <AgGridColumn headerName="생성일" field="createDt" />
      </AgGridReact>
    </div>
  );
};
