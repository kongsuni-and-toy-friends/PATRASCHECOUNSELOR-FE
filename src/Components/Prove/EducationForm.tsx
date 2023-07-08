import { useCallback, useState } from "react";
import EducationFormRow from "./EducationFormRow";
import { educationInfo } from "../../routes/ProvePage";

interface EducationFormProps {
  userEducationInfo: educationInfo[];
  setUserEducationInfo: React.Dispatch<React.SetStateAction<educationInfo[]>>;
}

const EducationForm: React.FC<EducationFormProps> = ({
  userEducationInfo,
  setUserEducationInfo,
}) => {
  const addUserEducationInfo = useCallback(() => {
    setUserEducationInfo((state) => {
      return state.concat({
        degree: "",
        school: "",
        department: "",
        major: "",
        graduate: "",
        certificate: null,
      });
    });
  }, [setUserEducationInfo]);

  return (
    <>
      <h1>학력 사항</h1>
      <table className="border-collapse border-[1px] border-black [&_th]:border-[1px] [&_th]:border-black w-full">
        <thead>
          <tr>
            <th>학위</th>
            <th>학교</th>
            <th>학과</th>
            <th>전공</th>
            <th>졸업여부</th>
            <th>증명서 사본</th>
          </tr>
        </thead>
        <tbody>
          {userEducationInfo.map((_, index) => {
            return (
              <EducationFormRow
                key={index}
                index={index}
                onChange={setUserEducationInfo}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={addUserEducationInfo}>추가하기</button>
    </>
  );
};

export default EducationForm;
