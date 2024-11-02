#!/bin/bash

# A script for generating a folder, an empty TypeScript file, and a markdown notes file based on a provided Leetcode question name.
#
# Example:
#
# `npm run question 999 TestQuestion`
#
# Generates a folder named 999-TestQuestion containing files:
# - TestQuestion.ts
# - TestQuestion.notes.md with initial content

# Check if two arguments were provided
if [ $# -ne 2 ]; then
  echo "Usage: create_question.sh <question_number> <question_name>"
  exit 1
fi

question_number="$1"
question_name="$2"
folder_name="${question_number}-${question_name}"

# Create a directory with the specified format
full_folder_path="./Solutions/$folder_name"
if [ ! -d "$full_folder_path" ]; then
  mkdir -p "$full_folder_path"
  echo "Created folder: $full_folder_path"
else
  echo "Folder '$full_folder_path' already exists. Skipping folder creation."
fi

# Create a TypeScript file with the specified name inside the folder
ts_file_name="$full_folder_path/$question_name.ts"
if [ ! -e "$ts_file_name" ]; then
  touch "$ts_file_name"
  echo "Created TypeScript file: $ts_file_name"
else
  echo "File '$ts_file_name' already exists. Skipping file creation."
fi

# Format the question name with spaces between capital letters
formatted_question_name=$(echo "$question_name" | sed 's/\([a-z]\)\([A-Z]\)/\1 \2/g')

# Create a Markdown notes file with the specified format and initial content
md_file_name="$full_folder_path/$question_name.notes.md"
if [ ! -e "$md_file_name" ]; then
  echo "# Notes: LC $question_number $formatted_question_name" >"$md_file_name"
  echo "Created Markdown notes file: $md_file_name"
else
  echo "File '$md_file_name' already exists. Skipping file creation."
fi
