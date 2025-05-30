import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaPlane, FaMapMarkedAlt, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Plan Your Perfect Trip with AI', 'Discover Amazing Destinations', 'Create Custom Itineraries'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl font-bold mb-6"
        style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
        variants={itemVariants}
      >
        <span ref={typedRef}></span>
      </motion.h1>
      
      <motion.p
        className="text-xl mb-8"
        style={{ color: theme === 'dark' ? '#cbd5e1' : '#4b5563' }}
        variants={itemVariants}
      >
        Get personalized travel itineraries generated by AI based on your preferences
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        variants={containerVariants}
      >
        <motion.div
          className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          style={{ 
            backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : '#ffffff',
            borderColor: theme === 'dark' ? 'var(--card-border)' : '#e5e7eb'
          }}
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
        >
          <FaMapMarkedAlt className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>
            Smart Recommendations
          </h3>
          <p style={{ color: theme === 'dark' ? '#cbd5e1' : '#4b5563' }}>
            Get AI-powered suggestions for attractions, restaurants, and activities
          </p>
        </motion.div>

        <motion.div
          className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          style={{ 
            backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : '#ffffff',
            borderColor: theme === 'dark' ? 'var(--card-border)' : '#e5e7eb'
          }}
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
        >
          <FaCalendarAlt className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>
            Detailed Itineraries
          </h3>
          <p style={{ color: theme === 'dark' ? '#cbd5e1' : '#4b5563' }}>
            Receive hour-by-hour schedules tailored to your preferences
          </p>
        </motion.div>

        <motion.div
          className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          style={{ 
            backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : '#ffffff',
            borderColor: theme === 'dark' ? 'var(--card-border)' : '#e5e7eb'
          }}
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
        >
          <FaPlane className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>
            Personalized Experience
          </h3>
          <p style={{ color: theme === 'dark' ? '#cbd5e1' : '#4b5563' }}>
            Plans adapted to your budget, companions, and travel style
          </p>
        </motion.div>
      </motion.div>

      {user ? (
        <motion.div variants={itemVariants}>
          <Link
            to="/plan-trip"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Planning Your Trip
          </Link>
        </motion.div>
      ) : (
        <motion.div className="space-y-4" variants={itemVariants}>
          <Link
            to="/register"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </Link>
          <p style={{ color: theme === 'dark' ? '#cbd5e1' : '#4b5563' }}>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-600 transition-colors">
              Login here
            </Link>
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Home; 