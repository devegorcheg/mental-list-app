import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { Box, Typography } from "@mui/material";

import { ExpandButton } from "common/components/ExpandButton";
import { PriorityItem } from "./PriorityItem";

// utils
import { getPriorities, setFilter, setSort } from "priorities/actions";

// types
import { SxProps, Theme } from "@mui/system";
import { AppDispatch, RootState } from "store";
import { Maybe } from "models/types";
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

export const Priorities: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, filter, sort } = useSelector(
    (state: RootState) => state.priorities,
  );

  const handleSort = () =>
    dispatch(setSort(sort === Sort.ASC ? Sort.DESC : Sort.ASC));
  const handleFilter = useCallback(
    (id: Maybe<string>) => dispatch(setFilter(id)),
    [dispatch],
  );

  useEffect(() => {
    dispatch(getPriorities());
  }, []);

  return (
    <>
      <Box sx={sxBox}>
        <Typography sx={sxTitle}>Priority</Typography>
        <ExpandButton
          size="small"
          open={sort === Sort.ASC}
          onClick={handleSort}
        />
      </Box>
      <Box mt={3}>
        <PriorityItem title="All" isActive={!filter} onClick={handleFilter} />
        {list.map(({ _id, title }) => (
          <PriorityItem
            key={_id}
            id={_id}
            title={title}
            isActive={filter === _id}
            onClick={handleFilter}
          />
        ))}
      </Box>
    </>
  );
};
