const Dot = ({ imgURL, r, style, children }) => {
  return (
    <div
      style={{
        width: r,
        height: r,
        borderRadius: r,
        backgroundImage: `url(${imgURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'grid',
        placeItems: 'center',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
export default Dot
