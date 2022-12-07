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

export const CartProductListContainer = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  marginTop: "2rem",

  li: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    gap: "1.25rem",

    img: {
      maxWidth: 102,
      height: 93,
      background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
      borderRadius: 8,
      objectFit: "cover",
    },

    div: {
      display: "flex",
      height: "100%",
      padding: 0,
      gap: "0.25rem",

      h5: {
        fontSize: "1.2rem",
        fontWeight: 100,
      },

      strong: {
        lineHeight: 1.6,
        fontSize: "1.25rem",
      },

      button: {
        width: "fit-content",
        alignSelf: "flex-start",
        color: "$green500",
        fontSize: "1.2rem",
        fontWeight: 600,
      },
    },
  },
});

export const CartProductDetails = styled("div", {
  display: "flex",
});

export const CartTotalizer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",

  p: {
    display: "flex",
    justifyContent: "space-between",

    strong: {
      fontSize: "1.25rem",
      fontWeight: "600",
    },
  },

  "p + p": {
    marginTop: "0.75rem",
  },

  button: {
    width: "100%",
    background: "$green500",
    color: "$white",
    padding: "2rem 1.25rem",
    borderRadius: 8,
    transition: "background 0.2s",
    fontWeight: "bold",
    fontSize: "$md",
    marginTop: "3rem",

    "&:disabled": {
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      background: "$green300",
    },
  },
});
