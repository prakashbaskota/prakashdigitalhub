import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
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
    <strong>Prakash Digital Hub</strong> · Professional IT Solutions & Web Development · All rights reserved. 
    <br><span class="text-sm">Secure Infrastructure. Reliable Technology. Digital Growth.</span>
  `,
};
