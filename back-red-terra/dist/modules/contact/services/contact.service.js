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
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let ContactService = class ContactService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async create(data) {
        const newContact = await this.contactRepository.save(data);
        return (0, errors_1.success)({
            data: newContact,
            message: 'Contact created successfuly',
            success: true,
        });
    }
    async getByLanguage(language) {
        const contact = await this.contactRepository.findRegister({
            language,
        });
        if (!contact) {
            return (0, errors_1.failure)({
                message: 'Contact not found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: contact,
            message: 'Contact found successfully',
            success: true,
        });
    }
    async get() {
        const contact = await this.contactRepository.findRegisters();
        if (!contact) {
            return (0, errors_1.failure)({
                message: 'Contact not found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: contact,
            message: 'Contact found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedContact = __rest(data, ["id"]);
        const contactExists = await this.contactRepository.findRegister({
            id,
        });
        if (!contactExists) {
            return (0, errors_1.failure)({
                message: 'No contact found',
                success: false,
            });
        }
        const contact = await this.contactRepository.save(Object.assign(Object.assign({}, contactExists), updatedContact));
        return (0, errors_1.success)({
            data: contact,
            message: 'Contact updated successfully',
            success: true,
        });
    }
};
ContactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.ContactRepository])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map