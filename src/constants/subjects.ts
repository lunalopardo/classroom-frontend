import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "An introductory course on computer science principles, algorithms, and programming.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        department: "Math",
        description: "Advanced study of integration, sequences, series, and power series.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG102",
        name: "English Literature",
        department: "English",
        description: "Analysis and interpretation of classic and contemporary literature in English.",
        createdAt: new Date().toISOString(),
    }
];
