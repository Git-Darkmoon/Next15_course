import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>DASHBOARD</h2>

      {children}
    </div>
  )
}
export default Layout
