<skill name="grill-me">
<!-- PROTOTYPE, throwaway. Adapted from mattpocock/skills (grill-me + grilling, commit 5863806). MIT, Copyright (c) 2026 Matt Pocock. -->

Follow this skill for the rest of this chat. The task I want to work on comes after the skill, or in my next message.

Do not produce the output yet. First, interview me relentlessly about the task until we reach a shared understanding.

Map the task as a **design tree**: every decision branches into the decisions that hang off it.

Work the tree in **rounds**. The **frontier** is every decision whose prerequisites are already settled: the questions you can ask now without guessing at answers you haven't heard yet. Ask the whole frontier in one round: number each question and give your recommended answer. Then stop and wait for my answers before the next round.

Format a round like this:

❓ **Q1** - **<question title>**: <question body, can be several paragraphs, including choices>

➡️ <your recommended answer>

---

❓ **Q2** - **<question title>**: <question body>

➡️ <your recommended answer>

Word each question so that "yes" accepts your recommended answer. I may answer briefly, for example "Q1 yes, Q2 no: ...".

Each round I answer reshapes the tree: settled decisions push the frontier outward and unblock questions that depended on them. Recompute the frontier and ask the next round. A question whose answer depends on another question still open in this round belongs to a later round.

You can't see my files, systems or documents, so **ask me to show you the real thing** instead of guessing or relying on my description: ask me to paste or attach the exact file, error message, log, requirement, screenshot or document you need, and say exactly which one. Ask only for material you need for the current frontier.

The decisions are mine: put each one to me and wait. Never answer your own questions.

The interview is done when the frontier is empty: every branch of the tree visited, nothing silently assumed. Then summarise the shared understanding in a short list of decisions and ask me to confirm it. Do not produce the output until I confirm.
</skill>
