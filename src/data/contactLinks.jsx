import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const contactLinks = [
    {
      platform: 'GitHub',
      icon: <Github size={28} />,
      link: 'https://github.com/SalDaSIIva',
      username: '@SalDaSIIva'
    },
    {
      platform: 'Email',
      icon: <Mail size={28} />,
      link: 'mailto:alex_24vc@live.com.pt',
      username: 'alex_24vc@live.com.pt'
    },
    {
      platform: 'LinkedIn',
      icon: <Linkedin size={28} />,
      link: 'https://linkedin.com/in/alexandrefssilva',
      username: 'in/alexandrefssilva'
    }
  ];

  export default contactLinks;
  