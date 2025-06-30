import React from "react";

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
  strokeWidth?: number | string;
}

export const Home: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z" />
      <path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21" />
    </svg>
  );
};

export const Document: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zM7 16h7m-3-4h7M8 8h7" />
    </svg>
  );
};

export const Trash: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m18 9-.84 8.398c-.127 1.273-.19 1.909-.48 2.39a2.5 2.5 0 0 1-1.075.973C15.098 21 14.46 21 13.18 21h-2.36c-1.279 0-1.918 0-2.425-.24a2.5 2.5 0 0 1-1.076-.973c-.288-.48-.352-1.116-.48-2.389L6 9m7.5 6.5v-5m-3 5v-5m-6-4h4.615m0 0 .386-2.672c.112-.486.516-.828.98-.828h3.038c.464 0 .867.342.98.828l.386 2.672m-5.77 0h5.77m0 0H19.5" />
    </svg>
  );
};
export const StrokeEarth: React.FC<IconProps> = ({
  width = 200,
  height = 200,
  className = "",
  color = "white", // applies only to the arc stroke
  strokeWidth = 15,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gray circle in the center */}
      <circle cx="100" cy="100" r="40" fill="gray" />

      {/* White arc over the circle */}
      <path
        d="
          M30 130
          Q100 90 170 130
          L165 126
          Q100 70 35 126
          Z
        "
        fill={color}
      />
    </svg>
  );
};
