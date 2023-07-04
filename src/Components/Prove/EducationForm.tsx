import { useCallback, useRef, useState } from "react";
import EducationFormRow from "./EducationFormRow";

export interface educationInfo {
  degree: string;
  school: string;
  department: string;
  major: string;
  graduate: string;
}

const ProveForm: React.FC = () => {
  const [userEducationInfo, setUserEducationInfo] = useState<educationInfo[]>([
    {
      degree: "",
      school: "",
      department: "",
      major: "",
      graduate: "",
    },
  ]);
  const [uploadedFileList, setUploadedFileList] = useState<(File | null)[]>([]);

  const addUserEducationInfo = useCallback(() => {
    setUserEducationInfo((state) => {
      return state.concat({
        degree: "",
        school: "",
        department: "",
        major: "",
        graduate: "",
      });
    });

    setUploadedFileList((state) => [...state, null]);
  }, []);

  const bodyRef = useRef(null);
  // const changeHandler = useCallback(
  //   (index: number) =>
  //     (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
  //       setUserEducationInfo((state) => {
  //         const newState = [...state];
  //         newState[index][event.target.name] = event.target.value;
  //         return newState;
  //       });
  //     },
  //   []
  // );
  return (
    <>
      <h1>학력 사항</h1>
      <table className="border-collapse border-[1px] border-black [&_th]:border-[1px] [&_th]:border-black">
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
        <tbody ref={bodyRef}>
          {userEducationInfo.map((_, index) => {
            return (
              <EducationFormRow
                key={index}
                index={index}
                onChange={setUserEducationInfo}
                onFileUpload={setUploadedFileList}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={addUserEducationInfo}>추가하기</button>
      <button onClick={() => console.dir(bodyRef.current)}>조회</button>
    </>
  );
};

export default ProveForm;
