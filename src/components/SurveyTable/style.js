import { styled } from "@mui/material/styles";

export const ImageContainer = styled("div")(() => ({
  height: "50px",
  width: "80px",
  cursor: "pointer",
  "& img": {
    height: "100%",
    width: "100%",
  },
}));
