export interface ISignUpData {
  email?: string;
  password?: string;
  name?: string;
}

export interface ILoginData {
  email?: string;
  password?: string;
}

export interface ISignUpContainer {
  register: any;
  handleSubmit: any;
  formState: any;
  onClickSubmit?: (data: ISignUpData) => void;
  onClickLogin?: (data: ILoginData) => void;
}
