# Leetcode Progress

Just tracking personal progress for LeetCode 🏄‍♂️🏄‍♂️.

Mostly in TypeScript, but also Go, Kotlin, Java, Python, C#, and a few others for fun.

My [Leetcode Account](https://leetcode.com/jack_joseph/) :)

---

## Generator Script for Organizing Solutions

To make life easier, I wrote a
[shell script](https://github.com/dunleavyjack/Leetcode-Progress/blob/main/add_question.sh)
that generates everything I need when I add a new solution. It creates:

- A folder for the problem
- A `.ts` file for the code
- A `.md` file for a solution explanation and tips for future me

The command is:

```shell
npm run question <QuestionNumber> <QuestionName>
```

So, for example, I just write:

```shell
npm run question 1 TwoSum
```
