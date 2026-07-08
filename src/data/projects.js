export const projects = [
  {
    id: 'multi-agent',
    title: 'Multi-Agent Social Media Claim Verification',
    summary: 'LangGraph-based fact-verification with pro/con debate agents',
    description:
      'Designed and implemented the core LangGraph architecture for a two-person AI verification prototype that evaluates pasted social-media claims using pro/con debate agents, retrieved web evidence, an advisor, and a final verifier. Built the parent orchestration graph, debate agents, shared state, routing logic, and user interface. Integrated Qwen 7B with Tavily web-search evidence to generate supported, refuted, or insufficient-evidence verdicts with written rationales.',
    image:
      'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&h=450&fit=crop&auto=format',
    tags: ['LangGraph', 'Python', 'Qwen 7B', 'Tavily', 'LLM Agents'],
    links: [
      { label: 'GitHub', href: 'https://github.com/cindypham04/Misinformation-Multi-Agent-Detection' },
    ],
  },
  {
    id: 'text-to-image',
    title: 'Text-to-Image Generative AI + Robustness Evaluation',
    summary: 'DCGAN generation and Stable Diffusion consistency testing',
    description:
      'Contributed architecture research and experimental planning for a three-person project that built a text-conditioned DCGAN in PyTorch using MS COCO captions, GloVe embeddings, and 64x64 image generation. Designed and implemented a robustness benchmark for Stable Diffusion models using 100 logically equivalent prompt pairs across negation, word order, composition, attributes, and spatial relations, evaluated with CLIP-based alignment and BLIP VQA. Identified recurring failures in negation, multi-object composition, and spatial reasoning.',
    image:
      'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&h=450&fit=crop&auto=format',
    tags: ['PyTorch', 'DCGAN', 'Stable Diffusion', 'CLIP', 'BLIP VQA'],
    links: [],
  },
  {
    id: 'reddit-dissent',
    title: 'Dissent in Reddit Discussions',
    summary: 'RoBERTa stance classification at scale',
    description:
      'Proposed the core project direction and conducted background research for a team study examining how dissent relates to engagement and conversational uptake across Reddit communities. Developed a RoBERTa-based stance-classification pipeline using DEBAGREEMENT parent–reply pairs, achieving 0.678 weighted F1 on agreement, neutral, and disagreement labels. Built and debugged a scalable preprocessing and batch-inference pipeline for 2.43 million comment–reply pairs across 35,569 threads.',
    image:
      'https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?w=800&h=450&fit=crop&auto=format',
    tags: ['Python', 'PyTorch', 'Hugging Face Transformers', 'RoBERTa', 'NLP'],
    links: [],
  },
];
