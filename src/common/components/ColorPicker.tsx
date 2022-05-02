import { useState } from "react";

import { Box, Slider, Typography } from "@mui/material";

interface Props {
  value?: string;
  onClick: (color: string) => void;
}

const valueLabelFormat = (value: number) => {
  const formatedValue: Record<number, string> = {
    0: "50",
    1000: "A100",
    1100: "A200",
    1200: "A400",
    1300: "A700",
  };

  return formatedValue[value] ?? `${value}`;
};

export const ColorPicker: React.FC<Props> = ({ onClick }) => {
  const [value, setValue] = useState<number>(400);

  const handleChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box display="flex" alignItems="center" minWidth={250}>
      <Box mr={3}>
        <Typography>Shade:</Typography>
      </Box>
      <Slider
        min={0}
        max={1300}
        step={100}
        value={value}
        onChange={handleChange}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valueLabelFormat}
        valueLabelDisplay="auto"
      />
      <Box ml={3}>
        <Typography sx={{ width: 40 }}>{valueLabelFormat(value)}</Typography>
      </Box>
    </Box>
  );
};
