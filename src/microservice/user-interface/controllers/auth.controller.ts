import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { RegisterRequestDTO } from 'src/microservice/application-core/auth/dto/auth.dto';
import { RegisterInteractor } from 'src/microservice/application-core/auth/use-cases/register.interactor';

@Controller()
// @ApiTags('AuthController')
export class AuthController {
  constructor(private readonly registerInteractor: RegisterInteractor) {}

  // @Post('v1/auth/login')
  // async login(@Body() loginRequestDTO: LoginRequestDTO) {
  // 	const response = await this.loginInteractor.execute(loginRequestDTO);
  // 	if (response.error) {
  // 		throw new BadRequestException(response.error);
  // 	}
  // 	return response;
  // }

  @Post('v1/auth/register')
  async register(@Body() registerRequestDTO: RegisterRequestDTO) {
    try {
      const response =
        await this.registerInteractor.execute(registerRequestDTO);
      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
