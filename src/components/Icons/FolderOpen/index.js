import React from 'react'

export default React.memo(function FolderOpen(props) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      {...props}
    >
      <path d='M26 30l6-16h-26l-6 16zM4 12l-4 18v-26h9l4 4h13v4z'></path>
    </svg>
  )
})
