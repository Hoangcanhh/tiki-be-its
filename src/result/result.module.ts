import { Module } from "@nestjs/common";
import { resultController } from "./result.controller";
import { resultRepository } from "./result.repository";
import { resultService } from "./result.service";

@Module({
    imports: [],
    controllers: [resultController],
    providers: [resultRepository, resultService],
    exports: [resultRepository, resultService]
})
export class AppModule {}