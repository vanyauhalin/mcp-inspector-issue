import * as child from "node:child_process"

process.loadEnvFile("../.env")

child.spawn(
	"npm",
	[
		"exec",
		"mcp-inspector",
		"--",
		"-e",
		`CUSTOM_VAR=${process.env.CUSTOM_VAR}`,
		"--",
		"node",
		"../main.js" // just a placeholder
	],
	{
		env: process.env,
		stdio: "inherit",
		shell: true,
	},
)
