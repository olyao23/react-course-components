import NavItems from "./NavItems/NavItems";

const PageHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "#4f005f",
        color: "white",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          marginLeft: "50px",
        }}
      >
        A Typical Page
      </div>
      <ul
        style={{
          display: "flex",
          marginRight: "50px",
        }}
      >
        <NavItems>Users</NavItems>
        <NavItems>Admin</NavItems>
        <NavItems>Logout</NavItems>
      </ul>
    </div>
  );
};

export default PageHeader;
