import DataTable, { createTheme } from "react-data-table-component";

const Tabla = () => {
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 3,
      title: "Ghostbusters3",
      year: "1984",
    },
    {
      id: 4,
      title: "Ghostbusters4",
      year: "1984",
    },
    {
      id: 5,
      title: "Ghostbusters5",
      year: "1984",
    },
    {
      id: 6,
      title: "Ghostbusters6",
      year: "1984",
    },
    {
      id: 7,
      title: "Ghostbusters7",
      year: "1984",
    },
    {
      id: 8,
      title: "Ghostbusters8",
      year: "1984",
    },
    {
      id: 9,
      title: "Ghostbusters9",
      year: "1984",
    },
    {
      id: 10,
      title: "Ghostbusters10",
      year: "1984",
    },
  ];
  createTheme(
    "solarized",
    {
      text: {
        primary: "#268bd2",
        secondary: "#2aa198",
      },
      background: {
        default: "#002b36",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );
  return (
    <DataTable columns={columns} data={data} theme="solarized" pagination />
  );
};

export default Tabla;
