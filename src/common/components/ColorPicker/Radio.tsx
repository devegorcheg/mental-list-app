// components
import { Radio as MRadio, RadioProps } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

// utils
import { styled } from "@mui/material/styles";

interface CheckedRadioIconProps {
  background?: string;
  className?: string;
}

const RadioIcon = styled("span", {
  shouldForwardProp: propName => propName !== "background",
})<{ background?: string }>(({ background }) => ({
  width: 48,
  height: 48,
  backgroundColor: background ?? "",
}));

const CheckedRadioIcon: React.FC<CheckedRadioIconProps> = ({ background }) => (
  <RadioIcon
    background={background}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid white",
      color: "white",
    }}
  >
    <CheckIcon fontSize="large" />
  </RadioIcon>
);

export const Radio: React.FC<RadioProps & { background?: string }> = ({
  background,
  ...props
}) => (
  <MRadio
    sx={{
      padding: 0,
      "&:hover": {
        bgcolor: "transparent",
      },
    }}
    icon={<RadioIcon background={background} />}
    checkedIcon={<CheckedRadioIcon background={background} />}
    {...props}
  />
);
