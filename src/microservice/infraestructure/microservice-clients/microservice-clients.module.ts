import { Module } from '@nestjs/common';
import { FirebaseClient } from './http/firebase.client';

@Module({
  providers: [FirebaseClient],
  exports: [FirebaseClient],
})
export class MicroserviceClientsModule {}
