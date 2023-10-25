#!/bin/bash

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
  mkdir "$full_folder_path"
  echo "Created folder: $full_folder_path"
else
  echo "Folder '$full_folder_path' already exists. Skipping folder creation."
fi

# Create a TypeScript file with the specified name inside the folder
file_name="$full_folder_path/$question_name.ts"
if [ ! -e "$file_name" ]; then
  touch "$file_name"
  echo "Created TypeScript file: $file_name"
else
  echo "File '$file_name' already exists. Skipping file creation."
fi