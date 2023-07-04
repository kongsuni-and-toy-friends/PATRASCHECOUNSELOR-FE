import { useCallback, useState } from "react";
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
  detailAddress: string;
}

const SignUpForm: React.FC = () => {
  const [info, setInfo] = useState<infoObj>({
    email: "",
    password: "",
    passwordVerification: "",
    name: "",
    birthDate: new Date(1900, 0, 1),
    gender: "",
    phone: "",
    address: "",
    detailAddress: "",
  });

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
      setInfo((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

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
        <input type="date" />
      </div>
      <div>
        <div>성별</div>
        <input type="radio" id="male" name="gender" required />
        <label htmlFor="male">남자</label>
        <input type="radio" id="female" name="gender" />
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
      <button>회원가입</button>
    </form>
  );
};

export default SignUpForm;
