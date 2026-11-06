import { useState } from 'react';
import { 
  FolderGit2, 
  Layers, 
  ExternalLink, 
  Terminal, 
  TrendingUp, 
  Rocket, 
  ArrowUpRight, 
  Clock, 
  FileText, 
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { Project, ProjectClassification, ProjectStatus, Dimension } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectCatalogProps {
  onSelectProject: (project: Project) => void;
  activeDimension: Dimension | 'all';
}

export function ProjectCatalog({ onSelectProject, activeDimension }: ProjectCatalogProps) {
  const [selectedClassification, setSelectedClassification] = useState<ProjectClassification | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Status Badge styling helper
  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'Launched': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30';
      case 'Development': return 'text-[var(--saffron)] bg-[var(--saffron)]/10 border-[var(--saffron)]/30';
      case 'Testing': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'Planning': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'Prototype': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30';
      case 'Proposal': return 'text-amber-400 bg-amber-400/10 border-amber-400/30';
      case 'Research': return 'text-indigo-400 bg-indigo-400/10 border-indigo-400/30';
      default: return 'text-zinc-400 bg-zinc-400/10 border-zinc-400/30';
    }
  };

  const filteredProjects = PROJECTS.filter((proj) => {
    // Classification filter
    if (selectedClassification !== 'all' && proj.classification !== selectedClassification) {
      return false;
    }
    // Dimension filter from global navbar / pathways
    if (activeDimension !== 'all' && !proj.dimensions.includes(activeDimension)) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = proj.title.toLowerCase().includes(q);
      const matchDesc = proj.shortDescription.toLowerCase().includes(q);
      const matchTag = proj.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchTag) return false;
    }
    return true;
  });

  const categories: { label: string; value: ProjectClassification | 'all'; count: number }[] = [
    { label: 'All Projects', value: 'all', count: PROJECTS.length },
    { label: 'Active Ventures', value: 'active', count: PROJECTS.filter(p => p.classification === 'active').length },
    { label: 'Deeply Planned', value: 'deeply-planned', count: PROJECTS.filter(p => p.classification === 'deeply-planned').length },
    { label: 'Proposals (Future)', value: 'proposal', count: PROJECTS.filter(p => p.classification === 'proposal').length },
    { label: 'Employer Work', value: 'employer', count: PROJECTS.filter(p => p.classification === 'employer').length },
    { label: 'Experiments', value: 'experiment', count: PROJECTS.filter(p => p.classification === 'experiment').length },
  ];

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-[var(--saffron)] font-bold block mb-2">
          Project Archive & Documentation
        </span>
        <h2 className="header-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          SYSTEMS, VENTURES <span className="text-[var(--saffron)]">&</span> PROPOSALS
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          A structured archive separating launched companies and co-developed ventures from deeply planned engineering architectures and conceptual proposals. Click any project to inspect complete A-to-Z documentation.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="mb-10 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Classification Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-2xl w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedClassification(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
                  selectedClassification === cat.value
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedClassification === cat.value ? 'bg-black text-white' : 'bg-white/10 text-zinc-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search architecture, stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[var(--saffron)] transition-colors font-mono"
            />
          </div>
        </div>

        {/* Dimension Active Indicator */}
        {activeDimension !== 'all' && (
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 px-1">
            <Filter className="w-3.5 h-3.5 text-[var(--saffron)]" />
            <span>Filtering by dimension: <strong className="text-white uppercase">{activeDimension}</strong></span>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          // Border styling depending on classification
          const isProposal = project.classification === 'proposal';
          const isDeeplyPlanned = project.classification === 'deeply-planned';
          const isEmployer = project.classification === 'employer';
          const isActive = project.classification === 'active';

          let borderAccent = 'border-l-4 border-l-white/20';
          if (isActive) borderAccent = 'border-l-4 border-l-[var(--saffron)]';
          if (isDeeplyPlanned) borderAccent = 'border-l-4 border-l-purple-500';
          if (isProposal) borderAccent = 'border-l-4 border-l-amber-500';
          if (isEmployer) borderAccent = 'border-l-4 border-l-emerald-500';

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`liquid-glass p-7 ${borderAccent} interactive-card cursor-pointer flex flex-col justify-between group`}
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold border ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {project.period}
                  </span>
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--saffron)] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[var(--saffron)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-xs text-zinc-400 mt-1 mb-4 font-mono line-clamp-1">
                  {project.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-6">
                  {project.shortDescription}
                </p>

                {/* Ownership Context Tag */}
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 mb-4 text-[11px] text-zinc-400">
                  <span className="text-[9px] font-mono uppercase tracking-wider block text-zinc-500 font-bold mb-0.5">
                    Ownership & Context
                  </span>
                  <span className="line-clamp-1 text-zinc-300">
                    {project.ownershipContext}
                  </span>
                </div>
              </div>

              {/* Card Footer: Tags & Action */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 text-[10px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 text-zinc-500 text-[10px] font-mono">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-[var(--saffron)] group-hover:underline flex items-center gap-1 font-semibold">
                    <FileText className="w-3.5 h-3.5" />
                    Deep Documentation
                  </span>
                  <span className="text-zinc-500">
                    {project.features.length} Features
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 liquid-glass p-8 rounded-3xl">
          <p className="text-zinc-400 font-mono text-sm">
            No projects match the selected classification and dimension filter.
          </p>
          <button
            onClick={() => { setSelectedClassification('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* DEDICATED PROPOSALS CALLOUT ANCHOR SECTION */}
      <div id="proposals" className="mt-20 liquid-glass p-8 md:p-10 border-l-4 border-l-amber-500">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="tag text-amber-300 border-amber-500/30 font-mono font-bold">
                Dedicated Archive
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Preserved Intellectual Property
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Project Proposals & Future Concept Vault
            </h3>
            <p className="text-zinc-300 text-xs md:text-sm max-w-2xl leading-relaxed">
              These entries represent in-depth architectural and product concepts discussed and formulated (e.g., <strong className="text-white">WAH Mahi 1</strong>, <strong className="text-white">Blockchain INR Settlement</strong>, <strong className="text-white">WAH Waters</strong>) but deliberately deferred. They are archived with technical rigor and are strictly differentiated from active commercial ventures.
            </p>
          </div>
          <button
            onClick={() => setSelectedClassification('proposal')}
            className="px-6 py-3 rounded-full bg-amber-500 text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shrink-0 shadow-lg shadow-amber-500/10"
          >
            View All Proposals ({PROJECTS.filter(p => p.classification === 'proposal').length})
          </button>
        </div>
      </div>
    </section>
  );
}
