import { Controller, Get, VERSION_NEUTRAL } from "@nestjs/common";

@Controller({
  version: VERSION_NEUTRAL,
})
export class HealthController {
  @Get()
  showFooBar() {
    return {
      message: "FooBar",
    };
  }
}
