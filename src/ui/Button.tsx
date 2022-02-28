// components
import { Button as MButton } from "@mui/material";

// utils
import { styled, Theme } from "@mui/system";

// types
import { ButtonTypeMap, ButtonProps } from "@mui/material/Button";
import { ExtendButtonBase } from "@mui/material/ButtonBase";

const gradient =
  "transparent linear-gradient(238deg, rgba(47, 128, 237, 1) 0%, rgba(86, 204, 242, 1) 100%) 0% 0% no-repeat padding-box";

const SButton = styled(MButton)(
  (props: { theme: Theme; "data-gradient"?: boolean }) => ({
    "&.MuiButton-contained": {
      borderRadius: "26px",
      background: props["data-gradient"] ? gradient : "",
    },
    "&.MuiButton-sizeLarge": {
      height: "47px",
    },
    textTransform: "none",
  }),
);

interface Props {
  gradient?: boolean;
}

export const Button: React.FC<Props & ButtonProps> = ({
  children,
  ...props
}) => {
  const { gradient, ...buttonProps } = props;

  return (
    <SButton
      {...(buttonProps as ExtendButtonBase<ButtonTypeMap>)}
      data-gradient={gradient}
    >
      {children}
    </SButton>
  );
};
