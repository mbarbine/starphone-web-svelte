#!/bin/bash

# Function to display the directory structure
print_tree() {
  local indent="$2"
  echo "${indent}|-- $(basename "$1")"
  indent="${indent}    "
  for file in "$1"/*; do
    if [ -d "$file" ]; then
      print_tree "$file" "$indent"
    else
      echo "${indent}|-- $(basename "$file")"
    fi
  done
}

# Starting point, current directory by default
dir="${1:-.}"
echo "$(basename "$dir")"
print_tree "$dir" ""

