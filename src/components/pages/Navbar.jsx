



// "use client"

// // components/Navbar.tsx
// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'
// import { Button, Drawer } from 'antd'
// import { MenuOutlined, UserOutlined } from '@ant-design/icons'

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { label: 'Home', href: '/' },
//     { label: 'Properties', href: '/properties' },
//     { label: 'About', href: '/about' },
//     { label: 'Contact', href: '/contact' },
//   ]

//   const NavLink = ({ href, children, mobile = false }) => (
//     <Link
//       href={href}
//       className={`
//         relative font-medium transition-colors duration-300
//         ${pathname === href 
//           ? 'text-[#ff6b35] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ff6b35] after:rounded-full' 
//           : 'text-gray-600 hover:text-[#ff6b35]'
//         }
//         ${mobile ? 'text-lg py-3 block border-b border-gray-100 last:border-b-0' : ''}
//       `}
//       onClick={() => mobile && setIsMobileMenuOpen(false)}
//     >
//       {children}
//     </Link>
//   )

//   return (
//     <>
//       <nav className={`
//         fixed top-0 left-0 right-0 z-50 transition-all duration-300
//         ${isScrolled 
//           ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
//           : 'bg-white/90 backdrop-blur-sm'
//         }
//       `}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16 lg:h-20">
//             {/* Logo */}
//             <Link href="/" className="text-2xl lg:text-3xl font-bold text-gray-800 hover:text-[#ff6b35] transition-colors">
//               Ghorbari
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <NavLink key={item.href} href={item.href}>
//                   {item.label}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Desktop Auth Button */}
//             <div className="hidden md:block">
//               <Button
//                 type="primary"
//                 size="large"
//                 icon={<UserOutlined />}
//                 className="bg-[#ff6b35] hover:bg-[#e55a2b] border-[#ff6b35] hover:border-[#e55a2b] rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
//               >
//                 Login / Sign Up
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
//             <Button
//               type="text"
//               icon={<MenuOutlined />}
//               className="md:hidden text-gray-600 hover:text-[#ff6b35] hover:bg-gray-100"
//               onClick={() => setIsMobileMenuOpen(true)}
//               size="large"
//             />
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Drawer */}
//       <Drawer
//         title="Menu"
//         placement="right"
//         onClose={() => setIsMobileMenuOpen(false)}
//         open={isMobileMenuOpen}
//         className="md:hidden"
//         width={280}
//       >
//         <div className="flex flex-col space-y-4">
//           {navItems.map((item) => (
//             <NavLink key={item.href} href={item.href} mobile>
//               {item.label}
//             </NavLink>
//           ))}
//           <div className="pt-6 border-t border-gray-100">
//             <Button
//               type="primary"
//               size="large"
//               icon={<UserOutlined />}
//               className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] border-[#ff6b35] hover:border-[#e55a2b] rounded-full shadow-lg"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Login / Sign Up
//             </Button>
//           </div>
//         </div>
//       </Drawer>
//     </>
//   )
// }


"use client"

// components/Navbar.tsx
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Button, Drawer } from 'antd'
import { MenuOutlined, UserOutlined } from '@ant-design/icons'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const NavLink = ({ href, children, mobile = false }) => (
    <Link
      href={href}
      className={`
        relative font-medium transition-colors duration-300
        ${pathname === href 
          ? 'text-[#ff6b35] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ff6b35] after:rounded-full' 
          : 'text-gray-600 hover:text-[#ff6b35]'
        }
        ${mobile ? 'text-lg py-3 block border-b border-gray-100 last:border-b-0' : ''}
      `}
      onClick={() => mobile && setIsMobileMenuOpen(false)}
    >
      {children}
    </Link>
  )

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-30 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'bg-white/90 backdrop-blur-sm'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
              <Link href="/" className="">
            <img className=' w-full' src="/images/logo.png" alt="" />
          </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop Auth Button */}
            <div className="hidden md:block">
              <Button
                type="primary"
                size="large"
                icon={<UserOutlined />}
                className="bg-[#ff6b35] hover:bg-[#e55a2b] border-[#ff6b35] hover:border-[#e55a2b] rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Login / Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              className="md:hidden text-gray-600 hover:text-[#ff6b35] hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(true)}
              size="large"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setIsMobileMenuOpen(false)}
        open={isMobileMenuOpen}
        className="md:hidden"
        width={280}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} mobile>
              {item.label}
            </NavLink>
          ))}
          <div className="pt-6 border-t border-gray-100">
            <Button
              type="primary"
              size="large"
              icon={<UserOutlined />}
              className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] border-[#ff6b35] hover:border-[#e55a2b] rounded-full shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login / Sign Up
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}
