interface IRepo {
  name: string;
  description: string;
  repo_url: string;
}
const repos: IRepo[] = [
  {
    name: 'NitroVim',
    description: 'Just install. Start coding. Done.',
    repo_url: 'https://github.com/NitroBrain/nitrovim',
  },
  {
    name: 'NitroHttp',
    description: 'Lightweight API testing tool ',
    repo_url: 'https://github.com/NitroBrain/nitrohttp',
  },
  {
    name: 'NitroShell',
    description: 'Fast, sleek, and modern terminal.',
    repo_url: 'https://github.com/NitroBrain/nitroshell',
  },
  {
    name: 'NitroOS',
    description: 'Hyprland-first developer OS',
    repo_url: 'https://github.com/Nitro-OS/NitroHypr',
  },
  {
    name: 'NitroBrain Labs',
    description: 'Developer education platform for interactive learning, practice, and real-world coding experience.',
    repo_url: 'https://labs.nitrobrain.dev/dashboard',
  }
];
export default repos;
