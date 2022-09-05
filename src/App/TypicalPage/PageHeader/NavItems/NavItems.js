const NavItems = (props) => {
  return (
    <li
      style={{
        color: "white",
        listStyleType: "none",
        margin: "0 20px",
        padding: "5px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        "&:hover:": {
          backgroundColor: "pink",
        },
      }}
    >
      {props.children}
    </li>
  );
};

export default NavItems;
