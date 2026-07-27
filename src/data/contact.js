/**
 * Contact details and external profile links shown in the portfolio.
 *
 * Keep all URLs current and verify them before deployment.
 */
export const contact = {
  eyebrow: 'Contact',

  title: "Let's build something meaningful.",

  description:
    "I'm open to software engineering internships, graduate opportunities, collaborations, and conversations about building useful software.",

  email: 'shahamitsuresh@gmail.com',

  location: 'Ahmedabad, Gujarat, India',

  availability: 'Open to software engineering roles',

  links: [
    {
      id: 'email',
      label: 'Email',
      value: 'shahamitsuresh@gmail.com',
      href: 'mailto:shahamitsuresh@gmail.com',
      external: false,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/amitshahworks',
      href: 'https://github.com/amitshahworks',
      external: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/amitshahstack',
      href: 'https://www.linkedin.com/in/amitshahstack',
      external: true,
    },
  ],
}