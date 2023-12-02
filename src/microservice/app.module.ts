import { Module } from '@nestjs/common';
import { ApplicationCoreModule } from './application-core/application-core.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [
    ApplicationCoreModule,
    InfraestructureModule,
    UserInterfaceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FirebaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
