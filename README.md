# GitGo

GitGo is a command-line utility that simplifies working with Git repositories.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
  - [Command-line Options](#command-line-options)
  - [Examples](#examples)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

GitGo is a utility written in TypeScript that helps you interact with Git repositories more efficiently. It provides a simple command-line interface to perform common Git operations and open repository URLs in your default web browser.

## Usage

### Command-line Options

- `-h` or `--help`: Display help text.
- `--from`, `-f`, or `--form`: Create a URL based on the specified remote.

### Examples

```bash
# Display help text
gitgo -h

# Open repository URL for the default remote
gitgo

# Open repository URL for a specific remote
gitgo --from origin



# Clone the repository
git clone https://github.com/EsinShadrach/gitgo.git

# Navigate to the project directory
cd gitgo

# Install dependencies
bun install

# Build the project
bun run compile or bun compile

```
