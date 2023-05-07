import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { Box } from "@mui/material";

import { PriorityItem } from "./PriorityItem";
import { AddPriority } from "./AddPriority";
import { Sorting } from "./Sorting";

// utils
import { getPriorities } from "../actions";
import { setFilter } from "tasks/actions";
import { selectAllPriorities } from "../redusers";

// types
import { Maybe } from "models/types";
import { AppDispatch, RootState } from "models/types";

export const Priorities: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const priorities = useSelector(selectAllPriorities);
  const { filter } = useSelector((state: RootState) => state.tasks);

  const handleFilter = useCallback(
    (id: Maybe<string>) => dispatch(setFilter(id)),
    [dispatch],
  );

  useEffect(() => {
    dispatch(getPriorities());
  }, []);

  return (
    <>
      <Sorting />

      <Box mt={3}>
        <PriorityItem title="All" isActive={!filter} onClick={handleFilter} />

        {priorities.map(({ _id, title }) => (
          <PriorityItem
            key={_id}
            id={_id}
            title={title}
            isActive={filter === _id}
            onClick={handleFilter}
          />
        ))}
      </Box>

      <AddPriority />
    </>
  );
};
