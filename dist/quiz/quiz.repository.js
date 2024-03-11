"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let QuizRepository = class QuizRepository extends typeorm_1.Repository {
    async findAll() {
        return await this.find();
    }
    async findById(id) {
        return await this.findById(id);
    }
    async createQuiz(quiz) {
        return await this.save(quiz);
    }
    async updateQuiz(quiz) {
        return await this.save(quiz);
    }
    async deleteQuiz(id) {
        await this.delete(id);
    }
};
exports.QuizRepository = QuizRepository;
exports.QuizRepository = QuizRepository = __decorate([
    (0, common_1.Injectable)()
], QuizRepository);
//# sourceMappingURL=quiz.repository.js.map