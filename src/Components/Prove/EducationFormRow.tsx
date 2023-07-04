import React, { useCallback } from "react";
import { educationInfo } from "./EducationForm";

interface EducationFormRowProps {
  index: number;
  onChange: React.Dispatch<React.SetStateAction<educationInfo[]>>;
  onFileUpload: React.Dispatch<React.SetStateAction<(File | null)[]>>;
}

const EducationFormRow: React.FC<EducationFormRowProps> = React.memo(
  ({ index, onChange, onFileUpload }) => {
    const inputHandler = useCallback(
      (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        onChange((state) => {
          const newState = [...state];
          newState[index][event.target.name as keyof educationInfo] =
            event.target.value;
          console.log(newState);
          return newState;
        });
      },
      [index, onChange]
    );

    const fileUploadHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null) {
          const uploadedfile = event.target.files[0];
          onFileUpload((state) => {
            const newFiles = [...state];
            newFiles[index] = uploadedfile;
            return newFiles;
          });
        }
      },
      [index, onFileUpload]
    );
    return (
      <tr>
        <th>
          <select name="degree" onChange={inputHandler}>
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
          <select name="graduate" onChange={inputHandler}>
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
            onChange={fileUploadHandler}
          />
        </th>
      </tr>
    );
  }
);

export default EducationFormRow;
