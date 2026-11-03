const profile = {
	name: "Ranti Adepoju",
	role: "Full-Stack Software Developer",
	previousRole: "Background: Road Transport & Logistics Professional",
	location: "Lagos, Nigeria.",
	bio: "**Architecting Software that solves real-world problem & Translating Human Imagination into Digital Reality**",
	avatar: "./Ranti%20Dev%20coding%20.jpeg",
	email: "markrichbatholomew@gmail.com",
	socials: {
		facebook: "https://m.facebook.com/adepoju.ranti/",
		instagram: "https://www.instagram.com/ranti_adepoju/",
		linkedin: "https://www.linkedin.com/in/ranti-adepoju-8a1058190",
	}
};

const root = document.querySelector("#profile-root");

function renderProfile() {
	root.innerHTML = `
		<article class="profile-card" aria-labelledby="profile-name">
			<div class="cover">
				<img class="web-icon" src="./web%20icon.jpg" alt="" aria-hidden="true">
			</div>
			<div class="profile-content">
				<div class="identity">
					<img class="avatar" src="${profile.avatar}" alt="Portrait of ${profile.name}" width="96" height="96">
					<p class="availability">Available for work & Projects</p>
				</div>
				<h1 id="profile-name">${profile.name}</h1>
				<p class="role">${profile.role}</p>
				<p class="previous-role">${profile.previousRole}</p>
				<p class="location">${profile.location}</p>
				<p class="bio">${profile.bio}</p>
				<nav class="social-links" aria-label="Social media links">
					<a class="social-link facebook-link" href="${profile.socials.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.4 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.3-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H7.5v2.8h2.6V21z"/></svg>
					</a>
					<a class="social-link instagram-link" href="${profile.socials.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
						<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="6.5" r="1.2" fill="currentColor"/></svg>
					</a>
					<a class="social-link linkedin-link" href="${profile.socials.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.02h2.97v9.32ZM6.45 7.75a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.57 10.59h-2.96v-4.53c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.61H9.87V9.02h2.84v1.27h.04c.4-.73 1.36-1.5 2.79-1.5 2.98 0 3.53 1.96 3.53 4.51v5.04Z"/></svg>
					</a>
				</nav>
				<div class="actions">
					<a class="button" href="${profile.socials.linkedin}" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
					<a class="button button-secondary" href="mailto:${profile.email}">Message</a>
				</div>
			</div>
			<footer class="profile-footer">Copyright 2026: This Profile card is designed by RantiDev.</footer>
		</article>
	`;
}

renderProfile();
