const colors = ["#ECEBDE", "#D3F1DF", "#EBEAFF", "#FEF3E2"];

import { useGlobalContext } from "../hooks/useGlobalContext";

function ColorContainer() {
  const { changeColor } = useGlobalContext();

  return (
    <div className="align-elements mb-10 flex justify-end">
      <ul className="flex gap-3">
        {colors.map((color) => {
          return (
            <li
              onClick={() => changeColor(color)}
              className="w-5 h-5 border rounded-full cursor-pointer hover:border-red-300"
              style={{ background: color }}
              key={color}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default ColorContainer;
