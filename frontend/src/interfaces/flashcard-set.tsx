import Category from "./category";

interface FlashcardSet {
    id: number;
    category: Category;
    userId: number;
    name: string;
    description: string;
    createdAt: string;
    public: string;
}

export default FlashcardSet;
