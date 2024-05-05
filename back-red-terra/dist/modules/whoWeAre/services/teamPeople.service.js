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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPeopleService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let TeamPeopleService = class TeamPeopleService {
    constructor(teamPeopleRepository) {
        this.teamPeopleRepository = teamPeopleRepository;
    }
    async create(data) {
        const { language } = data, teamPeople = __rest(data, ["language"]);
        const newTeamPeople = await this.teamPeopleRepository.save(Object.assign(Object.assign({}, teamPeople), { language }));
        return (0, errors_1.success)({
            data: newTeamPeople,
            message: 'Team people created successfuly',
            success: true,
        });
    }
    async delete(teamPeopleId) {
        if (!(teamPeopleId === null || teamPeopleId === void 0 ? void 0 : teamPeopleId.length)) {
            return (0, errors_1.failure)({
                data: 'Team people id',
                message: 'Must pass an id',
                success: false,
            });
        }
        if (!(await this.teamPeopleRepository.findRegister({ id: teamPeopleId }))) {
            return (0, errors_1.failure)({
                data: 'Does not exist id',
                message: `ID: ${teamPeopleId} does not exist`,
                success: false,
            });
        }
        const deletedId = await this.teamPeopleRepository.delete(teamPeopleId);
        return (0, errors_1.success)({
            data: deletedId,
            message: 'Team people deleted successfuly',
            success: true,
        });
    }
    async get() {
        const teamPeople = await this.teamPeopleRepository.findRegisters();
        if (!teamPeople) {
            return (0, errors_1.failure)({
                message: 'No teamPeople found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: teamPeople,
            message: 'Team people found successfully',
            success: true,
        });
    }
    async getByWhatWeDo(id) {
        const teamPeople = await this.teamPeopleRepository.findRegister({
            id,
        });
        if (!teamPeople) {
            return (0, errors_1.failure)({
                message: 'No teamPeople found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: teamPeople,
            message: 'Team people found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedTeamPeople = __rest(data, ["id"]);
        const teamPeopleExists = await this.teamPeopleRepository.findRegister({
            id,
        });
        if (!teamPeopleExists) {
            return (0, errors_1.failure)({
                message: 'No teamPeople found',
                success: false,
            });
        }
        const teamPeople = await this.teamPeopleRepository.save(Object.assign(Object.assign({}, teamPeopleExists), updatedTeamPeople));
        return (0, errors_1.success)({
            data: teamPeople,
            message: 'Team people updated successfully',
            success: true,
        });
    }
};
TeamPeopleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.TeamPeopleRepository])
], TeamPeopleService);
exports.TeamPeopleService = TeamPeopleService;
//# sourceMappingURL=teamPeople.service.js.map