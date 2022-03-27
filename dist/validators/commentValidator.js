"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentValidator = void 0;
const Joi = __importStar(require("joi"));
exports.commentValidator = {
    comment: Joi.object({
        id: Joi.number(),
        text: Joi.string().required(),
        like: Joi.number().min(0).required(),
        dislike: Joi.number().min(0).required(),
        authorId: Joi.number().min(0).required(),
        postId: Joi.number().min(0).required(),
        title: Joi.string().required(),
    }),
};
//# sourceMappingURL=commentValidator.js.map