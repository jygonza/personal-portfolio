# Project Review

## Project Name
Misinformation Multi-Agent Detection

## Project Type
Personal project

## Dates
2026

## Repository Status
Needs cleanup — functional prototype but README notes agent reasoning is still incomplete

## Team Size
2

## My Role
initial literature review, helped connect the project direction to prior work on multi-agent debate and fact verification, and developed the initial LangGraph implementation outline. implemented major components of the system architecture, including the parent graph, shared state
schemas, and debater subgraph.

## Problem
Misinformation spreads faster than manual fact-checking can scale. Single-model AI classifiers often exhibit confirmation bias. This project explores whether a multi-agent debate architecture — where opposing agents argue for and against a claim — can produce more balanced, explainable verdicts.

## Intended Users
- Researchers studying automated fact-checking approaches
- Developers building misinformation detection tools
- Anyone wanting to understand how multi-agent AI systems can be structured for adversarial reasoning

## Final Result
A working end-to-end pipeline that:
- Accepts a claim via CLI or Streamlit web UI
- Runs bilateral debate rounds (negative vs. affirmative agents)
- Retrieves evidence from reliable sources via Tavily API
- Generates advisor analysis identifying argument gaps
- Produces a final verdict (supported/refuted/insufficient) with rationale
- Includes a batch evaluation framework with checkpointing

## Current Limitations
- Agent reasoning quality depends heavily on the underlying LLM (currently Ollama with qwen:7b)
- No ground-truth benchmark dataset included for rigorous accuracy measurement
- Debate arguments are sometimes shallow; deeper chain-of-thought prompting could improve quality
- No authentication or rate limiting on the web UI
- Limited to English-language claims
