# Random Sections Check
### *Package Name*: random-sections-check
### *Child Type*: pre import
### *Platform*: all
### *Required*: required

This child module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature and uses the Conversion Tool's standard logging functions. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose

Identifies if a course uses random sections, and logs where they are.

## How to Install

```
npm install random-sections-check
```

## Run Requirements

None

## Options

None

## Outputs

None

## Process

Describe in steps how the module accomplishes its goals.

1. Gathers all of the quiz export files
2. Looks in each one for random sections within the quiz questions
3. Logs information about any that are found

## Log Categories

List the categories used in logging data in your module.

- Random Sections in Quizzes
