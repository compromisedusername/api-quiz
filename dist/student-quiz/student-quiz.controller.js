"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentQuizController = void 0;
const common_1 = require("@nestjs/common");
const quiz_resolver_1 = require("./../quiz/quiz.resolver");
let StudentQuizController = class StudentQuizController {
    constructor(quizResolver) {
        this.quizResolver = quizResolver;
    }
    async findAll() {
        return await this.quizResolver.findAll();
    }
    async findOne(id) {
        return await this.quizResolver.findOne(id);
    }
};
exports.StudentQuizController = StudentQuizController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentQuizController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentQuizController.prototype, "findOne", null);
exports.StudentQuizController = StudentQuizController = __decorate([
    (0, common_1.Controller)('student/quiz'),
    __metadata("design:paramtypes", [quiz_resolver_1.QuizResolver])
], StudentQuizController);
//# sourceMappingURL=student-quiz.controller.js.map