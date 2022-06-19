import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/recoil";
import SignInPresenter from "./SignIn.presenter";
import { LOGIN_USER } from "./SignIn.queries";
import * as yup from "yup";
import { useRouter } from "next/router";
import { ILoginData } from "../signUp/SignUp.types";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리입니다.")
    .required("비밀번호를 입력해주세요."),
});

function SignInContainer() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickLogin = async (data: ILoginData) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      alert("로그인에 성공하였습니다.");
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <SignInPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}

export default SignInContainer;
