import { Box } from "@mui/material";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
} from "@mui/material/colors";

import { Radio } from "./Radio";

type Color = Record<string, string>;

interface Props {
  shade: string;
  color?: Color;
  defaultColor?: Color;
  onClick?: (color: Color) => void;
}

const colors: Array<Color> = [
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
];

export const ColorPalette: React.FC<Props> = ({
  shade,
  color: currenColor,
  onClick,
}) => {
  return (
    <Box display="flex" flexWrap="wrap" width="192px">
      {colors.map(color => {
        const handleChange = () => {
          onClick?.(color);
        };

        return (
          <Radio
            key={color[shade]}
            checked={currenColor === color}
            background={color[shade]}
            onChange={handleChange}
          />
        );
      })}
    </Box>
  );
};
