interface IRepo {
  name: string;
  description: string;
  repo_url: string;
}

const repos: IRepo[] = [
  {
    name: 'NitroVim',
    description: 'A modern Neovim distribution with sensible defaults, optimized for developers who want a productive setup out of the box.',
    repo_url: 'https://github.com/NitroBrain/nitrovim',
  },
  {
    name: 'NitroHttp',
    description: 'A lightweight and fast API testing client for sending HTTP requests, inspecting responses, and debugging REST APIs.',
    repo_url: 'https://github.com/NitroBrain/nitrohttp',
  },
  {
    name: 'NitroShell',
    description: 'A modern terminal application focused on speed, simplicity, and an excellent developer experience.',
    repo_url: 'https://github.com/NitroBrain/nitroshell',
  },
  {
    name: 'NitroOS',
    description: 'A Hyprland-first Linux distribution built for developers, featuring a polished desktop, curated tools, and a productive workflow.',
    repo_url: 'https://github.com/Nitro-OS/NitroHypr',
  },
  {
    name: 'NitroBrain Labs',
    description: 'An interactive learning platform where developers build practical skills through hands-on courses, coding exercises, and real-world projects.',
    repo_url: 'https://labs.nitrobrain.dev/dashboard',
  },
];

export default repos;
