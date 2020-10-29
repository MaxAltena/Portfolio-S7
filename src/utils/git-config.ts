export const getGitVariables = (): {
	gitHash: string;
	gitHashShort: string;
	gitTimestamp: string;
	gitAuthorName: string;
	gitAuthorEmail: string;
	gitBranch: string;
	gitMessage: string;
	buildTime: string;
} => {
	let gitHash: string;
	let gitHashShort: string;
	let gitTimestamp: string;
	let gitAuthorName: string;
	let gitAuthorEmail: string;
	let gitBranch: string;
	let gitMessage: string;
	let buildTime: string;

	const windowApp = window.app;

	if (windowApp.gitHash !== '${gitHash}') {
		gitHash = windowApp.gitHash;
	}
	if (windowApp.gitHashShort !== '${gitHashShort}') {
		gitHashShort = windowApp.gitHashShort;
	}
	if (windowApp.gitTimestamp !== '${gitTimestamp}') {
		gitTimestamp = windowApp.gitTimestamp;
	}
	if (windowApp.gitAuthorName !== '${gitAuthorName}') {
		gitAuthorName = windowApp.gitAuthorName;
	}
	if (windowApp.gitAuthorEmail !== '${gitAuthorEmail}') {
		gitAuthorEmail = windowApp.gitAuthorEmail;
	}
	if (windowApp.gitBranch !== '${gitBranch}') {
		gitBranch = windowApp.gitBranch;
	}
	if (windowApp.gitMessage !== '${gitMessage}') {
		gitMessage = windowApp.gitMessage;
	}
	if (windowApp.buildTime !== '${buildTime}') {
		buildTime = windowApp.buildTime;
	}

	return {
		gitHash,
		gitHashShort,
		gitTimestamp,
		gitAuthorName,
		gitAuthorEmail,
		gitBranch,
		gitMessage,
		buildTime,
	};
};
