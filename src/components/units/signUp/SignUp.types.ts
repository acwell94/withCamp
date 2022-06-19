export interface ISignUpData {
  email?: string;
  password?: string;
  name?: string;
}

export interface ISignUpContainer {
  register: any;
  handleSubmit: any;
  formState: any;
  onClickSubmit: (data: ISignUpData) => void;
}
