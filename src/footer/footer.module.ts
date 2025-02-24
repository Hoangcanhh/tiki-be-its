import { Module } from "@nestjs/common";
import { footerController } from "./footer.controller";
import { footerRepository } from "./footer.repository";
import { footerService } from "./footer.service";

@Module({
    imports: [],
    controllers: [footerController],
    providers: [footerRepository, footerService],
    exports: [footerRepository, footerService]
})
export class FooterModule {}