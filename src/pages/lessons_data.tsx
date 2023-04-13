export type Lesson = {
    title: string;
    imageLink: string;
    imageCredit: string;
    content: Module[];
}

type Module = {
    title: string;
    quickInfo: string;
    moduleLink: string;
    hook: string;
    writeup: string;
    quiz: Quiz;
    caseStudy: CaseStudy[] | null;
    precedence: number;
}

export type Quiz = {
    id: string;
    question: string[];
    options: string[][];
    correctAnswerIndex: number[];
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
};

type CaseStudy = {
    id: string;
    title: string;
    description: string;
    budgetItems: BudgetItem[];
    evaluation: BudgetEvaluation;
};

type BudgetItem = {
    id: string;
    description: string;
    amount: number;
};

type BudgetEvaluation = {
    id: string;
    status: 'good' | 'fair' | 'poor';
    comments: string;
};

export const Lessons: Lesson[] = [
    {
        title: "Introduction to Financial Literacy",
        imageLink: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        imageCredit: "Photo by Micheile Henderson on Unsplash",
        content: [
            {
                title: "Overview of the course content",
                quickInfo: "In this introductory course, learn the fundamental concepts of financial literacy. This includes budgeting, debt management, saving and investing, credit scores, insurance, and taxes",
                moduleLink: "/intro_to_financial_literacy_module",
                hook: "Welcome to our Introduction to Financial Literacy course! In this course, we cover fundamental concepts of financial literacy, including budgeting, debt management, saving and investing, credit scores, insurance, and taxes. We provide real-world examples and case studies to help you understand these concepts. We also discuss the historical context of financial literacy, from ancient societies to modern economic trends. By the end of the course, you'll have practical skills to manage your personal finances effectively.",
                writeup: `Welcome to our Introduction to Financial Literacy course! In this course, we will cover the fundamental concepts of financial literacy that are essential for managing your personal finances effectively.
                The course is divided into six main sections. We'll start with budgeting, where we'll define and discuss the importance of creating a budget plan, tracking expenses and income, and adjusting the budget as needed. We'll provide real-world examples and case studies to help you understand how to apply these concepts in your daily life.
                Next, we'll move on to debt management, where we'll define different types of debt and strategies for paying them off. We'll also discuss managing credit cards and loans, debt consolidation, and negotiation, again using real-world examples and case studies.
                After that, we'll cover saving and investing, where we'll discuss the importance of saving and investing, different types of savings and investment accounts, and setting financial goals. We'll also discuss the risks and benefits of investing, and provide more real-world examples and case studies.
                Then, we'll move on to credit scores, where we'll define and discuss the importance of credit scores, factors that affect them, and strategies for improving them. We'll again provide real-world examples and case studies to help you understand these concepts better.
                Next, we'll cover insurance, where we'll define different types of insurance and discuss their importance. We'll explain how insurance works and provide guidance on how to choose the right insurance coverage. As always, we'll use real-world examples and case studies to help you understand these concepts.
                Finally, we'll discuss taxes, where we'll define different types of taxes, tax filing requirements and deadlines, tax deductions and credits, and strategies for minimizing taxes. We'll use real-world examples and case studies to help you understand how to apply these concepts effectively.
                Throughout the course, we'll also discuss the historical context of financial literacy, including the origins of financial literacy in ancient societies, the development of coinage and currency, and the evolution of financial literacy in response to technological advancements and economic trends.
                By the end of the course, you'll have a comprehensive understanding of financial literacy and practical skills that you can apply in your daily life. Remember, financial literacy is an essential life skill, and we're excited to help you master it!
                `,
                quiz: {
                    id: "Intro Quiz",
                    question: ["Are you ready to learn?"],
                    options: [["Yes", "Absolutely", "Hang on... now I am"]],
                    correctAnswerIndex: [1],
                    category: "Quiz",
                    difficulty: "easy",
                },
                caseStudy: [
                    {
                        id: "Intro Case Study",
                        title: "First Case Study",
                        description: "Introducing case studies",
                        budgetItems: [
                            {
                                id: "BI1",
                                description: "How ready are you to learn, on a scale of 1-100?",
                                amount: 100,
                            },
                        ],
                        evaluation: {
                            id: 'E1',
                            status: 'good',
                            comments: "We're glad you're ready to learn!",
                        },
                    },
                ],
                precedence: 1,
            },
            {
                title: "Placeholder Title 1",
                quickInfo: "This should be the first, non main article",
                moduleLink: "/fakeLink1",
                hook: "This is the hook statement that will appear at the top of the file",
                writeup: `This is the actual meat and potatoes of the content. Lorem ipsum dolor sit amet...`,
                quiz:{
                    id: 'fake Quiz 1',
                    question: ["fake question"],
                    options: [["answer 1", "answer 2", "answer 3"]],
                    correctAnswerIndex: [1],
                    category: "Quiz",
                    difficulty: "easy"
                },
                caseStudy: null,
                precedence: 2,
            },
            {
                title: "placeholder title 2",
                quickInfo: "This should be the second, non main article",
                moduleLink: "/fakeLink2",
                hook: "This is the hook statement that will appear at the top of the file",
                writeup: `This is the actual meat and potatoes of the content. Lorem ipsum dolor sit amet...`,
                quiz:{
                    id: 'fake Quiz 2',
                    question: ["fake question"],
                    options: [["answer 1", "answer 2", "answer 3"]],
                    correctAnswerIndex: [1],
                    category: "Quiz",
                    difficulty: "easy"
                },
                caseStudy: null,
                precedence: 3,
            }
        ],
    },
    {
        title: "Fake Title",
        imageLink: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        imageCredit: "Photo by Micheile Henderson on Unsplash",
        content: [
            {
                title: "placeholder title 3",
                quickInfo: "filler text",
                moduleLink: "/fakeLink3",
                hook: "Hook",
                writeup: "Lorem Ipsum dolor sit", // Shortened for brevity
                quiz: {
                    id: "Fake quiz 3",
                    question: ["Are you ready to learn?"],
                    options: [["Yes", "Absolutely", "Hang on... now I am"]],
                    correctAnswerIndex: [1],
                    category: "Quiz",
                    difficulty: "easy",
                },
                caseStudy: null,
                precedence: 1,
            },
            {
                title: "placeholder title 4",
                quickInfo: "This should be the first, non main article of the second header",
                moduleLink: "/fakeLink4",
                hook: "This is the hook statement that will appear at the top of the file",
                writeup: `This is the actual meat and potatoes of the content. Lorem ipsum dolor sit amet...`,
                quiz:{
                    id: 'fake Quiz 4',
                    question: ["fake question"],
                    options: [["answer 1", "answer 2", "answer 3"]],
                    correctAnswerIndex: [1],
                    category: "Quiz",
                    difficulty: "easy"
                },
                caseStudy: null,
                precedence: 2,
            },
            {
                title: "placeholder title 5",
                quickInfo: "This should be the second, non main article of the second header",
                moduleLink: "/fakeLink5",
                hook: "This is the hook statement that will appear at the top of the file",
                writeup: `This is the actual meat and potatoes of the content. Lorem ipsum dolor sit amet...`,
                quiz:{
                    id: 'fake Quiz 5',
                    question: ["fake question"],
                    options: [["answer 1", "answer 2", "answer 3"]],
                    correctAnswerIndex: [1],
                    category: "Quiz",
                    difficulty: "easy"
                },
                caseStudy: null,
                precedence: 3,
            }
        ],
    },
];

export default Lessons;