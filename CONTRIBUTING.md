# Contributing

## Issues

Every issue should describe a feature, enhancement, or a bug and should be
properly tagged and added to the Kanban project.

Each issue being implemented should have at least one assignee.

## Pull Requests

Each pull request should implement an issue. There should be one pull request
for each issue that's been implemented and one issue for each pull request.

Pull requests must be code reviewed and tested by at least one other member
before it can be merged.

## Code Review

Do not approve code that

- Has unnecessary comments.
  - Code should be self-documenting. If it needs comments it's not good code.
- Has unnecessary console logs.
- Doesn't follow formatting paradigms.
- Isn't DRY.
  - Do not Repeat Yourself.
- Has anti-patterns
  - It needs to be dry, not shriveled.

## Formatting

| thing         | standard               |
| ------------- | ---------------------- |
| classes       | `UpperCamelCase`       |
| variables     | `camelCase`            |
| functions     | `camelCase`            |
| global consts | `SCREAMING_SNAKE_CASE` |

Prettier should take care of the rest when you commit.
