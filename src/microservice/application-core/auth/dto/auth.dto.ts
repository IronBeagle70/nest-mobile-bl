export class LoginRequestDTO {
  email: string;
  password: string;
}

export class RegisterRequestDTO extends LoginRequestDTO {
  firstName: string;
  lastName: string;
}