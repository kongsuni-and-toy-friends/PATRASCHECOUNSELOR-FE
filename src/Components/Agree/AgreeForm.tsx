const AgreeForm: React.FC = () => {
  return (
    <>
      <div>
        <input type="checkbox" id="required" />
        <label htmlFor="required">
          (필수) 개인정보 제공 약관에 동의합니다.
        </label>
      </div>
      <div>
        <input type="checkbox" id="select" />
        <label htmlFor="select">
          (선택) SMS, 이메일을 통한 마케팅 정보 수신에 동의합니다.
        </label>
      </div>
    </>
  );
};

export default AgreeForm;
