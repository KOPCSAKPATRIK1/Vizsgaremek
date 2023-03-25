import { IsString, Matches, MaxLength, Min, MinLength } from "class-validator";

export default class RegisterDto {
 
  @MinLength(6, {message: "Username must be over 6 characters"})
  username: string;
  
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;
  identifier: string;
}
