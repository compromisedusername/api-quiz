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
exports.QuizResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const uuid_1 = require("uuid");
const quiz_service_1 = require("./quiz.service");
const quiz_entity_1 = require("./../entities/quiz.entity");
const createquiz_input_1 = require("./../dto/quiz/createquiz.input");
const updatequiz_input_1 = require("./../dto/quiz/updatequiz.input");
const question_entity_1 = require("./../entities/question.entity");
const sortinganswer_entity_1 = require("../entities/sortinganswer.entity");
const answer_entity_1 = require("./../entities/answer.entity");
let QuizResolver = class QuizResolver {
    constructor(quizService) {
        this.quizService = quizService;
    }
    async createQuiz(createQuizInput) {
        const questions = createQuizInput.questions.map(mapQuestionInputToQuestion);
        const newQuiz = {
            id: (0, uuid_1.v4)(),
            name: createQuizInput.name,
            questions,
        };
        const createdQuiz = await this.quizService.create(newQuiz);
        return createdQuiz;
    }
    async findAll() {
        return this.quizService.findAll();
    }
    async findOne(id) {
        return this.quizService.findById(id);
    }
    async updateQuiz(updateQuizInput) {
        return this.quizService.update(updateQuizInput.id, updateQuizInput);
    }
    async removeQuiz(id) {
        return this.quizService.delete(id);
    }
};
exports.QuizResolver = QuizResolver;
__decorate([
    (0, graphql_1.Mutation)(() => quiz_entity_1.Quiz),
    __param(0, (0, graphql_1.Args)('createQuizInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createquiz_input_1.CreateQuizInput]),
    __metadata("design:returntype", Promise)
], QuizResolver.prototype, "createQuiz", null);
__decorate([
    (0, graphql_1.Query)(() => [quiz_entity_1.Quiz], { name: 'quizzes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuizResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => quiz_entity_1.Quiz, { name: 'quiz' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuizResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => quiz_entity_1.Quiz),
    __param(0, (0, graphql_1.Args)('updateQuizInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updatequiz_input_1.UpdateQuizInput]),
    __metadata("design:returntype", Promise)
], QuizResolver.prototype, "updateQuiz", null);
__decorate([
    (0, graphql_1.Mutation)(() => quiz_entity_1.Quiz),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuizResolver.prototype, "removeQuiz", null);
exports.QuizResolver = QuizResolver = __decorate([
    (0, graphql_1.Resolver)(() => quiz_entity_1.Quiz),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizResolver);
function mapQuestionInputToQuestion(input) {
    const question = new question_entity_1.Question();
    question.text = input.text;
    question.questionType = input.questionType;
    if (input.answers) {
        question.answers = input.answers.map((answerInput) => {
            const answer = new answer_entity_1.Answer();
            answer.text = answerInput.text;
            answer.isCorrect = answerInput.isCorrect;
            answer.question = question;
            return answer;
        });
    }
    if (input.sortingAnswer) {
        question.sortingAnswer = input.sortingAnswer.map((sortingAnswerInput) => {
            const sortingAnswer = new sortinganswer_entity_1.SortingAnswer();
            sortingAnswer.answerText = sortingAnswerInput.answerText;
            sortingAnswer.correctOrder = sortingAnswerInput.correctOrder;
            sortingAnswer.question = question;
            return sortingAnswer;
        });
    }
    return question;
}
//# sourceMappingURL=quiz.resolver.js.map