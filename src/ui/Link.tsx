import { Link as RouterLink, LinkProps } from "react-router-dom";

// utils
import { styled, Theme } from "@mui/material/styles";

const SLink = styled(RouterLink)(
  ({
    theme: { palette },
    ...args
  }: {
    theme: Theme;
    "data-no-decoration"?: boolean;
  }) => ({
    color: palette.primary.main,
    textDecoration: args?.["data-no-decoration"] ? "none" : "",
  }),
);

interface IProps {
  noDecoration?: boolean;
}

export const Link: React.FC<LinkProps & IProps> = ({
  noDecoration,
  ...props
}) => {
  return <SLink {...props} data-no-decoration={noDecoration} />;
};
