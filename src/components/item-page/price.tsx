import { Typography } from "@mui/material";
import { ReactComponent as Coin } from "../../assets/images/Coin.svg";
import { CardBox } from "../styled-components/card-box";

type PriceProps = {
  price: number;
  isForPreview: boolean;
  screenHeight: number;
};

export const Price = ({
  price,
  isForPreview = false,
  screenHeight,
}: PriceProps) => {
  return (
    <CardBox
      sx={{
        paddingTop: isForPreview ? { xs: "0px", md: "40px" } : "0px",
        position: isForPreview
          ? { xs: "fixed", md: screenHeight < 900 ? "absolute" : "static" }
          : "static",
        bottom: "0",
        left: "50%",
        transform: isForPreview
          ? {
              xs: "translate(-50%)",
              md: screenHeight < 900 ? "translate(-50%)" : "unset",
            }
          : "static",
      }}
      gap={"8px"}
    >
      <Coin />
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: isForPreview ? { xs: "20px", md: "25px" } : "20px",
        }}
      >
        {price && price.toLocaleString()}
      </Typography>
    </CardBox>
  );
};
