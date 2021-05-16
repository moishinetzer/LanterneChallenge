import "./styles.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import rows from "./data";

export default function App() {
  // console.log(rows);

  const columns = [
    { field: "FID", headerName: "FID", width: 80 },
    { field: "OBJECTID", headerName: "OBJECTID", width: 130 },
    { field: "NAME", headerName: "NAME", width: 200 },
    { field: "EASTING", headerName: "EASTING", width: 120 },
    { field: "NORTHING", headerName: "NORTHING", width: 130 },
    { field: "LINES", headerName: "LINES", width: 200 },
    { field: "NETWORK", headerName: "NETWORK", width: 200 },
    { field: "Zone", headerName: "Zone", width: 100 },
    { field: "x", headerName: "x", width: 130 },
    { field: "y", headerName: "y", width: 130 }
  ];

  return (
    <div className="App h-screen font-poppins px-20 ">
      <h1 className="pt-10 text-4xl font-bold">Underground Line Data</h1>
      <p className="pt-5 text-xl">
        <span className="font-bold">Final solution: </span>
        main.py is first used to filter and modify the csv file to the shape I
        need it to be and filter out any of the rules given in the requirements
        <br />
        <br />
        I am proficient in SQL however I have only learned it in an enclosed
        environment and integrating it with an web application is something I
        have not tried doing yet. I briefly tried to use a service like Firebase
        for this however importing all the data was going to be quite tricky
        based on the time constraints
        <br />
        <br />
        (The edited data itself has not been used on this webpage as I was
        having a very hard time converting the CSV to JSON, which would not be a
        problem if I would have the time to properly look into integrating SQL
        with the data and frontend with node)
        <br />
        <br />
        After getting the formatted files now I can use material ui to create a
        table to browse all the data and apply any filters on the data with
        auto-pagination enabled. If I would have enough time I would have made
        an collapsable accordian that shows the lines as an expanding section as
        opposed to just being listed as they are now.
        <br />
        <br />
        The table showing all the data is shown below.
      </p>
      <div className="h-full py-16">
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row["FID"]}
          components={{
            Toolbar: GridToolbar
          }}
        />
      </div>
    </div>
  );
}
