#!/bin/bash
# Script to remove octal-encoded directory paths from images folder
# These are accidental artifacts from encoding issues

echo "Cleaning up octal-encoded paths in images/..."

# Find and remove directories with numeric names (octal-encoded paths)
find images -type d -path "*/[0-9]*" -print0 | while IFS= read -r -d '' dir; do
    echo "Removing directory: $dir"
    rm -rf "$dir"
done

# Find and remove files in numeric-named directories
find images -type f -path "*/[0-9]*/*" -print0 | while IFS= read -r -d '' file; do
    echo "Removing file: $file"
    rm -f "$file"
done

echo "Cleanup complete!"
