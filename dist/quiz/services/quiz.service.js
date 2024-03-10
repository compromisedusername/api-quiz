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
exports.QuizService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const quiz_entity_1 = require("./../../entities/quiz.entity");
let QuizService = class QuizService {
    findByIds(questionsIds) {
        throw new Error('Method not implemented.');
    }
    findOne(id) {
        throw new Error('Method not implemented.');
    }
    remove(id) {
        throw new Error('Method not implemented.');
    }
    constructor(quizRepository) {
        this.quizRepository = quizRepository;
    }
    async findAll() {
        return await this.quizRepository.find();
    }
    async findById(id) {
        return await this.quizRepository.findOne({ where: { id } });
    }
    async create(quiz) {
        return await this.quizRepository.save(quiz);
    }
    async update(id, quiz) {
        const existingQuiz = await this.quizRepository.findOne({ where: { id } });
        if (!existingQuiz) {
            throw new Error('Quiz not found');
        }
        return await this.quizRepository.save({ ...existingQuiz, ...quiz });
    }
    async delete(id) {
        await this.quizRepository.delete({ id });
    }
};
exports.QuizService = QuizService;
exports.QuizService = QuizService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(quiz_entity_1.Quiz)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QuizService);
//# sourceMappingURL=quiz.service.js.map