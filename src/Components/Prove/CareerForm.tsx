import { useCallback, useState } from "react";
import { careerInfo } from "../../routes/ProvePage";
import CareerFormRow from "./CareerFormRow";

interface EducationFormProps {
  userCareerInfo: careerInfo[];
  setUserCareerInfo: React.Dispatch<React.SetStateAction<careerInfo[]>>;
}

const CareerForm: React.FC<EducationFormProps> = ({
  userCareerInfo,
  setUserCareerInfo,
}) => {
  const addUserEducationInfo = useCallback(() => {
    setUserCareerInfo((state) => {
      return state.concat({
        name: "",
        position: "",
        startDate: new Date(),
        endDate: new Date(),
        detail: "",
      });
    });
  }, [setUserCareerInfo]);

  return (
    <>
      <h1>학력 사항</h1>
      <table className="border-collapse border-[1px] border-black [&_th]:border-[1px] [&_th]:border-black w-full">
        <thead>
          <tr>
            <th>기관명</th>
            <th>직책</th>
            <th>근무기간</th>
            <th>세부사항</th>
          </tr>
        </thead>
        <tbody>
          {userCareerInfo.map((_, index) => {
            return (
              <CareerFormRow
                key={index}
                index={index}
                onChange={setUserCareerInfo}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={addUserEducationInfo}>추가하기</button>
    </>
  );
};

export default CareerForm;
