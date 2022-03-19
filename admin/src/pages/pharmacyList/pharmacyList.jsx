import "./pharmacyList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { pharmacyRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PharmacyList() {
  const [data, setData] = useState(pharmacyRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "pharmacy",
      headerName: "Pharmacy",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="pharmacyListItem">
            <img className="pharmacyListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "location", headerName: "Location", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/pharmacy/" + params.row._id}>
              <button className="pharmacyListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="pharmacyListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="pharmacyList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}