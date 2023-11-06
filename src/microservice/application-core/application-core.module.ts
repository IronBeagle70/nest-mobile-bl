import { Module } from '@nestjs/common';
import { RegisterInteractor } from './auth/use-cases/register.interactor';
import { InfraestructureModule } from '../infraestructure/infraestructure.module';

const services = [RegisterInteractor];

@Module({
  imports: [InfraestructureModule],
  providers: services,
  exports: services,
})
export class ApplicationCoreModule {}

// client -> interactor con exucte -> controller
