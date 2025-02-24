import { Module } from "@nestjs/common";
import { detailController } from "./detailPage.controller";
import { detailService } from "./detailPage.service";
import { detailRepository } from "./detailPage.repository";

@Module({
    imports: [],
    controllers: [detailController],
    providers: [detailService, detailRepository],
    exports: [detailRepository, detailService]
})

export class AppModule { }