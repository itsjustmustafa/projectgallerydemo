type ProjectMetadata = {
    id: string;
    title: string;
    description: string;
    publisher: string;
    imageUrl: string;
    tags: string[];
    dateCreated: string; // ISO 8601 format (e.g., "2024-09-13")
    dateUpdated: string;
    sourceUrl: string;
    repository: string | null; // Nullable if no repo exists
    liveDemoUrl: string;
    isInteractive: boolean;
    isEmbeddable: boolean;
    estimatedCompletionTime: string; // e.g., "10 minutes"
};

export type { ProjectMetadata };
