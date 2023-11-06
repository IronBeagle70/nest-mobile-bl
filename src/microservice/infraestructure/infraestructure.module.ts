import { Module } from '@nestjs/common';
import { MicroserviceClientsModule } from './microservice-clients/microservice-clients.module';

@Module({
  imports: [MicroserviceClientsModule],
  exports: [MicroserviceClientsModule]
})
export class InfraestructureModule {}
