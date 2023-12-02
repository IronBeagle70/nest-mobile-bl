import { Injectable, Logger } from '@nestjs/common';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import {
  LoginRequestDTO,
  RegisterRequestDTO,
} from 'src/microservice/application-core/auth/dto/auth.dto';

@Injectable()
export class FirebaseClient {
  private logger = new Logger('FirebaseClient');

  constructor() {}

  async registerUser(payload: RegisterRequestDTO) {
    try {
      const { email, password, firstName, lastName } = payload;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      return user;
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

  async loginUser(payload: LoginRequestDTO) {
    try {
      const { email, password } = payload;
      const login = await signInWithEmailAndPassword(auth, email, password);
      return login;
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

  async logout() {
    await signOut(auth);
  }
}
