import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const HeaderBadgesWidget = ({ authors }) => {
	let githubUsernames = {
		Mick: "symbolpunk"
	}

	let buildAuthorBadge = function (author) {
		return (
			<a class="header-badge" href={`https://github.com/${githubUsernames[author]}`}>
				<span class="author-avatar" style={{ backgroundImage: "url('https://avatars.githubusercontent.com/" + githubUsernames[author] + "')" }}></span>
				<span class="author-name">{author}</span>
			</a>
		)
	}

	return <div class="header-badges">{authors.split(',').map(buildAuthorBadge)}</div>;
};

