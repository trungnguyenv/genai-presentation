# What enterprise Copilot Chat can do with pasted skills

Research for [#2](https://github.com/trungnguyenv/genai-presentation/issues/2), part of map [#1](https://github.com/trungnguyenv/genai-presentation/issues/1).
Researched 2026-11-19 against Microsoft Learn and Microsoft Support. Learn pages carry an `ms.date`, given below. Support pages show no date.

**Caveat:** Copilot features vary by licence and tenant settings, and admins can switch many of them off. Check every claim below in the company's own tenant before the talk.

## Naming and which product we mean

- The "Microsoft 365 Copilot Chat" app is now called **Microsoft Copilot Chat**, at `copilot.cloud.microsoft`. ([What is Microsoft Copilot?](https://learn.microsoft.com/en-us/copilot/plan/copilot-overview), ms.date 2026-11-17)
- **Copilot Chat (Basic)** is the version that comes with eligible Microsoft 365 licences, with no Copilot add-on. It is grounded in web data. To use work content you paste it, upload a file, or select a file. Some features are subject to [fair use limits](https://support.microsoft.com/microsoft-365-copilot/limits-for-features-copilot-chat), and Microsoft doesn't publish the numbers. (same page)
- We assume the Copilot Chat group has Copilot Chat (Basic) and no paid add-on. If they do have Microsoft 365 Copilot (Premium), everything below still applies, with more features on top.

## 1. Max message length: not documented

- Microsoft publishes **no character limit** for the Copilot Chat message box. The [fair use limits page](https://support.microsoft.com/microsoft-365-copilot/limits-for-features-copilot-chat) says Microsoft "does not publish or share specific numeric limits" because "service limits can vary".
- The only figures are user reports on Microsoft Q&A and Tech Community, and they disagree:
  - 2,000 or 4,000 characters, depending on licence ([Q&A](https://learn.microsoft.com/en-us/answers/questions/5321232/copilot-pro-prompt-character-limit), [Tech Community](https://techcommunity.microsoft.com/discussions/microsoft-copilot/copilot-prompt-limit-difference-between-licenses/4229004))
  - 16,000 characters in Sep 2024 ([Tech Community](https://techcommunity.microsoft.com/discussions/microsoft365copilot/prompt-length-limiations/4237812))
  - a drop from 128,000 to 8,000 overnight in Feb 2025 ([Q&A](https://learn.microsoft.com/en-us/answers/questions/5425053/i-have-been-using-a-128000-character-limit-on-the)). Microsoft gave no official answer in that thread.
- The nearest official numbers are for other features:
  - an admin-published **organizational prompt** can be up to **8,000** characters ([Organizational prompts](https://learn.microsoft.com/en-us/copilot/manage/organizational-prompts), ms.date 2026-09-21)
  - **agent instructions** can be up to **8,000** characters ([Build agents in Agent Builder](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-build), ms.date 2026-11-16)
  - **SKILL.md** files should stay under **20,000** characters ([Build skills for Copilot Chat](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/build-copilot-chat-skills), ms.date 2026-11-16)
- **What this means for the talk:** a 1–3k-word skill is about 6,000–20,000 characters, at roughly 6 characters per word. If the 8,000 figure users report is real, a long skill **won't fit in one pasted message**. Short skills (under about 1,200 words) probably will. **Test the real limit in the tenant.**

## 2. Saving and reusing a prompt

| Option | What it does | Available without the paid add-on? | Fit for a 1–3k-word skill |
|---|---|---|---|
| **Copilot Chat skills** | Upload a `SKILL.md` file, or a ZIP with `SKILL.md` at its root, from **Agents › More agents › Add › Upload skill**. You can also build one by describing it in chat. Users pick the skill explicitly, or let Copilot invoke it automatically. **Generally available.** ([Learn](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/build-copilot-chat-skills), [Support](https://support.microsoft.com/en-us/microsoft-365-copilot/create-edit-skills-copilot)) | **Not stated.** The docs require only "access to Microsoft Copilot" and permission to open Agents & Skills. They aren't supported in tenants that use Purview Information Barriers. | **Best fit.** It uses the same `SKILL.md` format as our agent skills, and the recommended size is under 20,000 characters. |
| **Saved prompts (Prompt Lab, formerly Prompt Gallery)** | After a prompt has run, hover over it and select **Save prompt**. Saved prompts are private to you, under "Your saved prompts" in the Prompt Lab, and you can view, edit or run them from there. ([Support](https://support.microsoft.com/en-us/microsoft-365-copilot/save-your-favorite-prompts-to-use-again)) | No licence is stated. | Good, but you can only save a prompt that has already been sent, so it's still limited by the message length. |
| **Agent Builder (declarative agent)** | Name, description, **instructions up to 8,000 characters**, knowledge, starter prompts. Each agent can carry up to 8 skills, with instructions under 20,000 characters each. ([Agent Builder](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder), [Build agents](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-build), [Add skills](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills)) | **Yes.** "A Microsoft 365 Copilot add-on license isn't required." Copilot Chat users get agents grounded in instructions or the web. SharePoint, connector and file knowledge need pay-as-you-go billing or a licence. ([Prerequisites](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/prerequisites), ms.date 2026-11-16) | Yes, if the skill goes in the agent's skills. A long skill won't fit in the 8,000-character instructions alone. Agents can be shared, which a saved prompt can't. Admins control who can create and use agents. |
| **Custom instructions** | **Settings › Personalization › Custom instructions** apply to all your future chats. ([Support](https://support.microsoft.com/en-us/microsoft-365-copilot/customize-how-microsoft-365-copilot-responds-to-you)) | **Yes.** Memory is "available to Copilot Chat users with and without a Microsoft Copilot license". It's in preview, and admins can turn it off through the "Enhanced personalization" control. ([Learn](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-personalization-memory), ms.date 2026-09-02) | Poor. They apply to every chat, not just one task, and no length limit is documented. |
| **Copilot Notebooks** (being renamed Copilot Workspaces) | A notebook holds per-notebook **Instructions** plus up to 50 references for Chat users (300 with the add-on). ([Licensing](https://support.microsoft.com/en-us/microsoft-365-copilot/copilot-notebooks-licensing), [Instructions](https://support.microsoft.com/en-us/microsoft-365-copilot/provide-custom-instructions-for-your-microsoft-365-copilot-notebook), [Get started](https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-microsoft-365-copilot-notebooks)) | **Yes**, in a "streamlined" version. You need a work account and a SharePoint/OneDrive plan. | Possible: one notebook per skill. No instruction length limit is documented. |
| **Organizational prompts** | Admins publish up to 1,000 prompts, each up to 8,000 characters. Users see them under Suggested, in the Prompt Lab and in autosuggest. Selecting one puts it in the message box without sending it. ([Learn](https://learn.microsoft.com/en-us/copilot/manage/organizational-prompts)) | Needs an AI Administrator or Search Editor to publish. | An option only if IT will publish the skill, and only for skills under 8,000 characters. |

## 3. Attaching files and screenshots (environment inspection)

- **Yes.** Select **+** in the message box, then:
  - **Upload images and files** from your device
  - **Attach cloud files** from OneDrive
  - **Add content** to pick work content

  Microsoft says Copilot Chat users without a licence have "some limitations" here, but doesn't say what they are. ([Add content to Copilot Chat prompts](https://support.microsoft.com/en-us/microsoft-365-copilot/add-content-to-microsoft-365-copilot-chat-prompts))
- Copilot Chat (Basic) can use organizational content **only if you upload or select it** with your prompt. It can't search Microsoft Graph for you. ([What is Microsoft Copilot?](https://learn.microsoft.com/en-us/copilot/plan/copilot-overview))
- Supported image types: `.png .jpg .jpeg .gif .bmp`, along with code files, Office documents, PDF, CSV and Loop files. That table is for work/school accounts and is labelled "with a Copilot license". ([File upload in Microsoft Copilot](https://support.microsoft.com/en-us/topic/file-upload-in-microsoft-copilot-8b7bf432-9576-4b16-9dee-6c19a4169e62))
- Microsoft documents no numeric limit on file count or size for Copilot Chat. Forum posts mention 20 files and 50 MB, but those figures are unofficial. Some Q&A threads report image upload missing in some tenants, and admins can disable file upload.
- **Workaround if a skill is too long to paste:** attach it as a `.md` or `.txt` file and write "Follow the skill in the attached file." This is an inference from the documented upload support, not a Microsoft recommendation. Test it.

## 4. XML-tagged text

- Microsoft documents no handling, stripping or restriction of XML tags in prompts.
- Microsoft's own prompt guidance uses XML-style tags. Its agent-instruction audit prompt wraps pasted text in `<instructions> … </instructions>`. For instructions themselves it recommends Markdown headings and lists. ([Write effective instructions](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/declarative-agent-instructions), ms.date 2026-11-09)
- Chat skill resource files may include `.xml`, `.md` and other formats ([Build skills for Copilot Chat](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/build-copilot-chat-skills)).
- **Conclusion:** wrapping a pasted skill in `<skill>` tags should work. Markdown inside the tags is the safest style.

## Admin restrictions to check with IT

Admins can:

- remove Copilot Chat entirely, control who can create and use agents, and turn off image generation and web search ([What is Microsoft Copilot? › Copilot controls](https://learn.microsoft.com/en-us/copilot/plan/copilot-overview))
- turn off Enhanced personalization, which disables custom instructions and memory ([Personalization and memory](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-personalization-memory))
- not disable Agent Builder separately while agents are enabled ([Agent Builder › Admin controls](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder))

Skills don't work in tenants that use Purview Information Barriers ([Build skills for Copilot Chat](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/build-copilot-chat-skills)).

## Open questions (test in the tenant)

1. What is the real message-box limit? Paste a 20,000-character text and see where it truncates or blocks.
2. Do Copilot Chat (Basic) users see **Agents & Skills › Upload skill**? The docs don't say whether it needs the add-on.
3. Can Chat users upload images and screenshots, or has the tenant disabled it?
