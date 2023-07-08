import { useCallback } from "react";
import { qualificationInfo } from "../../routes/ProvePage";
import QualificationFormRow from "./QualificationFormRow";

interface QualificationFormProps {
  userQualificationInfo: qualificationInfo[];
  setUserQualificationInfo: React.Dispatch<
    React.SetStateAction<qualificationInfo[]>
  >;
}

const QualificationForm: React.FC<QualificationFormProps> = ({
  userQualificationInfo,
  setUserQualificationInfo,
}) => {
  const addUserQualificationInfo = useCallback(() => {
    setUserQualificationInfo((state) =>
      state.concat({
        name: "",
        publisher: "",
        certificate: null,
      })
    );
  }, [setUserQualificationInfo]);
  return (
    <>
      <h1>자격 사항</h1>
      <h2>심리, 상담, 임상 심리 관련 자격증 n개를 등록할 수 있습니다.</h2>
      <table className="border-collapse border-[1px] border-black [&_th]:border-[1px] [&_th]:border-black w-full">
        <thead>
          <tr>
            <th>자격 이름</th>
            <th>발행처</th>
            <th>증명서 사본</th>
          </tr>
        </thead>
        <tbody>
          {userQualificationInfo.map((el, index) => (
            <QualificationFormRow
              key={index}
              index={index}
              onChange={setUserQualificationInfo}
            />
          ))}
        </tbody>
      </table>
      <button onClick={addUserQualificationInfo}>추가하기</button>
    </>
  );
};

export default QualificationForm;
