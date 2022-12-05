import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  button: {
    color: "$gray300",
    background: "$gray800",
    padding: "0.75rem",
    border: 0,
    borderRadius: 8,
    cursor: "pointer",
  },
});
