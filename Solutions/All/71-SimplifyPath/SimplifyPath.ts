function simplifyPath(path: string): string {
  const segments: string[] = [];

  // Split the array by "/", and iterate through each remaining segment
  for (let segment of path.split("/")) {
    // The segment is empty or a "." (meaning, the current dir) skip it
    if (!segment || segment === ".") {
      continue;

      // If the segment is ".." (go back a dir), pop the last filename from the stack
    } else if (segment === "..") {
      segments.pop();

      // Otherwise, add it to the stack along with a "/"
    } else {
      segments.push("/" + segment);
    }
  }

  // Join the segments back together, or return a blank "/"
  return segments.join("") || "/";
}
