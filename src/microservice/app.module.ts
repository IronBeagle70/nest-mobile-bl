import { Module } from '@nestjs/common';
import { ApplicationCoreModule } from './application-core/application-core.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ApplicationCoreModule,
    InfraestructureModule,
    UserInterfaceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
