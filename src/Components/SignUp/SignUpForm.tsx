import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface infoObj {
  email: string;
  password: string;
  passwordVerification: string;
  name: string;
  birthDate: Date;
  gender: string;
  phone: string;
  address: string;
  postcode: string;
  detailAddress: string;
  extraAddress: string;
}

interface kakaoPostOnCompleteData {
  postcode: string;
  postcode1: string;
  postcode2: string;
  postcodeSeq: string;
  zonecode: string;
  address: string;
  addressEnglish: string;
  addressType: string;
  bcode: string;
  bname: string;
  bnameEnglish: string;
  bname1: string;
  bname1English: string;
  bname2: string;
  bname2English: string;
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguEnglish: string;
  sigunguCode: string;
  userLanguageType: string;
  query: string;
  buildingName: string;
  buildingCode: string;
  apartment: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  roadAddress: string;
  roadAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  userSelectedType: string;
  noSelected: string;
  hname: string;
  roadnameCode: string;
  roadname: string;
  roadnameEnglish: string;
}

const { daum } = window;

const SignUpForm: React.FC = () => {
  const [info, setInfo] = useState<infoObj>({
    email: "",
    password: "",
    passwordVerification: "",
    name: "",
    birthDate: new Date(),
    gender: "",
    phone: "",
    address: "",
    postcode: "",
    detailAddress: "",
    extraAddress: "",
  });

  const detailAddressRef = useRef(null);
  const navigate = useNavigate();
  const signUpHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(info);
      // navigate("/signup/success");
    },
    [navigate, info]
  );

  const changeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInfo((state) => {
        if (event.target.name === "birthDate")
          return {
            ...state,
            [event.target.name]: new Date(event.target.value),
          };
        return {
          ...state,
          [event.target.name]: event.target.value,
        };
      });
    },
    []
  );

  useEffect(() => {
    console.log(info);
  }, [info]);

  const addressHandler = useCallback(() => {
    new daum.Postcode({
      oncomplete: function (data: kakaoPostOnCompleteData) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        let addr = ""; // 주소 변수
        let extraAddr = ""; // 참고항목 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === "R") {
          // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else {
          // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress;
        }

        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if (data.userSelectedType === "R") {
          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr +=
              extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if (extraAddr !== "") {
            extraAddr = " (" + extraAddr + ")";
          }
          // 조합된 참고항목을 해당 필드에 넣는다.
        }

        setInfo((state) => ({
          ...state,
          postcode: data.zonecode,
          address: addr,
          extraAddress: extraAddr,
        }));

        if (detailAddressRef.current !== null) {
          (detailAddressRef.current as HTMLInputElement).focus();
        }
      },
    }).open();
  }, []);

  return (
    <form
      className="[&_input]:border-b-[1px] [&_input]:border-black [&_input]:outline-none"
      onSubmit={signUpHandler}
    >
      <div>
        <label htmlFor="email">이메일</label>
        <input type="text" id="email" name="email" onChange={changeHandler} />
        <button type="button">중복 확인</button>
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="passwordVerification">비밀번호 확인</label>
        <input
          type="password"
          id="passwordVerification"
          name="passwordVerification"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="name">이름</label>
        <input type="text" name="name" id="name" onChange={changeHandler} />
      </div>
      <div>
        <label htmlFor="name">생년월일</label>
        <input type="date" name="birthDate" onChange={changeHandler} />
      </div>
      <div>
        <div>성별</div>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          required
          onChange={changeHandler}
        />
        <label htmlFor="male">남자</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={changeHandler}
        />
        <label htmlFor="female">여자</label>
      </div>
      <div>
        <label htmlFor="phone">전화번호</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          onChange={changeHandler}
          required
        />
      </div>
      <div>
        <input
          placeholder="우편변호"
          name="postcode"
          id="postcode"
          value={info.postcode}
        />
        <button type="button" onClick={addressHandler}>
          찾기
        </button>
      </div>
      <div>
        <input
          placeholder="도로명 주소"
          name="roadAddress"
          value={info.address}
        />
      </div>
      <div>
        <input
          placeholder="상세 주소"
          name="detailAddress"
          ref={detailAddressRef}
          onChange={changeHandler}
        />
      </div>
      <div>
        <input name="extraAddress" value={info.extraAddress} disabled />
      </div>
      <button>회원가입</button>
    </form>
  );
};

export default SignUpForm;
