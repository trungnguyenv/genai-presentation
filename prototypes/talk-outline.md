# PROTOTYPE: Talk outline (throwaway, rough take to react to)

For the "Talk outline" ticket on the "Generative AI talk for the team" map. This is a draft, not a decision.

Slides, then the demo after the grilling section, then the rest of the slides, then Q&A. 16 slides. Timing is worked out after the first deck is built. The metaphor of a developer who knows everything except what you expect stays on slide 2 only.

## 1. Open

1. **Let the AI grill you** (title)
   Slide point: This talk was planned by letting an AI interview me, not by writing prompts.
2. **The usual way: misunderstanding.** Think of the AI as a developer who knows everything except what you expect. You write a prompt, and wherever it doesn't say something, the AI fills the gap with guesses based on its training data, the most typical answer rather than yours. The result is confident, plausible and not what you meant. What's missing is a way to share your expectations, which sets up grilling.
   Slide point: The AI knows everything except what you expect, so it guesses.

## 2. Grilling: the main idea

3. **Flip it**: the AI asks, you answer, one round at a time. It has two benefits: it brings out what you forgot to say, and it brings in ideas you hadn't thought of.
   Slide point: Grilling means the AI interviews you until you both understand the task.
4. **Example, Copilot Chat group**: a tester asks, "I need test cases for the new password reset flow. Before you write any, grill me." Copilot asks about expired links, rate limits and which channels to cover (things the tester forgot to say). It also asks, "Should a reset sign the user out of their other sessions?", which the tester hadn't thought of.
   Slide point: The questions bring out what you forgot, and ideas you never had.
5. **Example, IDE group**: a developer asks, "Add retries to the payment client. Grill me first." The agent asks which errors can be retried and whether calls are idempotent.
   Slide point: In the IDE, grilling stops the agent from confidently changing the wrong thing.
6. **When to stop**: stop when your answers turn into "don't care". Then ask for a summary.
   Slide point: Stop when you and the AI would write the same spec.
7. **Now watch how this talk was made**: hand over to the demo.
   Slide point: This talk was made by letting the AI grill me.

## DEMO

The record tour, the live slide change and the Copilot Chat grilling round. See the "Demo script" ticket.

## 3. Sharpen the shared understanding

8. **Shared vocabulary**: "order" means three things across our teams. Point back to the GLOSSARY.md the demo showed. Copilot: paste the glossary at the start of a chat. IDE: keep GLOSSARY.md in the repo.
   Slide point: Agree on words once, and every later chat starts from them.
9. **Environment inspection**: Copilot: paste the real error, log or screenshot, or upload the document. IDE: let the agent read the files and run the tests.
   Slide point: Show the AI the real thing, not your description of it.
10. **Prototype**: Copilot: "Give me three rough versions of this bug report template." IDE: a throwaway HTML page or script.
   Slide point: React to something rough before you decide.

## 4. Then build

11. **Plan, then build**: grilling ends in a plan, and you build from that plan in a separate step.
    Slide point: Decide first, build second.
12. **Smart zone**: Copilot: the New chat button. IDE: `/clear` or a new session.
    Slide point: Start a fresh chat for each task to keep the AI at its sharpest.
13. **Skills**: package the way you work. Copilot: paste a skill inside `<skill>` tags. IDE: the tool loads it on demand.
    Slide point: Write down how you want the AI to work once, then reuse it.

## 5. Close

14. **Recap, one flow**: grill, then sharpen (vocabulary, inspection, prototype), then plan, then build in a fresh chat, all packaged as skills.
    Slide point: Understanding first, output second.
15. **Try it this week**: one grilling round on your next ticket, using the skill from the handout.
    Slide point: Start with one grilling round on your next task.
16. **Go further**: placeholder, still undecided on the map.
    Slide point: TBD.

