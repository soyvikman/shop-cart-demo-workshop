---
name: git-commit-formatter
description: Formats git commit messages according to Conventional Commits specification. Use this when the user asks to commit changes or write a commit message.
---

# Git Commit Formatter

## Objetivo
Aplicar la especificación de Conventional Commits en cada mensaje de confirmación.

## Instrucciones
1. Analiza los cambios para determinar el tipo principal (feat, fix, docs, refactor...).
2. Identifica el scope si aplica (componente o archivo específico).
3. Escribe la descripción en modo imperativo (ej. "add feature", no "added feature").

## Formato
`<type>[optional scope]: <description>`

## Ejemplo
`feat(auth): implement login with google`