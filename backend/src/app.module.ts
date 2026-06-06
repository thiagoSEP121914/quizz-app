import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { QuestionModule } from "./modules/Question/question.module";
import { HealthController } from "./common/presentation/health.controller";
import { env } from "./common/infra/env/env";
import { CommonModule } from "./common/common.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(env.MONGO_URL || "mongodb://localhost:27017/test"),
    CommonModule,
    QuestionModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
