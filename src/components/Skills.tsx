import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, TrendingUp, PieChart, Code2, Brain, Share2 } from 'lucide-react';

const skills = [
  {
    category: "Data Analysis",
    icon: <TrendingUp className="w-8 h-8" />,
    items: ["Statistical Analysis", "Data Mining", "Predictive Modeling", "A/B Testing"]
  },
  {
    category: "Visualization",
    icon: <PieChart className="w-8 h-8" />,
    items: ["Tableau", "Power BI", "D3.js", "Matplotlib"]
  },
  {
    category: "Programming",
    icon: <Code2 className="w-8 h-8" />,
    items: ["Python", "R", "SQL", "JavaScript"]
  },
  {
    category: "Databases",
    icon: <Database className="w-8 h-8" />,
    items: ["MySQL", "PostgreSQL", "MongoDB", "BigQuery"]
  },
  {
    category: "Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    items: ["Regression", "Classification", "Clustering", "Deep Learning"]
  },
  {
    category: "Soft Skills",
    icon: <Share2 className="w-8 h-8" />,
    items: ["Communication", "Problem Solving", "Project Management", "Team Leadership"]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">Comprehensive toolkit for data analysis</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;