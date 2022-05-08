import { useDispatch, useSelector } from "react-redux";

// components
import { Box, Typography } from "@mui/material";

import { ExpandButton } from "common/components/ExpandButton";

// utils
import { setSort } from "priorities/actions";

// types
import { SxProps, Theme } from "@mui/system";
import { AppDispatch, RootState } from "store";
import { Sort } from "../redusers";

const sxBox: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

const sxTitle: SxProps<Theme> = ({ palette, spacing }) => ({
  color: palette.primary.contrastText,
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: "medium",
  marginRight: spacing(1),
});

export const Sorting: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sort = useSelector((state: RootState) => state.priorities.sort);

  const handleSort = () =>
    dispatch(setSort(sort === Sort.ASC ? Sort.DESC : Sort.ASC));

  return (
    <Box sx={sxBox}>
      <Typography sx={sxTitle}>Priority</Typography>
      <ExpandButton
        size="small"
        open={sort === Sort.ASC}
        onClick={handleSort}
      />
    </Box>
  );
};
