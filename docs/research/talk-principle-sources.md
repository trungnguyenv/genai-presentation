# Sources for the talk's principles

Research for [#3](https://github.com/trungnguyenv/genai-presentation/issues/3), part of the map [#1](https://github.com/trungnguyenv/genai-presentation/issues/1). Researched 2026-11-19.

The question: which citable primary sources back each idea the **talk** teaches, and does the mattpocock/skills licence let us hand out adapted copies of the skills inside the company?

## Short answer

| Idea | Best primary source | Backup source |
| --- | --- | --- |
| Grilling | [`grilling` SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/productivity/grilling/SKILL.md) and its [docs page](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/docs/productivity/grilling.md) | Matt's post [My 'Grill Me' Skill Went Viral](https://www.aihero.dev/my-grill-me-skill-has-gone-viral) (has a video); Anthropic's [Claude Code best practices, "Brainstorm with Claude first"](https://code.claude.com/docs/en/best-practices#brainstorm-with-claude-first) |
| grill-me | [`grill-me` SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/productivity/grill-me/SKILL.md) and [docs page](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/docs/productivity/grill-me.md) | [5 Agent Skills I Use Every Day](https://www.aihero.dev/5-agent-skills-i-use-every-day) (has a video) |
| Prototype | [`prototype` SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/engineering/prototype/SKILL.md) and [docs page](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/docs/engineering/prototype.md) | AI Coding Dictionary: [Prototyping](https://www.aihero.dev/ai-coding-dictionary/prototyping) |
| Environment inspection | Claude Academy, [Building with the Claude API, lesson 66 "Environment inspection"](https://academy.claude.com/courses/building-with-the-claude-api/environment-inspection) | Claude Code best practices, ["Tell Claude what it can't see"](https://code.claude.com/docs/en/best-practices#tell-claude-what-it-cant-see); AI Coding Dictionary: [Environment](https://www.aihero.dev/ai-coding-dictionary/environment) |
| Plan, then build | [`ask-matt` SKILL.md, "The main flow: idea → ship"](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/engineering/ask-matt/SKILL.md) | Claude Code best practices, ["Brainstorm with Claude first"](https://code.claude.com/docs/en/best-practices#brainstorm-with-claude-first) |
| Smart zone (fresh chat per task) | AI Coding Dictionary: [Smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone) | Claude Code best practices, ["Keep cost and context down"](https://code.claude.com/docs/en/best-practices#keep-cost-and-context-down) (`/clear` between unrelated tasks) |
| Shared vocabulary | [mattpocock/skills README, "#2: The Agent Is Way Too Verbose"](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/README.md) | [`wait-what` docs page](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/docs/productivity/wait-what.md) |
| wait-what | [`wait-what` SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/productivity/wait-what/SKILL.md) and [docs page](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/docs/productivity/wait-what.md) | — |
| Skills as reusable prompts | AI Coding Dictionary: [Skill](https://www.aihero.dev/ai-coding-dictionary/skill) | Claude Code best practices, ["Put team procedures in skills"](https://code.claude.com/docs/en/best-practices#put-team-procedures-in-skills) |

**Licence:** mattpocock/skills is under the **MIT License** ([LICENSE](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/LICENSE), "Copyright (c) 2026 Matt Pocock"). MIT lets anyone "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies". So sharing adapted copies in an internal handout is allowed. The one condition: "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software." See [Licence](#licence) for the wording to put in the handout. MIT covers the repo only; the aihero.dev pages and the Claude Academy lesson are not under it, so quote them briefly and link them.

All GitHub links are pinned to commit `5863806dd4e15c63174bee4e7515a4256792ecfa` (2026-11-12). That commit is the current `main` on 2026-11-19, and it is the same commit that `~/home-repo/skills-lock.json` pins for the local copies in `~/home-repo/.agents/skills/`. So the local copies and the cited text are the same.

## Grilling

**What the skill says.** The whole of the `grilling` skill body opens with: "Interview the user relentlessly until you reach a shared understanding. Map this as a **design tree**: every decision branches into the decisions that hang off it." ([SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/productivity/grilling/SKILL.md))

Other lines from the same file that are good on a slide:

- Each round asks the "frontier": "every decision whose prerequisites are already settled". The agent numbers each question and gives "your recommended answer".
- "Word each question so "yes" accepts your recommended answer."
- "Finding _facts_ is your job, never the user's." and "The _decisions_ are the user's: put each to them and wait." This line also links grilling to **environment inspection**: the agent looks things up instead of asking you.
- "Do not act on it until the user confirms you have reached a shared understanding."

**Why it exists.** The [AI Coding Dictionary entry for Grilling](https://www.aihero.dev/ai-coding-dictionary/grilling) (Matt Pocock, updated 2026-11-12) gives the reason most useful to the **audience**: "The technique exists because agents fill gaps silently." And: "Grilling inverts this — instead of guessing, the agent has to ask."

Note: that dictionary entry says the agent asks "one decision at a time". The current skill asks in rounds (all independent questions at once). The [grilling docs page](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/docs/productivity/grilling.md) says rounds are the default and that "When grilling, ask one question at a time." in your `CLAUDE.md` turns the old way back on. For the **talk**, either form is fine; quote the skill, not the dictionary, on this detail.

**The original, short form.** Matt's post [My 'Grill Me' Skill Went Viral](https://www.aihero.dev/my-grill-me-skill-has-gone-viral) (updated 2026-03-23, with a video embedded on the page) shows the early version of the skill:

> Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree resolving dependencies between decisions one by one.
>
> If a question can be answered by exploring the codebase, explore the codebase instead.
>
> For each question, provide your recommended answer.

This short form is the best one for the **Copilot Chat group**: it fits in one paste. The same post gives a non-coding variant (drop the codebase line) and says "These grilling sessions often last about 45 minutes."

In [5 Agent Skills I Use Every Day](https://www.aihero.dev/5-agent-skills-i-use-every-day) (updated 2026-03-16, video on the page), Matt credits the "design tree" to Frederick P. Brooks, _The Design of Design_, and says: "Skills don't have to be long to be impactful. You just need to choose the right words at the right time."

**Anthropic says the same.** The official [Claude Code best practices](https://code.claude.com/docs/en/best-practices#brainstorm-with-claude-first) page: "When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead". Its example prompt: "Interview me until you could write the spec, then write it to SPEC.md." This is a useful second source for an enterprise audience: it is not only one blogger's idea.

## grill-me

`grill-me` is a one-line wrapper: its body is "Call the Skill tool with "grilling"." It has `disable-model-invocation: true`, so only the user starts it ([SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/productivity/grill-me/SKILL.md)). Points from its [docs page](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/docs/productivity/grill-me.md) that suit the **talk**:

- It is "**stateless**. It writes no files", and it works for anything, not only code: "People use it for business decisions, for writing, and for what to do next".
- "Start it in a **fresh conversation**, not on top of a plan you already had an agent write."
- "Leave plan mode off. Plan mode makes the agent hurry to produce a plan, when you want it to keep asking questions."
- On the failure mode: "The failure mode is **passivity**: answering "agreed, agreed, agreed" for forty questions and coming out with a plan the agent wrote and you nodded at."
- "Grillable and ungrillable": some questions ("how should this interaction feel?") can't be answered by talking. "When you hit one, stop grilling. Build the throwaway version with prototype". This is the bridge from grilling to **prototype**.

Note for a handout: in the current repo, `grill-me` does nothing without `grilling` installed too ("`grill-me` is a one-line skill whose whole body is "run a `/grilling` session", so it needs this skill installed too" — grilling docs page). For a paste-in handout for the **Copilot Chat group**, give the text of `grilling` (or the short form above), not the text of `grill-me`.

## Prototype

From the [`prototype` SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/engineering/prototype/SKILL.md): "A prototype is **throwaway code that answers a question**. The question decides the shape." Rules include "Skip the polish. No tests, no error handling beyond what makes the prototype _runnable_, no abstractions. The point is to learn something fast."

From its [docs page](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/docs/engineering/prototype.md):

- "Reach for it the moment you hit a question you can't settle by talking".
- "Throwaway is a constraint on how the code is *written*, not a promise to destroy it."
- On cost: "The comparison that matters isn't tokens against zero; it's tokens against building the wrong state model and finding out after it has production callers."
- A caution: "Should I prototype the whole application...?" No: "A prototype here is scoped to one question".

The [AI Coding Dictionary entry for Prototyping](https://www.aihero.dev/ai-coding-dictionary/prototyping) has the plainest framing, good for non-coding uses (the glossary's **Prototype** is broader than code): "Having the agent build a quick, rough version of something, for when conversation is too low-fidelity and you need a real artifact to talk about." And: "A rough version that used to take a day to mock up now takes minutes, so it's worth doing routinely."

Note: the skill itself is about code (an HTML state-model demo, or UI variants on a route). The talk's **Prototype** (glossary: "A cheap, rough version of the output") is wider, for example a rough draft of a test plan. The dictionary entry supports that wider sense; the skill does not, so cite the dictionary for it.

## Environment inspection

Source: Claude Academy, course "Building with the Claude API", [lesson 66 of 67, "Environment inspection"](https://academy.claude.com/courses/building-with-the-claude-api/environment-inspection). It is a 2-minute text page (not video-only, no login needed when fetched on 2026-11-19). No author or date on the page; footer "© 2026 Anthropic PBC".

What it teaches: an agent must be able to see the results of what it does. Its examples are computer use (a screenshot after each click), reading a file before editing it, and a system prompt that tells a video agent to check its own output (captions with whisper.cpp, frames with FFmpeg). Benefits it lists: better progress tracking, error handling, quality assurance, adaptive behaviour.

Quotable lines (verbatim):

- "When building AI agents, one crucial concept often gets overlooked: environment inspection."
- "Claude operates blindly - it needs to be able to observe and understand the results of its actions to work effectively."
- "Before Claude can modify any file, it needs to understand the current contents. This might seem obvious, but it's a pattern you should always follow when building agents."
- "When designing your own agents, always ask: "How will Claude know if this action worked?""
- "Environment inspection transforms Claude from a blind executor of commands into an agent that can truly understand and adapt to its working environment."

Fit with the glossary: the lesson is written for people **building** agents on the API. The talk's **Environment inspection** ("Letting the AI look at the real material ... instead of working from your description of it") is the user-side version of the same idea. Say this on the slide, so nobody thinks the lesson is about chat users. For the user side, the [Claude Code best practices](https://code.claude.com/docs/en/best-practices#tell-claude-what-it-cant-see) page is closer: "Claude starts every task by reading your code, and current models are *very* good at this." It also shows how to hand Claude the real thing: a file with `@`, a pasted screenshot of the error, or piped command output (`cat error.log | claude -p "what's going on here"`). Matt's [Environment](https://www.aihero.dev/ai-coding-dictionary/environment) entry adds: "The agent only sees the environment when it looks."

## Plan, then build

The [`ask-matt` SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/engineering/ask-matt/SKILL.md) states the order Matt uses, "The main flow: idea → ship": grill (`/grill-with-docs`), detour through a prototype if a question needs a runnable answer, then `/to-spec` and `/to-tickets`, then build with `/implement`. It says to keep grilling, spec and tickets "in **one unbroken context window**", and then "Each `/implement` then starts fresh, working from the ticket."

[5 Agent Skills I Use Every Day](https://www.aihero.dev/5-agent-skills-i-use-every-day) explains the same chain in prose. On why grilling comes before a plan: "Claude Code tends to spit out a plan really early when in plan mode, creating a document before we've truly understood each other." On the spec: "The spec describes your destination. But what you really need is the journey to get there."

Anthropic's [best practices](https://code.claude.com/docs/en/best-practices#brainstorm-with-claude-first) give the simplest form for the **audience**: "Once `SPEC.md` exists, start a fresh session to build from it, so the build begins with a clean context and a written definition of done."

Note: there is no single mattpocock skill called "plan then build". The idea is the shape of the main flow. Cite `ask-matt` or the Anthropic page, not a skill name.

## Smart zone (fresh chat per task)

Source: AI Coding Dictionary, [Smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone), by Matt Pocock, updated 2026-11-12. (A `WebFetch` of this URL returned 404 on 2026-11-19, but a normal browser request returned the page. If a link checker reports it broken, open it in a browser.)

Quotable lines (verbatim):

- "Early in a session the agent is in a "smart zone" — sharp, focused, recall is good. As the session grows it drifts into a "dumb zone": sloppier, forgetful, more mistakes"
- "Same model, same harness — just more context."
- "On frontier models, the dumb zone commonly begins around 125K-150K tokens — though this is debated."
- "Clear or compact when the session bloats; don't push through."
- "The decline is gradual, which makes it easy to miss. There's no error message and no visible boundary".
- "The smart zone is a budget, and unrelated work spends it." ... "Doing one task per session gives each task the sharpest part of the session."
- Usage example: "It nailed the first three components and just butchered the fourth."

The skills repo uses the same figure: `ask-matt` calls it "the window (~150k tokens on state-of-the-art models) within which the model still reasons sharply" ([SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/engineering/ask-matt/SKILL.md)). The [CHANGELOG](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/CHANGELOG.md) records "the smart zone figure is updated from ~120k to ~150k tokens". The number moves; on a slide, say "well before the context window is full" rather than a fixed number.

Anthropic agrees on the practice but not on the urgency. Its [best practices](https://code.claude.com/docs/en/best-practices#keep-cost-and-context-down): "`/clear` between unrelated tasks. It costs nothing, and it means the next task doesn't keep paying for the previous one's history." And in "What you can stop doing": "Most current models have a 1M-token window and compaction happens on its own, so running out is rare. `/clear` between tasks is still worth doing, because a focused context gets you better answers and costs less." So both sources say "fresh chat per task"; Anthropic frames it as better answers and lower cost, Matt as quality drop. Also: "after two failed corrections run `/clear` and write a better prompt instead of a third." That last line is a good, practical tip for the **Copilot Chat group** (start a new chat).

## Shared vocabulary

Source: the [mattpocock/skills README](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/README.md), section "#2: The Agent Is Way Too Verbose". It quotes Eric Evans, _Domain-Driven Design_: "With a ubiquitous language, conversations among developers and expressions of the code are all derived from the same domain model." Then:

- "Agents are usually dropped into a project and asked to figure out the jargon as they go. So they use 20 words where 1 will do."
- "The Fix for this is a shared language. It's a document that helps agents decode the jargon used in the project."
- A before/after example: "BEFORE: "There's a problem when a lesson inside a section of a course is made 'real' (i.e. given a spot in the file system)"" / "AFTER: "There's a problem with the materialization cascade"".
- "It might be the single coolest technique in this repo."
- Benefits listed: consistent naming, an easier codebase to navigate, and "The agent also spends fewer tokens on thinking".

The skills that build it are `grill-with-docs` and `domain-modeling` (they write `GLOSSARY.md`). This repo's own [GLOSSARY.md](../../GLOSSARY.md) is a live example to show in the **demo**.

## wait-what

[`wait-what` SKILL.md](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/productivity/wait-what/SKILL.md), whole body:

> Wait, I don't understand where you've got to here. Re-pitch that: give me a little bit of context, talk in ASD-STE100 Simplified Technical English, and use the ubiquitous language from `GLOSSARY.md` (follow `GLOSSARY-MAP.md` to the right one if the repo has more than one).

From its [docs page](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/docs/productivity/wait-what.md):

- "The skill is three lines long. That is the design, not an unfinished draft." ... "the model copies the length of the skill, not its request."
- "The name is the mechanism": ""Be concise" is an instruction about the agent's output, and the model obeys it by clipping words and losing you further. **Wait** is about *your* state."
- "It repairs one message after the fact. The real fix is a shared language agreed upfront".

This is the cleanest example in the repo that a **skill** can be tiny, and it ties to **shared vocabulary**. It works in Copilot Chat as a pasted line (the `GLOSSARY.md` part needs a file, so drop it or paste the glossary too).

## Skills as reusable prompts

[AI Coding Dictionary: Skill](https://www.aihero.dev/ai-coding-dictionary/skill) (Matt Pocock, updated 2026-11-12): "A teachable capability bundled as a unit — instructions and resources for doing one task well". "Skills are an open standard, defined at agentskills.io — originally developed by Anthropic and since adopted by most major harnesses, so a skill written once works across them." "Only the name and description sit in context by default. When the agent's task matches, it loads the rest."

Anthropic, [best practices, "Put team procedures in skills"](https://code.claude.com/docs/en/best-practices#put-team-procedures-in-skills): "A more capable model knows more about engineering, but not how *your* team does a release, what your incident runbook says, or how you want API docs written. That kind of knowledge goes in a skill". This is a good enterprise-facing line.

Note: both sources describe skills as files an agent tool loads. The glossary's second half ("in a chat tool you paste it in at the start of a new chat") is the talk's own adaptation for the **Copilot Chat group**. No source says pasting a skill into Copilot Chat works the same way. That is fine, but present it as our practice, not as a cited claim.

## Licence

- **Licence:** MIT. GitHub's licence detection reports `MIT` (SPDX `MIT`) for mattpocock/skills, `package.json` says `"license": "MIT"`, and the [LICENSE file](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/LICENSE) is the standard MIT text with "Copyright (c) 2026 Matt Pocock". No skill used by the talk has its own different licence. (One skill not used by the talk, `pr`, has a `CREDITS.md` for text copied from Dex Horthy's `show-me` skill; this does not affect us.)
- **Does it allow adapted copies in an internal handout?** Yes. The grant covers to "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software", with no limit on commercial or internal use. The README also invites it: "Hack around with them. Make them your own."
- **What attribution is required?** Only this: "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software." So the handout must carry the copyright line and the MIT permission text (the full LICENSE text, which is short). A link alone does not meet the condition. A source link and a note that we changed the text are good practice but not required.
- **What MIT does not cover.** The aihero.dev pages (dictionary, blog posts, videos), the Claude Academy lesson and the Claude Code docs are not part of the repo, so MIT does not apply to them. Quote short lines with a link (as this file does); don't copy whole pages into the handout. The `docs/*.md` pages inside the repo are covered by MIT, since they are in the repo.

Suggested handout footer for the adapted skills:

```
Adapted from mattpocock/skills (https://github.com/mattpocock/skills),
commit 5863806. Changed for our team.

MIT License

Copyright (c) 2026 Matt Pocock

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

This is not legal advice. If the company has an open-source policy for reusing MIT text, check it, but MIT is the most permissive common licence and rarely a problem.

## Things that could trip up the talk

- **The skills change often.** Between March and November 2026, `grill-me` went from a short self-contained prompt to a one-line wrapper over `grilling`, the "one question at a time" style became rounds, the smart zone figure moved from ~120k to ~150k tokens, and `to-prd`/`to-issues` were renamed `to-spec`/`to-tickets`. Pin every quote to commit `5863806` (as above) and avoid version-specific numbers on slides.
- **Several skills depend on other skills.** `grill-me` needs `grilling`; `grill-with-docs` also needs `domain-modeling`. A handout copy must inline the text it depends on.
- **The Academy lesson is aimed at API builders**, not chat users (see Environment inspection).

## Sources

All fetched 2026-11-19.

- mattpocock/skills at commit `5863806dd4e15c63174bee4e7515a4256792ecfa`: [README](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/README.md), [LICENSE](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/LICENSE), [CHANGELOG](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/CHANGELOG.md), skills `grilling`, `grill-me`, `prototype`, `wait-what`, `ask-matt` and their `docs/` pages (linked above). Local copies: `~/home-repo/.agents/skills/`, pinned in `~/home-repo/skills-lock.json`.
- Claude Academy: [Environment inspection](https://academy.claude.com/courses/building-with-the-claude-api/environment-inspection).
- Anthropic: [Best practices for Claude Code](https://code.claude.com/docs/en/best-practices) (also reached from the old URL anthropic.com/engineering/claude-code-best-practices, which now redirects there).
- AI Hero (Matt Pocock): AI Coding Dictionary entries [Smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone), [Grilling](https://www.aihero.dev/ai-coding-dictionary/grilling), [Prototyping](https://www.aihero.dev/ai-coding-dictionary/prototyping), [Environment](https://www.aihero.dev/ai-coding-dictionary/environment), [Skill](https://www.aihero.dev/ai-coding-dictionary/skill); posts [My 'Grill Me' Skill Went Viral](https://www.aihero.dev/my-grill-me-skill-has-gone-viral) and [5 Agent Skills I Use Every Day](https://www.aihero.dev/5-agent-skills-i-use-every-day) (each embeds a video hosted on aihero.dev); [skills catalogue](https://www.aihero.dev/skills).
