import { useState } from "react";
import EducationForm from "../Components/Prove/EducationForm";
import QualificationForm from "../Components/Prove/QualificationForm";
import CareerForm from "../Components/Prove/CareerForm";
import AgreeForm from "../Components/Agree/AgreeForm";

export interface educationInfo {
  degree: string;
  school: string;
  department: string;
  major: string;
  graduate: string;
  certificate: File | null;
}

export interface qualificationInfo {
  name: string;
  publisher: string;
  certificate: File | null;
}

export interface careerInfo {
  name: string;
  position: string;
  startDate: Date;
  endDate: Date;
  detail: string;
}

const ProvePage: React.FC = () => {
  const [userEducationInfo, setUserEducationInfo] = useState<educationInfo[]>([
    {
      degree: "",
      school: "",
      department: "",
      major: "",
      graduate: "",
      certificate: null,
    },
  ]);

  const [userQualificationInfo, setUserQualificationInfo] = useState<
    qualificationInfo[]
  >([
    {
      name: "",
      publisher: "",
      certificate: null,
    },
  ]);

  const [userCareerInfo, setUserCareerInfo] = useState<careerInfo[]>([
    {
      name: "",
      position: "",
      startDate: new Date(),
      endDate: new Date(),
      detail: "",
    },
  ]);

  return (
    <>
      <h1>자격 증명 등록</h1>
      <EducationForm
        userEducationInfo={userEducationInfo}
        setUserEducationInfo={setUserEducationInfo}
      />
      <QualificationForm
        userQualificationInfo={userQualificationInfo}
        setUserQualificationInfo={setUserQualificationInfo}
      />
      <CareerForm
        userCareerInfo={userCareerInfo}
        setUserCareerInfo={setUserCareerInfo}
      />
      <AgreeForm />
      <button className="border-black border-[1px]">승인 요청</button>
    </>
  );
};

export default ProvePage;
