import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import SignUpPresenter from "./SignUp.presenter";
import * as yup from "yup";
import { CREATE_USER } from "./SignUp.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { ISignUpData } from "./SignUp.types";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리입니다.")
    .required("비밀번호는 필수 입력 사항입니다."),
  name: yup
    .string()
    .min(1, "이름은 최소 1글자 이상입니다.")
    .max(6, "이름은 최대 6글자 입니다.")
    .required("이름은 필수 입력 사항입니다."),
});

function SignUpContainer() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: ISignUpData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      alert("회원가입을 축하합니다.");
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <SignUpPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}

export default SignUpContainer;
