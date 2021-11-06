#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const { description, version } = require("./package.json");

const { generate, run } = require("./cli");

program
  .command("start [appname]", { isDefault: true })
  .description("scaffold a new justREST API project")
  .action(generate(program));

program.command("run").description("run your justREST project").action(run);
program
  .command("run:fresh")
  .description(
    chalk.blueBright`a fresh run of your project with MySQL data cleared and re-initialized.`
  )
  .addHelpText(
    "after",
    chalk.yellow`
Starts your MySQL container instance, runs seed data and other migrations if necessary.\nIt will then spawn an Express API using nodemon for local development.`
  )
  .action(run);

program
  .description(description)
  .version(version, "-v, --version")
  .parse(process.argv);
