"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const hbs = require("hbs");
const hbsutils = require("hbs-utils");
const PORT = process.env.PORT || 3000;
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const hbs_utils = hbsutils(hbs);
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        hbs_utils.registerPartials(__dirname + '/views/partials');
        hbs_utils.registerWatchedPartials(__dirname + '/views/partials');
        hbs.registerHelper('json', (context) => {
            return JSON.stringify(context);
        });
        app.useStaticAssets(path_1.join(__dirname, 'public'));
        app.setBaseViewsDir(path_1.join(__dirname, 'views'));
        app.setViewEngine('hbs');
        yield app.listen(PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map