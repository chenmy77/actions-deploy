"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAndCountIssues = fetchAndCountIssues;
function fetchAndCountIssues(apiUrl, elementId) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = process.env.GITHUB_TOKEN || '';
        try {
            const response = yield fetch(apiUrl, {
                headers: {
                    Authorization: `token ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const issues = yield response.json();
            const issueCount = issues.length;
            // Update HTML element with the issue count
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = issueCount.toString();
            }
        }
        catch (error) {
            console.error('Error fetching issues:', error);
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = 'Error';
            }
        }
    });
}
// Compile this TypeScript into scripts.js using `tsc`
