import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'Skills',
      href: getPermalink('/#skills'),
    },
    {
      text: 'Projects',
      href: getPermalink('/#projects'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [{ text: 'Hire Me', href: getPermalink('/#contact'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Professional Services',
      links: [
        { text: 'IT Infrastructure', href: '#services' },
        { text: 'Network Engineering', href: '#services' },
        { text: 'Microsoft 365 Solutions', href: '#services' },
        { text: 'Cybersecurity', href: '#services' },
        { text: 'Backup & Disaster Recovery', href: '#services' },
        { text: 'Web Development', href: '#services' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'About Me', href: '#about' },
        { text: 'My Skills', href: '#skills' },
        { text: 'Projects', href: '#projects' },
        { text: 'Blog', href: '/blog' },
        { text: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Contact Information',
      links: [
        { text: 'Email: Prakashbaskota@gmail.com', href: 'mailto:Prakashbaskota@gmail.com' },
        { text: 'Phone: +91 0000000', href: 'tel:+910000000' },
        { text: 'Available Worldwide', href: '#' },
        { text: 'Remote Support', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:Prakashbaskota@gmail.com' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/prakashbaskota' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/prakashbaskota' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/910000000' },
  ],
  footNote: `
    <div class="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
      <span>© 2026 Prakash Digital Hub. All rights reserved.</span>
      <span class="text-slate-400">Designed by Prakash Baskota</span>
    </div>
    <div class="mt-1 text-sm text-slate-400">Secure Infrastructure. Reliable Technology. Digital Growth.</div>
  `,
};
