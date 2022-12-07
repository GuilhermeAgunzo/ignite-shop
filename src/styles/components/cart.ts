import { styled } from "..";

export const CartContainer = styled("div", {
  position: "fixed",
  right: 0,
  display: "flex",
  flexDirection: "column",
  maxWidth: 480,
  width: "30rem",
  height: "100%",
  background: "$gray800",
  padding: 10,
  transition: "right 0.2s",

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    width: "1.5rem",
    height: "1.5rem",

    background: "transparent",
    cursor: "pointer",
    color: "$white",

    border: 0,
  },

  div: {
    display: "flex",
    flexDirection: "column",

    padding: "3rem",
  },
});

export const CartProductListContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});
