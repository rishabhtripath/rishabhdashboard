import { Code2, Globe, Zap, FileCode, Palette, Package, GitBranch, Terminal, Cloud, Tags, Plug } from 'lucide-react'

export const skills = [
  { name: 'React.js', category: 'Frontend development', icon: Code2, tags: ['Hooks', 'Components', 'State'] },
  { name: 'JavaScript', category: 'Frontend development', icon: Zap, tags: ['ES6+', 'Async', 'APIs'] },
  { name: 'HTML5', category: 'Frontend development', icon: Globe, tags: ['Semantic', 'A11y', 'Forms'] },
  { name: 'CSS3', category: 'Frontend development', icon: Palette, tags: ['Layouts', 'Motion', 'Responsive'] },
  { name: 'Tailwind CSS', category: 'Frontend development', icon: Palette, tags: ['Utilities', 'Design systems', 'Responsive'] },
  { name: 'Bootstrap', category: 'Frontend development', icon: Package, tags: ['Components', 'Grid', 'Utilities'] },
  { name: 'Drupal', category: 'CMS', icon: Package, tags: ['Modules', 'Templates', 'Views'] },
  { name: 'WordPress', category: 'CMS', icon: FileCode, tags: ['Themes', 'CMS', 'Plugins'] },
  { name: 'CAMP', category: 'CMS', icon: FileCode, tags: ['Content', 'Publishing', 'Management'] },
  { name: 'Git', category: 'Tools', icon: GitBranch, tags: ['Version control', 'Branches', 'Commits'] },
  { name: 'GitHub', category: 'Tools', icon: GitBranch, tags: ['Repositories', 'Pull requests', 'Actions'] },
  { name: 'VS Code', category: 'Tools', icon: Terminal, tags: ['Editor', 'Extensions', 'Debugging'] },
  { name: 'Vercel', category: 'Tools', icon: Cloud, tags: ['Deployments', 'Preview', 'Hosting'] },
  { name: 'Meta Tags', category: 'Additional', icon: Tags, tags: ['Social cards', 'Metadata', 'Sharing'] },
  { name: 'API Integration', category: 'Additional', icon: Plug, tags: ['REST', 'Data', 'Services'] },
]
