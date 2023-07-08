import React, { useCallback } from "react";
import { educationInfo } from "../../routes/ProvePage";

interface EducationFormRowProps {
  index: number;
  onChange: React.Dispatch<React.SetStateAction<educationInfo[]>>;
}

const EducationFormRow: React.FC<EducationFormRowProps> = React.memo(
  ({ index, onChange }) => {
    const inputHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange((state) => {
          const newState = [...state];
          if (event.target.name === "certificate" && event?.target?.files) {
            newState[index][event.target.name] = event.target.files[0];
          } else if (
            event.target.name === "school" ||
            event.target.name === "department" ||
            event.target.name === "major"
          ) {
            newState[index][event.target.name] = event.target.value;
          }
          console.log(newState);
          return newState;
        });
      },
      [index, onChange]
    );

    const selectHandler = useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange((state) => {
          const newState = [...state];
          if (
            event.target.name === "degree" ||
            event.target.name === "graduate"
          ) {
            newState[index][event.target.name] = event.target.value;
          }
          return newState;
        });
      },
      [index, onChange]
    );

    return (
      <tr>
        <th>
          <select name="degree" onChange={selectHandler}>
            <option value="">선택</option>
            <option value="bachelor">학사</option>
            <option value="master">석사</option>
            <option value="docter">박사</option>
          </select>
        </th>
        <th>
          <input name="school" placeholder="학교명" onChange={inputHandler} />
        </th>
        <th>
          <input
            name="department"
            placeholder="학과명"
            onChange={inputHandler}
          />
        </th>
        <th>
          <input name="major" placeholder="전공" onChange={inputHandler} />
        </th>
        <th>
          <select name="graduate" onChange={selectHandler}>
            <option value="">졸업 여부</option>
            <option value="1">졸업</option>
            <option value="0">미졸업</option>
          </select>
        </th>
        <th>
          <input
            type="file"
            name="certificate"
            accept=".pdf"
            onChange={inputHandler}
          />
        </th>
      </tr>
    );
  }
);

export default EducationFormRow;
