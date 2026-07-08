export const projects = [
  {
    id: 'multi-agent',
    title: 'Multi-Agent Misinformation Detection',
    summary: 'Explainable fact-verification via LLM debate',
    description:
      'Multiple LLM agents retrieve evidence from diverse sources, debate claim credibility, and contribute weighted votes to a final verifier. Each decision includes a structured natural-language explanation tracing which agents agreed and why.',
    image:
      'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&h=450&fit=crop&auto=format',
    tags: ['Python', 'LangGraph', 'LLM Agents', 'Retrieval', 'NLP', 'Explainable AI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/cindypham04/Misinformation-Multi-Agent-Detection' },
    ],
  },
  {
    id: 'text-to-image',
    title: 'Text-to-Image Generation & Robustness Evaluation',
    summary: 'DCGAN generation with semantic robustness testing',
    description:
      'Built a DCGAN-based text-to-image model, then designed an evaluation framework measuring whether generated outputs remain semantically consistent when input prompts are reworded, reordered, or logically rearranged. Metrics include CLIPScore and VQA consistency.',
    image:
      'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&h=450&fit=crop&auto=format',
    tags: ['Python', 'PyTorch', 'DCGAN', 'CLIPScore', 'VQA', 'Computer Vision', 'NLP'],
    links: [],
  },
  {
    id: 'reddit-dissent',
    title: 'Dissent in Reddit Threads',
    summary: 'NLP study of disagreement in social conversations',
    description:
      'Applied social media mining and NLP to model how disagreement emerges in Reddit conversations. Analyzed linguistic markers, reply-chain structure, and thread topology to characterize the dynamics of online dissent across communities with different norms.',
    image:
      'https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?w=800&h=450&fit=crop&auto=format',
    tags: ['Python', 'NLP', 'Social Media Mining', 'Data Analysis', 'Reddit', 'Visualization'],
    links: [],
  },
];
