import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';

interface MenuItem {
  to: string;
  label: string;
  icon?: ReactNode;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export function Sidebar({ sections, base }: { sections: MenuSection[]; base: string }) {
  return (
    <aside className="w-64 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden md:flex md:flex-col">
      <div className="px-4 py-4 text-xl font-bold text-brand">EduPulse</div>
      <nav className="px-2 space-y-6 overflow-auto">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="px-2 text-xs uppercase tracking-wider text-slate-400">{section.title}</div>
            <ul className="mt-2 space-y-1">
              {section.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={`${base}/${item.to}`}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${
                        isActive ? 'bg-slate-100 dark:bg-slate-800 font-medium' : ''
                      }`
                    }
                  >
                    <span aria-hidden>{item.icon}</span>
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}