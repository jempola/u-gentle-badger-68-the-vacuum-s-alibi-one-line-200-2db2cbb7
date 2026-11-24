// Writes this entry's one-line excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "My lidar saw the crumbs, my schedule saw the time, and my battery saw the door. I chose the door.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
