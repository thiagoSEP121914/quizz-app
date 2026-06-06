// src/common/common.module.ts
import { Module, Global } from "@nestjs/common";
import { BcryptHashService } from "./infra/hash/bcrypt-hash.service";
import { HASH_SERVICE_TOKEN } from "./domain/interfaces/hash.interface";

@Global()
@Module({
  providers: [
    {
      provide: HASH_SERVICE_TOKEN,
      useClass: BcryptHashService,
    },
  ],
  exports: [HASH_SERVICE_TOKEN],
})
export class CommonModule {}
