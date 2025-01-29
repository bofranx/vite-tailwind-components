import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"];

interface TabsProps {
  children: ReactNode[]
}

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const refs = useRef<(HTMLDivElement | null)[]>([]);



  useEffect(() => {
    const updateUnderlineProps = () => {
      const currentTab = refs.current[activeTab];
      if (currentTab) {
        setUnderlineProps({
          left: currentTab.offsetLeft,
          width: currentTab.offsetWidth,
        });
      }
    };

    updateUnderlineProps();
    window.addEventListener('resize', updateUnderlineProps);
    return () => {
      window.removeEventListener('resize', updateUnderlineProps);
    };
  }, [activeTab]);

  return (
    <div className="flex flex-col items-center mt-10 relative">
      <div className="flex space-x-4 ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            ref={el => (refs.current[index] = el)}
            className={`cursor-pointer py-2 px-4 ${activeTab === index ? 'text-blue-500' : 'text-gray-500'
              }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}

      </div>
      <motion.div
        className="h-1 bg-blue-500 rounded"
        animate={underlineProps}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ position: 'absolute', top: refs.current[activeTab]?.clientHeight }}
      />
      <div className="mt-4">
        {children[activeTab]}
      </div>

    </div>
  );
};

export default Tabs;
