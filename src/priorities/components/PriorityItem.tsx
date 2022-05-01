// components
import { Box, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

// types
import { Maybe } from "models/types";

interface STypographyProps {
  isActive?: boolean;
  component?: string;
}

interface Props {
  id?: Maybe<string>;
  title: string;
  isActive?: boolean;
  onClick: (id: Maybe<string>) => void;
}

const STypography = styled(Typography, {
  shouldForwardProp: prop => prop !== "isActive",
})<STypographyProps>(({ theme: { palette }, isActive }) => ({
  position: "relative",
  color: palette.primary.contrastText,
  fontSize: "16px",
  lineHeight: "19px",
  cursor: "pointer",
  paddingBottom: "5px",
  ...(isActive && {
    "&::before": {
      borderBottom: "2px solid rgba(255, 255, 255, 0.7)",
      left: "0px",
      bottom: "0px",
      content: `" "`,
      position: "absolute",
      right: "0px",
      transition: "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      pointerEvents: "none",
    },
  }),
}));

export const PriorityItem: React.FC<Props> = ({
  id,
  title,
  isActive,
  onClick,
}) => {
  const handleClick = () => onClick(id ?? null);

  return (
    <Box py={1.25}>
      <STypography isActive={isActive} component="span" onClick={handleClick}>
        {title}
      </STypography>
    </Box>
  );
};
