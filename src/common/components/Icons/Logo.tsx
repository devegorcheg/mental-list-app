interface Props {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Logo: React.FC<Props> = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox="0 0 249 131"
    className={className}
  >
    <g transform="translate(-196 -291)">
      <text
        style={{
          fill: "#fff",
          fontSize: "67px",
          fontFamily: "Comfortaa",
          fontWeight: 700,
        }}
        transform="translate(196 406)"
      >
        <tspan x="0" y="0">
          JustDo
        </tspan>
      </text>
      <circle
        style={{ fill: "#fff" }}
        cx="5.5"
        cy="5.5"
        r="5.5"
        transform="translate(425 336)"
      />
      <circle
        style={{ fill: "#fff" }}
        cx="8.5"
        cy="8.5"
        r="8.5"
        transform="translate(408 307)"
      />
      <circle
        style={{ fill: "#fff" }}
        cx="12.5"
        cy="12.5"
        r="12.5"
        transform="translate(368 291)"
      />
      <circle
        style={{ fill: "#fff" }}
        cx="17.5"
        cy="17.5"
        r="17.5"
        transform="translate(321 307)"
      />
    </g>
  </svg>
);
