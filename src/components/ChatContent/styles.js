export const styles = {
  content: {
    boxSizing: "border-box",
    background: "#DBEBE6",
    height: "400px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 10px",
    "&& .scrolleable": {
      paddingTop: "10px",
      height: "100%",
      width: "100%",
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      overflowY: "auto",
    },
  },
};
