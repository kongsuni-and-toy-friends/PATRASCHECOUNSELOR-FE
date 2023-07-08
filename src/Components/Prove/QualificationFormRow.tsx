import React, { useCallback } from "react";
import { qualificationInfo } from "../../routes/ProvePage";

interface QualificationFormRowProps {
  index: number;
  onChange: React.Dispatch<React.SetStateAction<qualificationInfo[]>>;
}

const QualificationFormRow: React.FC<QualificationFormRowProps> = React.memo(
  ({ index, onChange }) => {
    const inputHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange((state) => {
          const newState = [...state];
          if (event.target.name === "certificate" && event?.target?.files) {
            newState[index][event.target.name] = event.target.files[0];
          } else if (
            event.target.name == "name" ||
            event.target.name == "publisher"
          ) {
            newState[index][event.target.name] = event.target.value;
          }
          console.log(newState);
          return newState;
        });
      },
      [index, onChange]
    );

    return (
      <tr>
        <th>
          <input name="name" placeholder="자격 이름" onChange={inputHandler} />
        </th>
        <th>
          <input
            name="publisher"
            placeholder="발행처"
            onChange={inputHandler}
          />
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

export default QualificationFormRow;
