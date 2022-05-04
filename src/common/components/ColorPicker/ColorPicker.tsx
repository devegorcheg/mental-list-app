import { useState } from "react";

// components
import { Box, Slider, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { ColorPalette } from "./ColorPalette";

type Color = Record<string, string>;

interface Props {
  defaultColor?: { shade: string; color: Color };
  onClick?: (color: string) => void;
}

const formatedShade: Record<number, string> = {
  0: "50",
  1000: "A100",
  1100: "A200",
  1200: "A400",
  1300: "A700",
};

const formatedShadeRevers: Record<string, number> = {
  50: 0,
  A100: 1000,
  A200: 1100,
  A400: 1200,
  A700: 1300,
};

const valueLabelFormat = (value: number) => {
  return formatedShade[value] ?? `${value}`;
};

export const ColorPicker: React.FC<Props> = ({
  defaultColor = { shade: "500", color: red },
  onClick,
}) => {
  const [currentColor, setCurrentColor] = useState({
    ...defaultColor,
    shade:
      formatedShadeRevers[defaultColor.shade] ?? defaultColor.shade ?? "500",
  });

  const handleChangeShade = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setCurrentColor(({ color }) => ({ color, shade: newValue }));
      onClick?.(currentColor.color[newValue]);
    }
  };
  const handleChangeColor = (color: Color) => {
    setCurrentColor(({ shade }) => ({ color, shade }));
    onClick?.(color[currentColor.shade]);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" minWidth={250}>
        <Box mr={3}>
          <Typography>Shade:</Typography>
        </Box>
        <Slider
          min={0}
          max={1300}
          step={100}
          value={currentColor.shade}
          onChange={handleChangeShade}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valueLabelFormat}
          valueLabelDisplay="auto"
        />
        <Box ml={3}>
          <Typography sx={{ width: 40 }}>
            {valueLabelFormat(currentColor.shade)}
          </Typography>
        </Box>
      </Box>

      <Box mt={2} display="felex" justifyContent="center">
        <ColorPalette
          color={currentColor.color}
          shade={valueLabelFormat(currentColor.shade)}
          onClick={handleChangeColor}
        />
      </Box>
    </Box>
  );
};
