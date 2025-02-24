import { Module } from "@nestjs/common";
import { headerRepository } from "./header.repository";
import { headerService } from "./header.service";

@Module({
    imports: [],
    controllers: [headerRepository],
    providers: [headerRepository, headerService],
    exports: [headerRepository, headerService]
})
export class HeaderModule {}