import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const CountUp = ({
  target = 100,
  duration = 2,
  suffix = '',
  prefix = '',
  heading = '',
  className = '',
  headingClassName = '',
  threshold = 0.1,
  rootMargin = '0px'
}) => {
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (!inView) return;

    const start = 0;
    const end = target;
    const range = end - start;
    const increment = range / (duration * 60);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <motion.div
        className={`text-3xl md:text-4xl font-bold ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {prefix}
        {count}
        {suffix}
      </motion.div>
      {heading && (
        <motion.p
          className={`text-sm md:text-base font-medium text-center ${headingClassName}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {heading}
        </motion.p>
      )}
    </div>
  );
};

export default CountUp;
