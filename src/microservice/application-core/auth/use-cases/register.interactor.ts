import { Injectable, Logger } from '@nestjs/common';
import { FirebaseClient } from 'src/microservice/infraestructure/microservice-clients/http/firebase.client';
import { RegisterRequestDTO } from '../dto/auth.dto';

@Injectable()
export class RegisterInteractor {
  private logger = new Logger(RegisterInteractor.name);

  constructor(private firebaseClient: FirebaseClient) {}

  async execute(payload: RegisterRequestDTO) {
    try {
      const response = await this.firebaseClient.registerUser(payload);

      return response;
    } catch (error) {
      this.logger.error(error);
      return {
        error: {
          code: error.code,
          errorMessage: error.message,
        },
      };
    }
  }
}
