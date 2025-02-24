import { Module } from "@nestjs/common";
import { homePageController } from "./homePage.controller";
import { homePageRepository } from "./homePage.repository";
import { homePageService } from "./homePage.service";

@Module({
    imports: [],
    controllers: [homePageController],
    providers: [homePageRepository, homePageService],
    exports: [homePageRepository, homePageService]
})

export class AppModule {}