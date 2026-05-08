import { motion } from 'framer-motion'

const nodes = [
  { left: '7%', top: '20%', size: 5, delay: 0 },
  { left: '18%', top: '58%', size: 4, delay: 0.7 },
  { left: '34%', top: '31%', size: 5, delay: 1.1 },
  { left: '51%', top: '70%', size: 4, delay: 0.3 },
  { left: '68%', top: '24%', size: 5, delay: 1.4 },
  { left: '84%', top: '49%', size: 4, delay: 0.9 },
  { left: '93%', top: '77%', size: 5, delay: 1.8 },
]

function BlockchainBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_-12%,rgba(255,255,255,0.11),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(158,231,216,0.08),transparent_30%),radial-gradient(circle_at_12%_82%,rgba(255,255,255,0.055),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.026)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(circle_at_50%_12%,black,transparent_74%)]" />
      <motion.svg
        className="absolute inset-0 h-full w-full opacity-30"
        aria-hidden="true"
        animate={{ opacity: [0.22, 0.34, 0.22] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <line x1="7%" y1="20%" x2="34%" y2="31%" stroke="rgba(158,231,216,0.2)" strokeWidth="1" />
        <line x1="18%" y1="58%" x2="34%" y2="31%" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
        <line x1="34%" y1="31%" x2="68%" y2="24%" stroke="rgba(158,231,216,0.16)" strokeWidth="1" />
        <line x1="51%" y1="70%" x2="68%" y2="24%" stroke="rgba(255,255,255,0.11)" strokeWidth="1" />
        <line x1="51%" y1="70%" x2="84%" y2="49%" stroke="rgba(158,231,216,0.14)" strokeWidth="1" />
        <line x1="84%" y1="49%" x2="93%" y2="77%" stroke="rgba(255,255,255,0.11)" strokeWidth="1" />
      </motion.svg>
      {nodes.map((node) => (
        <motion.span
          key={`${node.left}-${node.top}`}
          className="absolute rounded-full bg-white shadow-[0_0_14px_rgba(158,231,216,0.42)]"
          style={{
            left: node.left,
            top: node.top,
            width: node.size,
            height: node.size,
          }}
          animate={{ opacity: [0.28, 0.82, 0.28], scale: [1, 1.32, 1] }}
          transition={{
            duration: 5.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: node.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,3,0.15),rgba(3,3,3,0.78)_78%,#030303)]" />
    </div>
  )
}

export default BlockchainBackground
